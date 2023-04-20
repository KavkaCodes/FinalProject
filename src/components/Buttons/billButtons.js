import ActiveButton from './activeButton';
import DisabledButton from './disabledbutton';
export default function BillCTA(params) {
    function getTableInfo(myTablesLine) {
        for (let i = 0; i < myTablesLine.length; i++) {
            const element = myTablesLine[i];
            console.log(params.tableActive[0]);
            console.log(element);
            if (element.fs_table_tableNo == params.tableActive[0]) {
                console.log(element.fs_table_tabStatus);
                return element.fs_table_tabStatus;
            }
        }
    }

    return(
            <div class = "billCtaDiv">
                {
                    params.tableActive[0] == ""?
                    <div></div>:
                    <div class="billCta">
                        {
                            getTableInfo(params.tablesLine[0])=="BillPrinted"?<DisabledButton text="Print Bill"></DisabledButton>:<ActiveButton text="Print Bill" clickFunc = "displayContact" tableActive={params.tableActive} tablesLine = {params.tablesLine}  currentOrder = {params.currentOrder} bill= {params.bill} displayContact ={params.displayContact}></ActiveButton>
                        }
                        {
                            getTableInfo(params.tablesLine[0])=="BillPrinted"?<ActiveButton text="Settle Bill" clickFunc = "settleBill" screenActive = {params.screenActive} tableActive={params.tableActive} tablesLine = {params.tablesLine}  currentOrder = {params.currentOrder} bill= {params.bill} billCalc={params.billCalc}></ActiveButton>:<DisabledButton text="Settle Bill"></DisabledButton>
                        }
                    </div>
                }
            </div>
        
    )
}