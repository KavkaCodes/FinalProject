import tables from "../data/tables";
import { useState } from 'react';

export default function Tables(params){
    
    if(params.forScreen == "POS"){
        const [filterActive, setfilterActive] = useState('All');
        function clickFilter(makeActive) {
            setfilterActive(makeActive);
            params.tableActive[1]("");
            params.kotActive[1]("");
          }
        function clickTable(makeActive) {
            params.tableActive[1](makeActive);

            params.kotActive[1]("");
          }  
        let tableList = filterActive != "All"?tables.filter((table) => (table.fs_table_tabStatus == filterActive)):tables;
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
                                (table) => (
                                    <button onClick={()=>clickTable(table.fs_table_tableNo)} class={params.tableActive[0]==table.fs_table_tableNo ? "btnActive" :"btn"}>
                                        <div class="table" id={table.fs_table_tabStatus}>{table.fs_table_tableNo}</div>
                                    </button>
                                    
                                )
                            )
                        }
                    </div>
            </div>
        )
    } else {
        const [filterActive, setfilterActive] = useState('All');
        function clickFilter(makeActive) {
            setfilterActive(makeActive);
            params.tableActive[1]("");
            params.kotActive[1]("");
          }
          function clickTable(makeActive) {
            console.log("hello");
            params.tableActive[1](makeActive);
            params.kotActive[1]("");
          }  
        let tableList = filterActive != "All"?tables.filter((table) => (table.fs_table_tabStatus == filterActive)):tables.filter((table) => (table.fs_table_tabStatus != "Empty"));

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
                                        (table) => (
                                            <button onClick={()=>clickTable(table.fs_table_tableNo)} class={params.tableActive[0]==table.fs_table_tableNo ? "btnActive" :"btn"}>
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

