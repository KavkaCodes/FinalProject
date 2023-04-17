import newKot from "@/data/newKot";

export default function Kots(params) {
    console.log(params.tableStatus[0]!="BillPrinted")
    function clickKot(makeActive) {
        console.log(makeActive);
        params.kotActive[1](makeActive);
      }
    function newKotCreate() {
        params.kotActive[1]("NEW");
        newKot.length = 0;
    }  
    return(
        <div class="kots">
            <h1 id="heading">KOTS</h1>
            <div class="kotList">
            {
                params.kotList.map(
                    (kot) => (
                        <button onClick= {
                            ()=>clickKot(params.kotList.indexOf(kot) + 1)
                        } class = {
                            params.kotActive[0]==params.kotList.indexOf(kot) + 1?
                            "btnActive kot" :"btn kot"
                        }>
                            {
                                params.kotList.indexOf(kot) + 1
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