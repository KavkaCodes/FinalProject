import ActiveButton from './activeButton';
import DisabledButton from './disabledbutton';
export default function PosCTA(params) {
    return(
            <div class = "billCtaDiv">
                {
                params.kotActive[0] == ""?
                <div></div>:
                <div class="billCta">
                    {
                        params.kotActive[0] == "NEW" || params.tableStatus[0] == "BillPrinted"?
                        <DisabledButton text="Cancel KOT"></DisabledButton>:
                        <ActiveButton text="Cancel KOT" clickFunc = "cancelKot"></ActiveButton>
                    }
                    {
                        params.kotActive[0] == "NEW" || params.tableStatus[0] == "BillPrinted"?
                        <DisabledButton text="Modify KOT"></DisabledButton>:
                        <ActiveButton text="Modify KOT" clickFunc = "modifyKot"></ActiveButton>
                    }
                    {
                        params.kotActive[0] == "NEW" && params.newKot[0].length != 0?    
                        <ActiveButton text="Print KOT" clickFunc = "printKot" kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot}></ActiveButton>:
                        <DisabledButton text="Print KOT"></DisabledButton>
                    }     
                </div>
                    
                }
            </div>
        
    )
}