const API_KEY = "55c6498d47dc42e58594ea740046d649"
const url ="https://newsapi.org/v2/everything?q="


async function fetchData(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY }`)
    const data = await res.json()
    return data
}
fetchData("all").then(data => console.log(data))

//menubtn
let mobilemenu = document.querySelector(".mobile")
let menuBtn = document.querySelector(".menuBtn")
let menuBtnDisplay = true;

menuBtn.addEventListener("click",() => {
    if (menuBtn){
        mobilemenu.classList.toggle("hidden")

    }
})
