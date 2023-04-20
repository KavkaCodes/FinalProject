import styles from '@/styles/Home.module.css'
import Pos from '../pos'
import Billing from "../billing";
import Dashboard from '../dashboard';

export default function ScreenView(params){
    if (params.screenActive[0] == "POS") {
        return (
            <div className={styles.screenView}>
                <Pos tableActive = {params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} ></Pos>
            </div>
        )
    } else if(params.screenActive[0] == "Bill"){
        return (
            <div className={styles.screenView}>
                <Billing screenActive = {params.screenActive} tableActive = {params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} ></Billing>
            </div>
        )
    } else if(params.screenActive[0] == "Dashboard"){
        return (
            <div className={styles.screenView}>
                <Dashboard></Dashboard>
            </div>
        )
    }
   
}