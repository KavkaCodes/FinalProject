
export default function Footer(params){
    console.log(params)
    return (
        <footer class="footer">
            <p class="stamp">Designed by <span class="kavka">KAVKA</span> </p>
            <p class = "quickInfo">Selected Table : {params.params}</p>
            <div></div>
        </footer>
    )
}