const searchMovies = async()=>{
    try{
        const search = document.querySelector('#searchBar').value;
        let url=`http://www.omdbapi.com/?i=tt3896198&apikey=75aa55aa&s=${search}`;

        let response = await fetch(url);
        let data = await response.json();
        showData(data.Search)
        console.log(data);

    }
    catch(error){
        console.log(error)

    }
}
showData=(data)=>{
    let container = document.querySelector("#hidden");
    container.innerHTML = null;
    if (data != undefined) {
        data.forEach(function (el) { 
            let div = document.createElement("div");
            let poster = document.createElement("img");
            poster.src = el. Poster;
            let title = document.createElement("h3"); title.innerText = el.Title;
            let year = document.createElement("p");
            year.innerText = el. Year;
            div.append(poster, title, year, );
            container.append(div);
            container.style.display="grid";
            document.getElementById('center').style.display="none";

        });
    } else {
        let h1 = document.createElement("h1");
        
        h1.innerText = "Not Found Any Movies for the Search!";
        container.append(h1);
    }
    
    
}



