import styles from '@/styles/Home.module.css'
import Tables from "../components/tables";
import categories from "../data/categories";
import menu from "../data/menu"

export default function Pos(tableActive){

    return (
        <div class="pos">
            <Tables tableActive={tableActive} forScreen="POS"></Tables>

            <div class="tableOrder">
                <div class="order">
                    <div class="orderInfo">
                        <div class="categories">
                            <div class="category">
                                All
                            </div>
                            {
                                categories.map(
                                    (category) => (
                                        <div class="category">{category}</div>
                                    )
                                )
                            }
                        </div>
                        <div class="menu">
                            <div class="searchBar">
                                <input type="text" id={styles.menuSearch} class="textfield" name="menuSearch" placeholder="Search through the menu" />
                            </div>
                            <div class="menuList">
                                <div class="menuHeader">
                                    <div class="menuHeaderItem">
                                    <p class="menuHeaderItemText">
                                            Item Name
                                        </p>
                                        
                                    </div>
                                    <div class="menuHeaderItem">
                                        <p class="menuHeaderItemText">
                                            Rate
                                        </p>
                                    </div>
                                </div>
                                <div class="menuItems">

                                {
                                    menu.map(
                                        (item) => ( 
                                            <div class="menuItem">
                                                <div class="menuItemField">
                                                    {item.fs_menu_itemName}
                                                </div>
                                                <div class="menuItemField">
                                                    {item.fs_menu_itemRate}
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                                </div>
                            </div>
                        </div>
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
                            <div class="menuItems">
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                                <div class="menuItem">
                                        <div class="menuItemField">
                                            Butter Chicken
                                        </div>
                                        <div class="menuItemField">
                                            2
                                        </div>
                                        <div class="menuItemField">
                                            11.20
                                        </div>
                                        <div class="menuItemField">
                                            ---
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                    
                    </div>
                </div>
                <div class="kots">
                    <h1 id="heading">KOTS</h1>
                    <div class="kotList">
                        <div class="kot">1</div>
                        <div class="kot">2</div>
                        <div class="kot">3</div>
                        <div class="kot">4</div>
                        <div class="kot">5</div>
                        <div class="kot">
                            <span class="material-symbols-outlined">add</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}