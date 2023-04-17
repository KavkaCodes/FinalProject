import newKot from "@/data/newKot"
export default function KotItems(params) {
    return(
        <div class = "kotItemsDiv">
            {
                                params.kotActive[0] == ""
                                ?<div></div>
                                :<div class="menuItems">
                                {
                                    params.kotActive[0] == "NEW"? newKot.map(
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
                                    ) :params.kotList[params.kotActive[0]-1].map(
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