
import BillHeader from "@/components/billHeader";
import Tables from "../components/tables";
import tables from "../data/tables"
import BillCTA from "@/components/Buttons/billButtons";
import BillItems from "@/components/billItems";
import BillCalc from "@/components/billCalc";
export default function Billing(params){
    // var easyinvoice = require('easyinvoice');

    
    const isObjectEmpty = (objectName) => {
        return Object.keys(objectName).length === 0
    }
    let bill = [];
    let billCalc = [];
    if(!isObjectEmpty(params.currentOrder[0])) {

        let subtotal = 0.00, taxableTotal = 0.00, taxAmount = 0.00, total = 0.00;
        // const date = new Date();
        // billInvoice.information.number = d.getFullYear() + 001;

        for (let i = 0; i < params.currentOrder[0].fs_currentOrder_kots.length; i++) {
            for (let j = 0; j < params.currentOrder[0].fs_currentOrder_kots[i].length; j++) {
                const element = params.currentOrder[0].fs_currentOrder_kots[i][j];
                subtotal += (element.fs_menu_itemRate * element.fs_kotList_qty);
                element.fs_menu_isTaxable ? taxableTotal += (element.fs_menu_itemRate * element.fs_kotList_qty) : taxableTotal = taxableTotal;
                bill.push(element);
            }
        }
        taxAmount = taxableTotal * 0.13;
        total = subtotal + taxAmount;
        billCalc.push(subtotal.toFixed(2), taxableTotal.toFixed(2), taxAmount.toFixed(2), total.toFixed(2));
    }

    
    return (
        <div class="billing">
            <Tables tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} forScreen="Billing"></Tables>
            <div class="bill">
                <div class = "billing">
                    <div class = "billInfo">
                        <BillHeader></BillHeader>
                        <BillItems tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} bill={bill}></BillItems>
                        <BillCalc tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} billCalc={billCalc}></BillCalc>
                    </div>
                </div>
                <BillCTA tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} currentOrder = {params.currentOrder}  bill={bill}></BillCTA>
        </div>
        </div>
    )
}