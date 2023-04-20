// Components
// Screens
import Pos from '../pos'
import Billing from "../billing";
import Dashboard from '../dashboard';
// Pages
// Data
// Packages
export default function ScreenView(params){

    if (params.screenActive[0] == "POS") {
        return (
            <div class="screenView">
                <Pos tableActive = {params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} ></Pos>
            </div>
        )
    } else if(params.screenActive[0] == "Bill"){
        return (
            <div class="screenView">
                <Billing screenActive = {params.screenActive} tableActive = {params.tableActive} tableStatus={params.tableStatus} tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} ></Billing>
            </div>
        )
    } else if(params.screenActive[0] == "Dashboard"){
        return (
            <div class="screenView">
                <Dashboard></Dashboard>
            </div>
        )
    }
   
}