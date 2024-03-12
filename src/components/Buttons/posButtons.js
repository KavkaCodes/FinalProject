// Components
import ActiveButton from './activeButton';
import DisabledButton from './disabledbutton';
// Screens
// Pages
// Data
// Packages

export default function PosCTA(params) {
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
                    params.kotActive[0] == ""?
                    <div></div>:
                    <div class="billCta">
                        {/* {
                            params.kotActive[0] == "NEW" || getTableInfo(params.tablesLine[0]) == "BillPrinted"?
                            <DisabledButton text="Cancel KOT"></DisabledButton>:
                            <ActiveButton text="Cancel KOT" clickFunc = "cancelKot"></ActiveButton>
                        }
                        {
                            params.kotActive[0] == "NEW" || getTableInfo(params.tablesLine[0]) == "BillPrinted"?
                            <DisabledButton text="Modify KOT"></DisabledButton>:
                            <ActiveButton text="Modify KOT" clickFunc = "modifyKot"></ActiveButton>
                        } */}
                        {
                            params.kotActive[0] == "NEW" && params.newKot[0].length != 0?    
                            <ActiveButton text="Print KOT" clickFunc = "printKot" tableActive={params.tableActive}  tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot}></ActiveButton>:
                            <DisabledButton text="Print KOT"></DisabledButton>
                        }     
                    </div>    
                }
            </div>
        
    )
}