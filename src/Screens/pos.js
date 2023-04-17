import { useState } from 'react';
import Tables from "../components/tables";

import Menu from "../components/menu"
import MenuCategories from "../components/menuCategories"
import tables from "../data/tables"
import Kots from "../components/kots"
import KotHeader from "../components/kotHeader"
import KotItems from '@/components/kotItems';
import PosCTA from "../components/Buttons/posButtons"
export default function Pos(params){
    const [menuCategoryActive, setmenuCategoryActive] = useState('All');
    // Gets the information for the table that is selected
    let table = tables.filter(
        (table) => (table.fs_table_tableNo == params.tableActive[0])
    ); 
    let kotList = table.length?table[0].fs_kots:[]; 
    return (
        <div class="pos">
            <Tables tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} forScreen="POS"></Tables>
           
            <div class="tableOrder">
                <div class="order">
                    <div class="orderInfo">
                        <MenuCategories menuCategoryActive={[menuCategoryActive,setmenuCategoryActive]} kotActive={params.kotActive}></MenuCategories>
                        <Menu  menuCategoryActive={[menuCategoryActive,setmenuCategoryActive]} kotActive={params.kotActive}></Menu>
                        <div class="kotInfo">
                            <KotHeader></KotHeader>
                            <KotItems tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} kotList = {kotList}></KotItems>
                        </div>
                    </div>
                    <PosCTA tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} kotList = {kotList} ></PosCTA>
                </div>
                <Kots tableActive={params.tableActive} tableStatus={params.tableStatus} kotActive = {params.kotActive} kotList = {kotList} ></Kots>
                
            </div>

        </div>
    )
}
