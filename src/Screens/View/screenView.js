import styles from '@/styles/Home.module.css'
import Pos from '../pos'
import Billing from "../billing";

export default function ScreenView(screenActive){
    if (screenActive.screenActive == "Pos") {
        console.log(screenActive);
        return (
            <div className={styles.screenView}>
                <Pos></Pos>
            </div>
        )
    } else {
        return (
            <div className={styles.screenView}>
    
                {/* <Pos></Pos> */}
                <Billing></Billing>
            </div>
        )
    }
   
}