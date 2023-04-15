import Home from "../pages/index";
export default function Navbar(state, onClick){
    function click(makeActive) {
        state.state[1](makeActive);
      }
      return(
        <div class="navbar">
          <div class="navbarTop">
            <button onClick= {()=>click("Dashboard")} id="dashboardbtn" class={state.state[0]=="Dashboard" ? "btnActive" :"btn"}>
              <span class="material-symbols-outlined navBtn"  >
                dashboard
              </span>
            </button>
            <button onClick= {()=>click("POS")} id="posbtn" class={state.state[0]=="POS" ? "btnActive" :"btn"}>
              <span class="material-symbols-outlined navBtn" >
                point_of_sale
              </span>
            </button>
            <button onClick= {()=>click("Bill")} id="billbtn" class={state.state[0]=="Bill" ? "btnActive" :"btn"}>
              <span class="material-symbols-outlined navBtn" id="billbtn">
                receipt_long
              </span>
            </button>
            
          </div>
          <div class="navbarBottom">
            <button id="csbtn" class={state.state[0]=="Customer Service" ? "btnActive" :"btn"}>
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