import easyinvoice from 'easyinvoice';
import billInvoiceTemplate from "../../data/bill"
import orderNoFetch from '@/data/orderNoIncrement'

export default function ActiveButton(params){
    
    
    async function clickCta(clickFunc)  {
        if(clickFunc == "printBill"){

            let billInvoice = JSON.parse(JSON.stringify(billInvoiceTemplate));
            let billNo = orderNoFetch();
            billInvoice.information.number = billNo;
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
            easyinvoice.download('myInvoice.pdf', result.pdf);

            let currentOrder = {...params.currentOrder[0]};
            currentOrder.fs_currenOrders_currentBillNo = billNo;
            currentOrder.fs_currentOrder_isBillPrinted = true;
            currentOrder.fs_currentOrder_currentBillPrintTime = new Date().toString().substring(15,24);
            params.currentOrder[1](currentOrder);
        } else if(clickFunc == "addItem"){
            console.log(document.getElementById("itemQty").value);
            console.log(document.getElementById("itemRemarks").value);
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
        } else if(clickFunc == "printKot"){
            // Check this code
            params.currentOrder[0].fs_currentOrder_kots.push(params.newKot[0]);
            params.newKot[1]([]);
            params.kotActive[1]("");
        }
    }
    return (
        <button class="cta activeCta" onClick={()=>clickCta(params.clickFunc)}>
            {params.text}
        </button>
    )
}