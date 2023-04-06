import styles from '@/styles/Home.module.css'

export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarTop}>
                <span class="material-symbols-outlined">
                    dashboard
                </span>
                <span class="material-symbols-outlined">
                    point_of_sale
                </span>
                <span class="material-symbols-outlined">
                    receipt_long
                </span>
            </div>
            <div className={styles.user}>

            </div>
           
        </div>
    )
}