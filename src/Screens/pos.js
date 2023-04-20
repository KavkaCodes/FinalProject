// Components
import Tables from "../components/tables";
import Menu from "../components/menu"
import MenuCategories from "../components/menuCategories"
import Kots from "../components/kots"
import KotHeader from "../components/kotHeader"
import KotItems from '@/components/kotItems';
import PosCTA from "../components/Buttons/posButtons"
// Screens
// Pages
// Data
import tables from "../data/tables"
// Packages
import { useState } from 'react';

export default function Pos(params){
    const [menuCategoryActive, setmenuCategoryActive] = useState('All');
    // Gets the information for the table that is selected
    let table = tables.filter(
        (table) => (table.fs_table_tableNo == params.tableActive[0])
    ); 
    let kotList = table.length?table[0].fs_kots:[]; 
    return (
        <div class="pos">
            <Tables tableActive={params.tableActive}   tablesLine = {params.tablesLine} kotActive = {params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot}  forScreen="POS"></Tables>    
            <div class="tableOrder">
                <div class="order">
                    <div class="orderInfo">
                        <MenuCategories menuCategoryActive={[menuCategoryActive,setmenuCategoryActive]} kotActive={params.kotActive} currentOrder = {params.currentOrder}></MenuCategories>
                        <Menu  menuCategoryActive={[menuCategoryActive,setmenuCategoryActive]} kotActive={params.kotActive} currentOrder = {params.currentOrder} newKot = {params.newKot} tableActive={params.tableActive}></Menu>
                        <div class="kotInfo">
                            <KotHeader></KotHeader>
                            <KotItems tableActive={params.tableActive}   tablesLine = {params.tablesLine} kotActive = {params.kotActive} kotList = {kotList} currentOrder = {params.currentOrder} newKot = {params.newKot}></KotItems>
                        </div>
                    </div>
                    <PosCTA tableActive={params.tableActive} tablesLine = {params.tablesLine} kotActive = {params.kotActive} kotList = {kotList} currentOrder = {params.currentOrder} newKot = {params.newKot} ></PosCTA>
                </div>
                <Kots tableActive={params.tableActive}   tablesLine = {params.tablesLine} kotActive = {params.kotActive} kotList = {kotList} currentOrder = {params.currentOrder} newKot = {params.newKot}></Kots>
            </div>

        </div>
    )
}
