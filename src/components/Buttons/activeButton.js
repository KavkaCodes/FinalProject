// Components
// Screens
// Pages
// Data
import billInvoiceTemplate from "../../data/bill"
import orderNoFetch from '@/data/orderNoIncrement'
import currentOrders from '@/data/currentOrders';
import orders from '../../data/order'
// Packages
import easyinvoice from 'easyinvoice';

export default function ActiveButton(params){ 
    async function clickCta(clickFunc)  {
        if(clickFunc == "printBill"){
            // Generate order number
            let billNo = orderNoFetch();

            // Update print time in current order
            let myCurrentOrders = currentOrders[params.tableActive[0]];
            myCurrentOrders.fs_currenOrders_currentBillNo = billNo;
            myCurrentOrders.fs_currentOrder_isBillPrinted = true;
            myCurrentOrders.fs_currentOrder_currentBillPrintTime = new Date().toString().substring(15,24);
            console.log(myCurrentOrders);
            params.currentOrder[1](myCurrentOrders);

            // Create Invoice
            let billInvoice = JSON.parse(JSON.stringify(billInvoiceTemplate));
            billInvoice.information.number = billNo;
            billInvoice.client.company = document.getElementById("clientName").value==""?"":document.getElementById("clientName").value
            billInvoice.client.address = document.getElementById("clientContact").value==""?"":document.getElementById("clientContact").value
            billInvoice.client.zip = document.getElementById("clientAdd").value==""?"":document.getElementById("clientAdd").value
            billInvoice.client.city = document.getElementById("clientZip").value==""?"":document.getElementById("clientZip").value
            for (let i = 0; i < params.bill.length; i++) {
                const element = params.bill[i];
                billInvoice.products.push(
                    {
                        "quantity": element.fs_kotList_qty,
                        "description": element.fs_menu_itemName,
                        "tax-rate": element.fs_menu_isTaxable?13:0,
                        "price": element.fs_menu_itemRate
                    } 
                )
            }

            //Create your invoice! Easy!
            const result = await easyinvoice.createInvoice(billInvoice, function (result) {
                // The response will contain a base64 encoded PDF file
                console.log('PDF base64 string: ', result.pdf);
                // Now this result can be used to save, download or render your invoice
                // Please review the documentation below on how to do this
            });

            // Download Invoice
            easyinvoice.download(billNo.toString() + '.pdf', result.pdf);

            // Update tablestatus
            let myTablesLine = [...params.tablesLine[0]];
            for (let i = 0; i < myTablesLine.length; i++) {
                const element = myTablesLine[i];
                if (element.fs_table_tableNo == params.tableActive[0]) {
                    console.log(element);
                    element.fs_table_tabStatus = "BillPrinted";
                }
            }
            params.tablesLine[1](myTablesLine);

            // Get out of popup
            params.displayContact[1]((prevDisplay) => !prevDisplay);

        } else if(clickFunc == "displayContact"){

            // Get out of popup
            params.displayContact[1]((prevDisplay) => !prevDisplay);

        }  else if(clickFunc == "settleBill"){

            // Shift currentorder info to orders
            let myCurrentOrder = currentOrders[params.tableActive[0]];
            orders.push(myCurrentOrder);

            // Format order

        //     "fs_currentOrder_clientName" : "",
        //     "fs_currentOrder_clientContactNo" : "",
        //     "fs_currentOrder_clientAddress" : "",
        // orders[orders.length -1].fs_currentOrder_clientInfo
            orders[orders.length -1].fs_table_tableNo = params.tableActive[0]
            orders[orders.length -1].fs_orders_subTotal = params.billCalc[0]
            orders[orders.length -1].fs_orders_taxableTotal = params.billCalc[1]
            orders[orders.length -1].fs_orders_taxAmount = params.billCalc[2]
            orders[orders.length -1].fs_orders_total = params.billCalc[3]

            // Reset all states
            currentOrders[params.tableActive[0]] = {
                "fs_currenOrders_currentBillNo" : "",
                "fs_currentOrder_kots" : [],
                "fs_currentOrder_isBillPrinted" : "",
                "fs_currentOrder_currentBillPrintTime" : "",
                "fs_currentOrder_isBillSettled" : "",
                "fs_currentOrder_currentBillSettleTime" : "",
                "fs_currentOrder_clientInfo": {
                    "fs_currentOrder_clientName" : "",
                    "fs_currentOrder_clientContactNo" : "",
                    "fs_currentOrder_clientAddress" : "",
                }
            }
            params.tableActive[1]("");
            params.screenActive[1]("POS");
            params.currentOrder[1]({});

            // Update tablestatus
            let myTablesLine = [...params.tablesLine[0]];
            for (let i = 0; i < myTablesLine.length; i++) {
                const element = myTablesLine[i];
                if (element.fs_table_tableNo == params.tableActive[0]) {
                    console.log(element);
                    element.fs_table_tabStatus = "Empty";
                }
            }
            params.tablesLine[1](myTablesLine);

        } else if(clickFunc == "addItem") {

            let orderItems = [...params.newKot[0]]
            let orderItem = {
                "fs_menu_itemId" : params.item.fs_menu_itemId,
                "fs_menu_itemName" : params.item.fs_menu_itemName,
                "fs_menu_isTaxable" : params.item.fs_menu_isTaxable, 
                "fs_menu_itemRate": params.item.fs_menu_itemRate,
                "fs_kotList_qty" : document.getElementById("itemQty").value==""?1:document.getElementById("itemQty").value,
                "fs_kotList_specialInstruction" : document.getElementById("itemRemarks").value == ""?"---":document.getElementById("itemRemarks").value,
            }
            console.log(orderItem);
            orderItems.push(orderItem);
            params.newKot[1](orderItems);
            params.display[1]((prevDisplay) => !prevDisplay)
            document.getElementById("itemRemarks").value = "";
            document.getElementById("itemQty").value = "";
        } else if(clickFunc == "printKot") {
            // Enter info in currentOrders
            let myCurrentOrders = currentOrders;
            // console.log(myCurrentOrders[params.tableActive[0]].fs_currentOrder_kots);
            myCurrentOrders[params.tableActive[0]].fs_currentOrder_kots.push(params.newKot[0])
            let myCurrentOrder = myCurrentOrders[params.tableActive[0]];
            console.log(myCurrentOrder);
            params.currentOrder[1](myCurrentOrder);
            // console.log(params.currentOrder[0]);
            // Empty newKot variable
            params.newKot[1]([]);
            params.kotActive[1]("");
            // Update tablestatus
            let myTablesLine = [... params.tablesLine[0]];
            
            for (let i = 0; i < myTablesLine.length; i++) {
                const element = myTablesLine[i];
                console.log(params.tableActive[0]);
                console.log(element);
                if (element.fs_table_tableNo == params.tableActive[0]) {
                    element.fs_table_tabStatus = "Occupied";
                }
            }
            params.tablesLine[1](myTablesLine);
            console.log(params.tablesLine[0]);
        }
    }
    return (
        <button class="cta activeCta" onClick={()=>clickCta(params.clickFunc)}>
            {params.text}
        </button>
    )
}