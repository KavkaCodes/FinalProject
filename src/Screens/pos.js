import { useState } from 'react';
import Tables from "../components/tables";

import Menu from "../components/menu"
import MenuCategories from "../components/menuCategories"
import tables from "../data/tables"

export default function Pos(params){
    const [menuCategoryActive, setmenuCategoryActive] = useState('All');

    let newKot = [];
    let table = tables.filter(
            (table) => (table.fs_table_tableNo == params.tableActive[0])
        ); 
    let kotList = table.length?table[0].fs_kots:[];      
    console.log(kotList);  
    function clickKot(makeActive) {
        params.kotActive[1](makeActive);
      }
    function newKotCreate() {
        params.kotActive[1]("NEW");
        newKot = [];
    }  
    return (
        <div class="pos">
            <Tables tableActive={params.tableActive} kotActive = {params.kotActive} forScreen="POS"></Tables>
           
            <div class="tableOrder">
                <div class="order">
                    <div class="orderInfo">
                        <MenuCategories menuCategoryActive={[menuCategoryActive,setmenuCategoryActive]} kotActive={params.kotActive}></MenuCategories>
                        <Menu  menuCategoryActive={[menuCategoryActive,setmenuCategoryActive]} kotActive={params.kotActive}></Menu>
                        {params.kotActive[0] == ""
                        ?<EmptyKot></EmptyKot>
                        :<div class="kotInfo">
                            <div class="menuHeader">
                                    <div class="menuHeaderItem">
                                    <p class="menuHeaderItemText">
                                            Item Name
                                        </p>
                                        
                                    </div><div class="menuHeaderItem">
                                        <p class="menuHeaderItemText">
                                            Quantity
                                        </p>
                                    </div>
                                    <div class="menuHeaderItem">
                                        <p class="menuHeaderItemText">
                                            Rate
                                        </p>
                                    </div>
                                    <div class="menuHeaderItem">
                                        <p class="menuHeaderItemText">
                                            Comments
                                        </p>
                                    </div>
                            </div>
                            <div class="menuItems">
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
                                    ) :kotList[params.kotActive[0]-1].map(
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
                        </div>}
                    </div>
                    <div class="buttons">
                    
                    </div>
                </div>
                <div class="kots">
                    <h1 id="heading">KOTS</h1>
                    <div class="kotList">
                    {
                        kotList.map(
                            (kot) => (
                                <button onClick= {()=>clickKot(kotList.indexOf(kot) + 1)} class={params.kotActive[0]==kotList.indexOf(kot) + 1 ? "btnActive kot" :"btn kot"}>
                                    {kotList.indexOf(kot) + 1}
                                </button>
                            )
                        )
                    }
                    {
                        params.tableActive[0]!=""?<button onClick={()=>newKotCreate()} class="btnActive kot">
                                <span class="material-symbols-outlined">add</span>
                        </button>: <div></div>
                    }
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

function EmptyKot() {
    return(
        <div class="kotInfo">
                        <div class="menuHeader">
                                <div class="menuHeaderItem">
                                <p class="menuHeaderItemText">
                                        Item Name
                                    </p>
                                    
                                </div><div class="menuHeaderItem">
                                    <p class="menuHeaderItemText">
                                        Quantity
                                    </p>
                                </div>
                                <div class="menuHeaderItem">
                                    <p class="menuHeaderItemText">
                                        Rate
                                    </p>
                                </div>
                                <div class="menuHeaderItem">
                                    <p class="menuHeaderItemText">
                                        Comments
                                    </p>
                                </div>
                        </div>
                        </div>
    )
}