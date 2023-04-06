import styles from '@/styles/Home.module.css'
import Pos from '../pos'

export default function ScreenView(){
    return (
        <div className={styles.screenView}>
            <Pos></Pos>
        </div>
    )
}