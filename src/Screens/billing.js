
import BillHeader from "@/components/billHeader";
import Tables from "../components/tables";
import BillCTA from "@/components/Buttons/billButtons";
import BillItems from "@/components/billItems";
import BillCalc from "@/components/billCalc";
import ActiveButton from '../components/Buttons/activeButton';
import { useState } from 'react';

export default function Billing(params){

    const [displayContact, setDisplayContact] = useState(false);
    
    const isObjectEmpty = (objectName) => {
        return Object.keys(objectName).length === 0
    }
    let bill = [];
    let billCalc = [];
    if(!isObjectEmpty(params.currentOrder[0])) {
        let subtotal = 0.00, taxableTotal = 0.00, taxAmount = 0.00, total = 0.00;
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
            <div class="popUpModal" style={{ zIndex: displayContact ? 99 : -3 }}>
                <div class="align">
                    <button id="closeButton" onClick={() => setDisplayContact((prevDisplay) => !prevDisplay)}>
                        <span class="material-symbols-outlined">cancel</span>
                    </button>
                </div>
                <div class="itemInfoBox">
                    <h1>Contact Info</h1>
                </div>
                <input type="text" id="clientName" class="textfield" name="clientName" placeholder="Enter the client's name" />
                <input type="text" id="clientContact" class="textfield" name="clientContact" placeholder="Enter the client's contact no." />
                <input type="text" id="clientAdd" class="textfield" name="clientAdd" placeholder="Enter the client's address" />
                <input type="text" id="clientZip" class="textfield" name="clientZip" placeholder="Enter the client's zip code"/>
                <ActiveButton text = "Print Bill" clickFunc = "printBill" newKot = {params.newKot} tableActive={params.tableActive} tablesLine = {params.tablesLine}  currentOrder = {params.currentOrder} bill= {bill} displayContact = {[displayContact, setDisplayContact]}></ActiveButton>
            </div>
            <Tables tableActive={params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} forScreen="Billing"></Tables>
            <div class="bill">
                <div class = "billing">
                    <div class = "billInfo">
                        <BillHeader></BillHeader>
                        <BillItems tableActive={params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} bill={bill}></BillItems>
                        <BillCalc tableActive={params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} billCalc={billCalc}></BillCalc>
                    </div>
                </div>
                <BillCTA screenActive = {params.screenActive} tableActive={params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} currentOrder = {params.currentOrder}  bill={bill} billCalc={billCalc} displayContact = {[displayContact, setDisplayContact]}></BillCTA>
            </div>
        </div>
    )
}