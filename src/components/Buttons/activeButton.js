import styles from '../../styles/Home.module.css'

export default function ActiveButton({text}){
    return (
        <div className={styles.activeButton}>
            {text}
        </div>
    )
}