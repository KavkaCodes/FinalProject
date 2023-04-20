// Components
// Screens
// Pages
// Data
// Packages

export default function KotItems(params) {
    return(
        <div class = "kotItemsDiv">
            {
                params.kotActive[0] == ""
                ?<div></div>
                :<div class="menuItems">
                {
                    params.kotActive[0] == "NEW" && params.newKot[0].length != 0? 
                        // console.log(params.newKot[0])   
                        params.newKot[0].map(
                            (item)=>(
                                <div class="menuItem">
                                    <div class="menuItemField">
                                        {item.fs_menu_itemName}
                                    </div>
                                    <div class="menuItemField">
                                    {item.fs_kotList_qty}
                                    </div>
                                    <div class="menuItemField">
                                        {item.fs_menu_itemRate}
                                    </div>
                                    <div class="menuItemField">
                                        {item.fs_kotList_specialInstruction?item.fs_kotList_specialInstruction:"---"}
                                    </div>
                                </div>
                            )
                        )
                        : 
                        params.kotActive[0] == "NEW" && params.newKot[0].length == 0 ? 
                        <div></div>
                        :params.currentOrder[0].fs_currentOrder_kots[params.kotActive[0] - 1].map(
                        (item)=>(
                            <div class="menuItem">
                                <div class="menuItemField">
                                    {item.fs_menu_itemName}
                                </div>
                                <div class="menuItemField">
                                {item.fs_kotList_qty}
                                </div>
                                <div class="menuItemField">
                                    {item.fs_menu_itemRate}
                                </div>
                                <div class="menuItemField">
                                    {item.fs_kotList_specialInstruction?item.fs_kotList_specialInstruction:"---"}
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