import styles from '@/styles/Home.module.css'
import Tables from "../components/tables";
import categories from "../data/categories";
import menu from "../data/menu"

export default function Pos(){
    return (
        <div className={styles.pos}>
            <Tables></Tables>

            <div className={styles.tableOrder}>
                <div className={styles.order}>
                    <div className={styles.orderInfo}>
                        <div className={styles.categories}>
                            <div className={styles.category}>
                                All
                            </div>
                            {
                                categories.map(
                                    (category) => (
                                        <div className={styles.category}>{category}</div>
                                    )
                                )
                            }
                        </div>
                        <div className={styles.menu}>
                            <div className={styles.searchBar}>
                                <input type="text" id={styles.menuSearch} className={styles.textfield} name="menuSearch" placeholder="Search through the menu" />
                            </div>
                            <div className={styles.menuList}>
                                <div className={styles.menuHeader}>
                                    <div className={styles.menuHeaderItem}>
                                    <p className={styles.menuHeaderItemText}>
                                            Item Name
                                        </p>
                                        
                                    </div>
                                    <div className={styles.menuHeaderItem}>
                                        <p className={styles.menuHeaderItemText}>
                                            Rate
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.menuItems}>

                                {
                                    menu.map(
                                        (item) => ( 
                                            <div className={styles.menuItem}>
                                                <div className={styles.menuItemField}>
                                                    {item.fs_menu_itemName}
                                                </div>
                                                <div className={styles.menuItemField}>
                                                    {item.fs_menu_itemRate}
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                                </div>
                            </div>
                        </div>
                        <div className={styles.kotInfo}>
                            <div className={styles.menuHeader}>
                                    <div className={styles.menuHeaderItem}>
                                    <p className={styles.menuHeaderItemText}>
                                            Item Name
                                        </p>
                                        
                                    </div><div className={styles.menuHeaderItem}>
                                        <p className={styles.menuHeaderItemText}>
                                            Quantity
                                        </p>
                                    </div>
                                    <div className={styles.menuHeaderItem}>
                                        <p className={styles.menuHeaderItemText}>
                                            Rate
                                        </p>
                                    </div>
                                    <div className={styles.menuHeaderItem}>
                                        <p className={styles.menuHeaderItemText}>
                                            Comments
                                        </p>
                                    </div>
                            </div>
                            <div className={styles.menuItems}>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                                <div className={styles.menuItem}>
                                        <div className={styles.menuItemField}>
                                            Butter Chicken
                                        </div>
                                        <div className={styles.menuItemField}>
                                            2
                                        </div>
                                        <div className={styles.menuItemField}>
                                            11.20
                                        </div>
                                        <div className={styles.menuItemField}>
                                            ---
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                    
                    </div>
                </div>
                <div className={styles.kots}>
                    <h1 id={styles.heading}>KOTS</h1>
                    <div className={styles.kotList}>
                        <div className={styles.kot}>1</div>
                        <div className={styles.kot}>2</div>
                        <div className={styles.kot}>3</div>
                        <div className={styles.kot}>4</div>
                        <div className={styles.kot}>5</div>
                        <div className={styles.kot}>
                            <span class="material-symbols-outlined">add</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}