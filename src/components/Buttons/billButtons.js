import ActiveButton from './activeButton';
import DisabledButton from './disabledbutton';
export default function BillCTA(params) {
    return(
            <div class = "billCtaDiv">
                {
                    params.tableActive[0] == ""?
                    <div></div>:
                    <div class="billCta">
                        {
                            params.tableStatus[0]=="BillPrinted"?<DisabledButton text="Print Bill"></DisabledButton>:<ActiveButton text="Print Bill" clickFunc = "printBill" bill= {params.bill}></ActiveButton>
                        }
                        {
                            params.tableStatus[0]=="BillPrinted"?<ActiveButton text="Settle Bill" clickFunc = "settleBill" bill= {params.bill}></ActiveButton>:<DisabledButton text="Settle Bill"></DisabledButton>
                        }
                    </div>
                }
            </div>
        
    )
}