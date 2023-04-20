import menu from "../data/menu"
import { useState } from 'react';
import ActiveButton from "./Buttons/activeButton";

export default function Menu(params) {
    let menuList = (
        params.menuCategoryActive[0] == "All" ? menu :
        menu.filter(
            (item)=> (
                item.fs_menu_category == params.menuCategoryActive[0]
            )
        )
    );
    const [searchInput, setSearchInput] = useState("");
    const [display, setDisplay] = useState(false);
    const [item, setItem] = useState("");
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
        setItem(item);
        setDisplay((prevDisplay) => !prevDisplay)
        console.log(params.currentOrder[0]);
      }
    return(
        <div class="menu">
            <div class="popUpModal" style={{ zIndex: display ? 99 : -3 }}>
                <div class="align">
                    <button id="closeButton" onClick={() => setDisplay((prevDisplay) => !prevDisplay)}>
                    <span class="material-symbols-outlined">
                    cancel
                    </span>
                    </button>
                </div>
                <div class="itemInfoBox">
                    <div className="infoBox">
                        <p class="infoPara">KOT No.: {params.currentOrder[0].length > 0 && params.tableActive != ""?params.currentOrder[0]["fs_currentOrder_kots"].length + 1: "Null"}</p>
                        <p class="infoPara">Table No.: {params.tableActive[0]}</p>
                    </div>
                    <h1>
                        {item.fs_menu_itemName}
                    </h1>
                    {/* <div className="infoBox">
                        <p class="infoPara">KOT No.: {params.currentOrder[0]["fs_currentOrder_kots.length"] + 1}</p>
                        <p class="infoPara">Table No.: {params.tableActive}</p>
                    </div> */}
                    
                </div>
                <input type="text" id="itemQty" class="textfield" name="itemQty" placeholder="Enter the quantity" />
                <input type="text" id="itemRemarks" class="textfield" name="itemRemarks" placeholder="Enter cooking instructions" />
                <ActiveButton text = "Add Item" clickFunc = "addItem" newKot = {params.newKot} item = {item} display = {[display, setDisplay]}></ActiveButton>
            </div>
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
                                <button class="menuItem" id={params.kotActive[0] == "NEW"?"menuItemAllowed":"menuItemNotAllowed"} onClick={params.kotActive[0] == "NEW"?()=>clickMenuItem(item):void(0)} onDoubleClick={params.kotActive[0] == "NEW"?()=>clickMenuItem(item):void(0)}>
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