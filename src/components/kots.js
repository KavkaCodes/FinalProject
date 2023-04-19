

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
    return(
        <div class="kots">
            <h1 id="heading">KOTS</h1>
            <div class="kotList">
            {
                isObjectEmpty(params.currentOrder[0])
                ?<div></div>:params.currentOrder[0].fs_currentOrder_kots.map(
                    (kot) => (
                        <button onClick= {
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
                params.tableActive[0]=="" || params.tableStatus[0]=="BillPrinted"?
                <div></div>:
                <button onClick={()=>newKotCreate()} class="btnActive kot">
                    <span class="material-symbols-outlined">add</span>
                </button>
            }
            </div>
        </div>
    )
}