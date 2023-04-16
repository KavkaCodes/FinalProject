import categories from "../data/categories";

export default function menuCategories(params){
    function clickCategory(makeActive) {
        params.menuCategoryActive[1](makeActive);
    }

    return(
        <div class="categories">
            <button onClick= {()=>clickCategory("All")} class={params.menuCategoryActive[0]=="All" ? "btnActive categoryBtn" :"btn categoryBtn"}>
                <div class="category">All</div>
            </button>
            {
                categories.map(
                    (category) => (
                        <button onClick= {()=>clickCategory(category)} class={params.menuCategoryActive[0]==category ? "btnActive categoryBtn" :"btn categoryBtn"}>
                            <div class="category">{category}</div>
                        </button>
                    )
                )
            }
        </div>
    )
}