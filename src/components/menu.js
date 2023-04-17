import menu from "../data/menu"
import { useState } from 'react';
import newKot from "@/data/newKot";
export default function Menu(params) {
    let menuList = (params.menuCategoryActive[0] == "All"?menu:menu.filter((item)=> (item.fs_menu_category == params.menuCategoryActive[0])));

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
            menuList = menuList.filter((item) => (
                item.fs_menu_itemName.toLocaleUpperCase().match(searchInput.toLocaleUpperCase())
            )
        )
      }

      function clickMenuItem(item) {
        newKot.push(item);
        console.log(newKot);
      }
    return(
        <div class="menu">
            <div class="searchBar">
                <input type="text" id="menuSearch" class="textfield" name="menuSearch" placeholder="Search through the menu" onChange={handleChange}/>
            </div>
            <div class="menuList">
                <div class="menuHeader">
                    <div class="menuHeaderItem" >
                        <p class="menuHeaderItemText">Item Name</p>
                    </div>
                    <div class="menuHeaderItem">
                        <p class="menuHeaderItemText">Rate</p>
                    </div>
                </div>
                <div class="menuItems">
                    {
                        menuList.map(
                            (item) => ( 
                                <button class="menuItem" id={params.kotActive[0] == "NEW"?"menuItemAllowed":"menuItemNotAllowed"} onDoubleClick={params.kotActive[0] == "NEW"?()=>clickMenuItem(item):void(0)}>
                                    <div class="menuItemField">
                                        {item.fs_menu_itemName}
                                    </div>
                                    <div class="menuItemField">
                                        {item.fs_menu_itemRate}
                                    </div>
                                </button>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}