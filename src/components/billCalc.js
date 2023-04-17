export default function BillCalc(params) {
    return(
        <div class="billCalcDiv">
{
                             params.tableActive[0] == ""?
                             <div></div>:
                             <div class="billCalc">
                            <div class="calc" id="separateGap" >
                                <p class="calcClassification" >SubTotal:</p>
                                <p class="amount">{params.billCalc[0]}</p>
                            </div>
                            <div class="calc">
                                <p class="calcClassification">HST 13%:</p>
                                <p class="amount">{params.billCalc[2]}</p>
                            </div>
                            <div class="calc" id="separateGap">
                                <p class="calcClassification">Total:</p>
                                <p class="amount" id="separate">{params.billCalc[3]}</p>
                            </div>
                        </div>
                        }
        </div>
                            
    )
}