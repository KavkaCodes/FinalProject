// Components
// Screens
// Pages
// Data
// Packages

export default function Kots(params) {
    function clickKot(makeActive) {
        params.kotActive[1](makeActive);
      }
    function newKotCreate() {
        params.kotActive[1]("NEW");
        params.newKot[1]([]); 
    }  
    const isObjectEmpty = (objectName) => {
        return Object.keys(objectName).length === 0
    }

    function getTableInfo(myTablesLine) {
        for (let i = 0; i < myTablesLine.length; i++) {
            const element = myTablesLine[i];
            console.log(params.tableActive[0]);
            console.log(element);
            if (element.fs_table_tableNo == params.tableActive[0]) {
                console.log(element.fs_table_tabStatus);
                return element.fs_table_tabStatus;
            }
        }
    }
    return(
        <div class="kots">
            <h1 id="heading">KOTS</h1>
            <div class="kotList">
            {
                isObjectEmpty(params.currentOrder[0])
                ?<div></div>:params.currentOrder[0].fs_currentOrder_kots.map(
                    (kot,index) => (
                        <button key={index} onClick= {
                            ()=>clickKot(params.currentOrder[0].fs_currentOrder_kots.indexOf(kot) + 1)
                        } class = {
                            params.kotActive[0]==params.currentOrder[0].fs_currentOrder_kots.indexOf(kot) + 1?
                            "btnActive kot" :"btn kot"
                        }>
                            {
                                params.currentOrder[0].fs_currentOrder_kots.indexOf(kot) + 1
                            }
                        </button>
                    )
                )
            }
            {
                params.tableActive[0]=="" ||  getTableInfo(params.tablesLine[0])=="BillPrinted"?
                <div></div>:
                <button onClick={()=>newKotCreate()} class="btnActive kot">
                    <span class="material-symbols-outlined">add</span>
                </button>
            }
            </div>
        </div>
    )
}