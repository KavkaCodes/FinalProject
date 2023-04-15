import styles from '@/styles/Home.module.css'
import Pos from '../pos'
import Billing from "../billing";

export default function ScreenView(screenActive, tableActive){
    if (screenActive.screenActive == "POS") {
        return (
            <div className={styles.screenView}>
                <Pos tableActive = {tableActive}></Pos>
            </div>
        )
    } else {
        return (
            <div className={styles.screenView}>
                <Billing></Billing>
            </div>
        )
    }
   
}