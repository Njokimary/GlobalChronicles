document.addEventListener("DOMContentLoaded", function() {

    const API_KEY = "55c6498d47dc42e58594ea740046d649";
    const url = "https://newsapi.org/v2/everything?q=";
  
    async function fetchData(query) {
      try {
        const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error to handle it outside this function if needed.
      }
    }
  
    function renderMain(arr) {
      let mainHtml = '';
      for (let i = 0; i < arr.length; i++) {
        if(arr[i].urlToImage){
        mainHtml += `<div class="card">
                      <a href="${arr[i].url}">
                        <img src="${arr[i].urlToImage}" alt="${arr[i].title}">
                        <h4>${arr[i].title}</h4>
                        <div class="publishbyDate">
                            <p>${arr[i].source.name}</p>
                            <span>•</span>
                            <p>${new Date(arr[i].publishedAt).toLocaleDateString()}</p>
                        </div>
                        <div class="desc">
                           ${arr[i].description}
                        </div>
                      </a>
                    </div>`;
        }
      }
  
      const mainElement = document.querySelector(".main");
      if (mainElement) {
        mainElement.innerHTML = mainHtml;
      } else {
        console.error("Element with class 'main' not found.");
      }
    }
  
    fetchData("all")
      .then((data) => renderMain(data.articles))
      .catch((error) => console.error("Error:", error));
  
    //menubtn
    let mobilemenu = document.querySelector(".mobile");
    let menuBtn = document.querySelector(".menuBtn");
    let menuBtnDisplay = true;
  
    menuBtn.addEventListener("click", () => {
      if (menuBtn) {
        mobilemenu.classList.toggle("hidden");
      }
    });
  
  });
  