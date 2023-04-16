import styles from '@/styles/Home.module.css'
import Pos from '../pos'
import Billing from "../billing";

export default function ScreenView(params){
    if (params.screenActive == "POS") {
        return (
            <div className={styles.screenView}>
                <Pos tableActive = {params.tableActive} kotActive = {params.kotActive}></Pos>
            </div>
        )
    } else {
        return (
            <div className={styles.screenView}>
                <Billing tableActive = {params.tableActive} kotActive = {params.kotActive}></Billing>
            </div>
        )
    }
   
}