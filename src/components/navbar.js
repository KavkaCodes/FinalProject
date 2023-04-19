
export default function Navbar(params){
    function click(makeActive) {
        params.screenActive[1](makeActive);
        params.tableActive[1]("");
        params.tableStatus[1]("");
        params.kotActive[1]("");
        params.currentOrder[1]({});
        params.newKot[1]([]);
      }
      return(
        <div class="navbar">
          <div class="navbarTop">
            <button onClick= {()=>click("Dashboard")} id="dashboardbtn" class={ params.screenActive[0]=="Dashboard" ? "btnActive" :"btn"}>
              <span class="material-symbols-outlined navBtn"  >
                dashboard
              </span>
            </button>
            <button onClick= {()=>click("POS")} id="posbtn" class={ params.screenActive[0]=="POS" ? "btnActive" :"btn"}>
              <span class="material-symbols-outlined navBtn" >
                point_of_sale
              </span>
            </button>
            <button onClick= {()=>click("Bill")} id="billbtn" class={ params.screenActive[0]=="Bill" ? "btnActive" :"btn"}>
              <span class="material-symbols-outlined navBtn" id="billbtn">
                receipt_long
              </span>
            </button>
            
          </div>
          <div class="navbarBottom">
            <button id="csbtn" class={ params.screenActive[0]=="Customer Service" ? "btnActive" :"btn"}>
              <div class="customerService">
                <span class="material-symbols-outlined">
                  headset_mic
                </span>
              </div>
            </button>
  
            <div class="userProfile">
              <div class="user">
              </div>
            </div>
            </div>
          </div>
      )
}