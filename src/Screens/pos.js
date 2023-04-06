import styles from '@/styles/Home.module.css'

export default function Pos(){
    return (
        <div className={styles.pos}>
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
                    <div className={styles.table}>1</div>
                    <div className={styles.table}>2</div>
                    <div className={styles.table}>3</div>
                    <div className={styles.table}>4</div>
                    <div className={styles.table}>5</div>
                    <div className={styles.table}>6</div>
                </div>
            </div>

            <div className={styles.tableOrder}>
                <div className={styles.order}></div>
                <div className={styles.kots}>
                    <h1 id={styles.heading}>KOTS</h1>
                    <div className={styles.kotList}>
                        <div className={styles.kot}>1</div>
                        <div className={styles.kot}>1</div>
                        <div className={styles.kot}>1</div>
                        <div className={styles.kot}>1</div>
                        <div className={styles.kot}>1</div>
                        <div className={styles.kot}>1</div>
                    </div>
                </div>
            </div>

        </div>
    )
}