
import Tables from "../components/tables";
import ActiveButton from '@/components/Buttons/activeButton';
import tables from "../data/tables"

export default function Billing(params){
    let table = params.tableActive[0] == ""?[]:tables.filter(
        (table)=>(
            params.tableActive[0] == table.fs_table_tableNo
        )
    )
    let bill = [];
    let billCalc = [];
    if (table.length != 0) {
        let subtotal = 0.00, taxableTotal = 0.00, taxAmount = 0.00, total = 0.00;
        for (let i = 0; i < table[0].fs_kots.length; i++) {
            for (let j = 0; j < table[0].fs_kots[i].length; j++) {
                const element = table[0].fs_kots[i][j];
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
            <Tables tableActive={params.tableActive} kotActive = {params.kotActive} forScreen="Billing"></Tables>
            <div class="bill">
                {params.tableActive[0] == ""?<div class="billing">
                    <div class="billInfo">
                        <div class="billHeader">
                            <div class="billHeaderItem">
                                <p class="billHeaderItemText">Item Name</p>
                            </div>
                            <div class="billHeaderItem">
                                <p class="billHeaderItemText">Comments</p>
                            </div>
                            <div class="billHeaderItem">
                                <p class="billHeaderItemText">Quantity</p>
                            </div>
                            <div class="billHeaderItem">
                                <p class="billHeaderItemText">Rate</p>
                            </div>
                        </div>
                    </div> 
                </div>:<div class="billing">
                        <div class="billInfo">
                            <div class="billHeader">
                                <div class="billHeaderItem">
                                    <p class="billHeaderItemText">Item Name</p>
                                </div>
                                <div class="billHeaderItem">
                                    <p class="billHeaderItemText">Comments</p>
                                </div>
                                <div class="billHeaderItem">
                                    <p class="billHeaderItemText">Quantity</p>
                                </div>
                                <div class="billHeaderItem">
                                    <p class="billHeaderItemText">Rate</p>
                                </div>
                            </div>
                            <div class="billItems">
                                {
                                    bill.map(
                                        (item)=>(
                                            <div class="billItem">
                                                <div class="billItemField">
                                                    {item.fs_menu_itemName}
                                                </div>
                                                <div class="billItemField">
                                                    {item.fs_kotList_specialInstruction?item.fs_kotList_specialInstruction:"---"}
                                                </div>
                                                <div class="billItemField">
                                                    {item.fs_kotList_qty}
                                                </div>
                                                <div class="billItemField">
                                                    {item.fs_menu_itemRate}
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                        <div class="billCalc">
                            <div class="calc" id="separateGap" >
                                <p class="calcClassification" >SubTotal:</p>
                                <p class="amount">{billCalc[0]}</p>
                            </div>
                            <div class="calc">
                                <p class="calcClassification">HST 13%:</p>
                                <p class="amount">{billCalc[2]}</p>
                            </div>
                            <div class="calc" id="separateGap">
                                <p class="calcClassification">Total:</p>
                                <p class="amount" id="separate">{billCalc[3]}</p>
                            </div>
                        </div>
                    </div>
}
                <div class="cta">
                    <ActiveButton></ActiveButton>
                </div>
        </div>
        </div>
    )
}