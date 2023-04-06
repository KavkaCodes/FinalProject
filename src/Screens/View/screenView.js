import styles from '@/styles/Home.module.css'
import Pos from '../pos'
import Billing from "../billing";

export default function ScreenView(){
    return (
        <div className={styles.screenView}>
            <Pos></Pos>
            {/* <Billing></Billing> */}
        </div>
    )
}