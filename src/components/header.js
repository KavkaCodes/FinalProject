import styles from '@/styles/Home.module.css'

export default function Header(state){
    return (
        <header className={styles.header}>
            <div className={styles.pageName}>{state.state}</div>
            <div></div>
        </header>
    )
}