// Components
// Screens
// Pages
// Data
// Packages

export default function BillItems(params) {
    return(
        <div class="billItemsDiv">
            {
                            params.tableActive[0] == ""?
                            <div></div>:
                            <div class="billItems">
                                {
                                    params.bill.map(
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
                        }
        </div>
                            
    )
}