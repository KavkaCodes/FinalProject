import styles from '@/styles/Home.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <p className={styles.stamp}>Designed by <span className={styles.kavka}>KAVKA</span> </p>
        </footer>
    )
}