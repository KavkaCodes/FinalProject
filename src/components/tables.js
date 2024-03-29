// Components
// Screens
// Pages
// Data
import tables from "../data/tables";
import currentOrders from "../data/currentOrders"
// Packages
import { useState } from 'react';
 
export default function Tables(params){

    const [filterActive, setfilterActive] = useState('All');
    function clickTable(tabNo) {
        console.log(typeof tables);
        params.tableActive[1](tabNo);
        params.kotActive[1]("");
        params.currentOrder[1](currentOrders[tabNo]);
        params.newKot[1]([]);
      } 
    if(params.forScreen == "POS"){
        
        function clickFilter(makeActive) {
            setfilterActive(makeActive);
            params.tableActive[1]("");
            params.kotActive[1]("");
            params.currentOrder[1]({});
          }
         
        let tableList = filterActive != "All"?params.tablesLine[0].filter((table) => (table.fs_table_tabStatus == filterActive)):params.tablesLine[0];
        return (
            <div class="tables">
                    <div class="tablesLineOne">
                        <h1 id="heading">Tables</h1>
                        <div class="filters">
                            <button onClick= {()=>clickFilter("All")} class={filterActive=="All" ? "btnActive" :"btn"}>
                                <div class="filter">All</div>
                            </button>
                            <button onClick= {()=>clickFilter("Empty")} class={filterActive=="Empty" ? "btnActive" :"btn"}>
                                <div class="filter">Empty</div>
                            </button>
                            <button onClick= {()=>clickFilter("Occupied")} class={filterActive=="Occupied" ? "btnActive" :"btn"}>
                                <div class="filter">Occupied</div>
                            </button>
                            <button onClick= {()=>clickFilter("BillPrinted")} class={filterActive=="BillPrinted" ? "btnActive" :"btn"}>
                                <div class="filter">Bill Printed</div>
                            </button>
                        </div>
                    </div>
                    <div class="tablesList">
                        {
                            tableList.map(
                                (table, index) => (
                                    <button key={index} onClick={()=>clickTable(table.fs_table_tableNo)} class={params.tableActive[0]==table.fs_table_tableNo ? "btnActive" :"btn"}>
                                        <div class="table" id={table.fs_table_tabStatus}>{table.fs_table_tableNo}</div>
                                    </button>
                                    
                                )
                            )
                        }
                    </div>
            </div>
        )
    } else {
        function clickFilter(makeActive) {
            setfilterActive(makeActive);
            params.tableActive[1]("");
            params.kotActive[1]("");
            params.currentOrder[1]({});
          }
        let tableList = filterActive != "All"?params.tablesLine[0].filter((table) => (table.fs_table_tabStatus == filterActive)):params.tablesLine[0].filter((table) => (table.fs_table_tabStatus != "Empty"));

        return (
            <div class="tables">
                    <div class="tablesLineOne">
                        <h1 id="heading">Tables</h1>
                        <div class="filters">
                        <button onClick= {()=>clickFilter("All")} class={filterActive=="All" ? "btnActive" :"btn"}>
                                <div class="filter">All</div>
                            </button>
                            <button onClick= {()=>clickFilter("Occupied")} class={filterActive=="Occupied" ? "btnActive" :"btn"}>
                                <div class="filter">Occupied</div>
                            </button>
                            <button onClick= {()=>clickFilter("BillPrinted")} class={filterActive=="BillPrinted" ? "btnActive" :"btn"}>
                                <div class="filter">Bill Printed</div>
                            </button>
                            
                        </div>
                    </div>
                    <div class="tablesList">
                        {
                                    tableList.map(
                                        (table,index) => (
                                            <button key={index} onClick={()=>clickTable(table.fs_table_tableNo)} class={params.tableActive[0]==table.fs_table_tableNo ? "btnActive" :"btn"}>
                                                <div class="table" id={table.fs_table_tabStatus}>{table.fs_table_tableNo}</div>
                                            </button>
                                    
                                        )
                            )
                        }
                    </div>
            </div>
        )
    }
    
}

