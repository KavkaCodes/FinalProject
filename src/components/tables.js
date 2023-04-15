import tables from "../data/tables";

export default function Tables(tableActive, forScreen){
    if(tableActive.forScreen == "POS"){
        return (
            <div class="tables">
                    <div class="tablesLineOne">
                        <h1 id="heading">Tables</h1>
                        <div class="filters">
                            <div class="filter">All</div>
                            <div class="filter">Occupied</div>
                            <div class="filter">Reserved</div>
                            <div class="filter">Empty</div>
                            <div class="filter">Bill Printed</div>
                        </div>
                    </div>
                    <div class="tablesList">
                        {
                            tables.map(
                                (table) => ( 
                                    <div class="table">{table.fs_table_tableNo}</div>
                                )
                            )
                        }
                    </div>
            </div>
        )
    } else {
        return (
            <div class="tables">
                    <div class="tablesLineOne">
                        <h1 id="styles.heading">Tables</h1>
                        <div class="filters">
                            <div class="filter">All</div>
                            <div class="filter">Occupied</div>
                            <div class="filter">Bill Printed</div>
                        </div>
                    </div>
                    <div class="tablesList">
                        {
                            tables.map(
                                (table) => ( 
                                    <div class="table">{table.fs_table_tableNo}</div>
                                )
                            )
                        }
                    </div>
            </div>
        )
    }
    
}