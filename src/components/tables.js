import styles from '@/styles/Home.module.css'
import tables from "../data/tables";

export default function Tables(){
    return (
        <div className={styles.tables}>
                <div className={styles.tablesLineOne}>
                    <h1 id={styles.heading}>Tables</h1>
                    <div className={styles.filters}>
                        <div className={styles.filter}>All</div>
                        <div className={styles.filter}>Occupied</div>
                        <div className={styles.filter}>Reserved</div>
                        <div className={styles.filter}>Empty</div>
                        <div className={styles.filter}>Bill Printed</div>
                    </div>
                </div>
                <div className={styles.tablesList}>
                    {
                        tables.map(
                            (table) => ( 
                                <div className={styles.table}>{table.fs_table_tableNo}</div>
                            )
                        )
                    }
                </div>
        </div>
    )
}