document.body.style = 'background-color:whitesmoke;';
let mydiv = document.createElement("div")
mydiv.setAttribute("style", "width:100%;height:auto;")
mydiv.setAttribute("class", "container")

let outerDiv = document.createElement("div")
outerDiv.setAttribute("class", "container-fluid")
outerDiv.setAttribute("style", "text-align:center;")

let heading = document.createElement("h1")
heading.setAttribute("style", "color:black;font-family: 'Do Hyeon', sans-serif;margin-top:20px;font-size:50px;")
heading.innerText = "THE PERTINENT TIMES";
outerDiv.appendChild(heading)

let navign_bar = document.createElement("nav")
navign_bar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light")
navign_bar.setAttribute("style", "border-top:1px solid lightgrey;font-family: 'Oswald', sans-serif;border-bottom:1px solid lightgrey;")

let navign_button = document.createElement("button")
navign_button.setAttribute("class", "navbar-toggler")
navign_button.setAttribute("type", "button")
navign_button.setAttribute("data-toggle", "collapse")
navign_button.setAttribute("data-target", "#navbar")
navign_button.setAttribute("aria-controls", "navbar")
navign_bar.appendChild(navign_button)

let nav_span = document.createElement("span")
nav_span.setAttribute("class", "navbar-toggler-icon")
navign_button.appendChild(nav_span)

let navDiv = document.createElement("div")
navDiv.setAttribute("class", "collapse navbar-collapse justify-content-center")
navDiv.setAttribute("id", "navbar")

let navUL = document.createElement("ul")
navUL.setAttribute("class", "navbar-nav")

let lt1 = document.createElement("li")
lt1.setAttribute("class", "nav-item")
let home_btn = document.createElement("a")
home_btn.setAttribute("class", "nav-link btn")
home_btn.setAttribute("style", "color:black;")
home_btn.innerText = "HOME"
home_btn.setAttribute("id", "home")
home_btn.addEventListener("click", function () {
    dataAccess("home")
})
lt1.appendChild(home_btn)
navUL.appendChild(lt1)

let lt2 = document.createElement("li")
lt2.setAttribute("class", "nav-item")
let world_btn = document.createElement("a")
world_btn.setAttribute("class", "nav-link btn")
world_btn.setAttribute("style", "color:black;")
world_btn.innerText = "WORLD"
world_btn.setAttribute("id", "world")
world_btn.addEventListener("click", function () {
    dataAccess("world")
})
lt2.appendChild(world_btn)
navUL.appendChild(lt2)

let lt3 = document.createElement("li")
lt3.setAttribute("class", "nav-item")
let politics_btn = document.createElement("a")
politics_btn.setAttribute("class", "nav-link btn")
politics_btn.setAttribute("style", "color:black;")
politics_btn.innerText = "POLITICS"
politics_btn.setAttribute("id", "politics")
politics_btn.addEventListener("click", function () {
    dataAccess("politics")
})
lt3.appendChild(politics_btn)
navUL.appendChild(lt3)

let lt4 = document.createElement("li")
lt4.setAttribute("class", "nav-item")
let mag_btn = document.createElement("a")
mag_btn.setAttribute("class", "nav-link btn")
mag_btn.setAttribute("style", "color:black;")
mag_btn.innerText = "MAGAZINE"
mag_btn.setAttribute("id", "politics")
mag_btn.addEventListener("click", function () {
    dataAccess("magazine")
})
lt4.appendChild(mag_btn)
navUL.appendChild(lt4)

let lt5 = document.createElement("li")
lt5.setAttribute("class", "nav-item")
let tech_btn = document.createElement("a")
tech_btn.setAttribute("class", "nav-link btn")
tech_btn.setAttribute("style", "color:black;")
tech_btn.innerText = "TECHNOLOGY"
tech_btn.setAttribute("id", "technology")
tech_btn.addEventListener("click", function () {
    dataAccess("technology")
})
lt5.appendChild(tech_btn)
navUL.appendChild(lt5)

let lt6 = document.createElement("li")
lt6.setAttribute("class", "nav-item")
let sci_btn = document.createElement("a")
sci_btn.setAttribute("class", "nav-link btn")
sci_btn.setAttribute("style", "color:black;")
sci_btn.innerText = "SCIENCE"
sci_btn.setAttribute("id", "science")
sci_btn.addEventListener("click", function () {
    dataAccess("science")
})
lt6.appendChild(sci_btn)
navUL.appendChild(lt6)

let lt7 = document.createElement("li")
lt7.setAttribute("class", "nav-item")
let health_btn = document.createElement("a")
health_btn.setAttribute("class", "nav-link btn")
health_btn.setAttribute("style", "color:black;")
health_btn.innerText = "HEALTH"
health_btn.setAttribute("id", "health")
health_btn.addEventListener("click", function () {
    dataAccess("health")
})
lt7.appendChild(health_btn)
navUL.appendChild(lt7)

let lt8 = document.createElement("li")
lt8.setAttribute("class", "nav-item")
let sports_btn = document.createElement("a")
sports_btn.setAttribute("class", "nav-link btn")
sports_btn.setAttribute("style", "color:black;")
sports_btn.innerText = "SPORTS"
sports_btn.setAttribute("id", "sports")
sports_btn.addEventListener("click", function () {
    dataAccess("sports")
})
lt8.appendChild(sports_btn)
navUL.appendChild(lt8)

let lt9 = document.createElement("li")
lt9.setAttribute("class", "nav-item")
let arts_btn = document.createElement("a")
arts_btn.setAttribute("class", "nav-link btn")
arts_btn.setAttribute("style", "color:black;")
arts_btn.innerText = "ARTS"
arts_btn.setAttribute("id", "arts")
arts_btn.addEventListener("click", function () {
    dataAccess("arts")
})
lt9.appendChild(arts_btn)
navUL.appendChild(lt9)

let lt10 = document.createElement("li")
lt10.setAttribute("class", "nav-item")
let fas_btn = document.createElement("a")
fas_btn.setAttribute("class", "nav-link btn")
fas_btn.setAttribute("style", "color:black;")
fas_btn.innerText = "FASHION"
fas_btn.setAttribute("id", "fashion")
fas_btn.addEventListener("click", function () {
    dataAccess("fashion")
})
lt10.appendChild(fas_btn)
navUL.appendChild(lt10)

let lt11 = document.createElement("li")
lt11.setAttribute("class", "nav-item")
let food_btn = document.createElement("a")
food_btn.setAttribute("class", "nav-link btn")
food_btn.setAttribute("style", "color:black;")
food_btn.innerText = "FOOD"
food_btn.setAttribute("id", "food")
food_btn.addEventListener("click", function () {
    dataAccess("food")
})
lt11.appendChild(food_btn)
navUL.appendChild(lt11)

let lt12 = document.createElement("li")
lt12.setAttribute("class", "nav-item")
let travel_btn = document.createElement("a")
travel_btn.setAttribute("class", "nav-link btn")
travel_btn.setAttribute("style", "color:black;")
travel_btn.innerText = "TRAVEL"
travel_btn.setAttribute("id", "travel")
travel_btn.addEventListener("click", function () {
    dataAccess("travel")
})
lt12.appendChild(travel_btn)
navUL.appendChild(lt12)

navDiv.appendChild(navUL)

let closeDiv = document.createElement("div")
closeDiv.setAttribute("class", "container-fluid")

navign_bar.appendChild(navDiv)
mydiv.appendChild(outerDiv)
mydiv.appendChild(navign_bar)
document.body.appendChild(mydiv)
document.body.appendChild(closeDiv)

let api_key = "i9NAAca1mcDTxzKkSuJKGO3dIG6kkCX2"

async function getData(url) {
    let data = await fetch(url);
    let result = await data.json()
    return result;
}

async function dataAccess(section) {
    closeDiv.innerHTML = ""
    let arr = await getData(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${api_key}`)
    data = arr["results"]
    for (i of data) {
        let outbox = document.createElement("div");
        outbox.setAttribute("class", "container");
        outbox.setAttribute("style", "margin-top:30px;width:100%;")

        let inbox = document.createElement("div");
        inbox.setAttribute("class", "row");

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card");
        cardDiv.setAttribute("style", "width:100%;")

        let articleDiv = document.createElement("div");
        articleDiv.setAttribute("class", "col-md-8");

        let articleCard = document.createElement("div");
        articleCard.setAttribute("class", "sectioncard");
        articleCard.style = 'font-weight:bold;'
        articleCard.innerHTML = section.toUpperCase();

        let HeadingCard = document.createElement("div");
        HeadingCard.setAttribute("class", "titlecard");
        HeadingCard.style = 'font-family: "PT Sans Narrow", sans-serif;'
        HeadingCard.innerHTML = i["title"]

        let TimeCard = document.createElement("div");
        TimeCard.setAttribute("class", "datecard");
        TimeCard.style = 'font-family: "PT Sans Narrow", sans-serif;'
        TimeCard.innerHTML = i["published_date"]

        let abstractDiv = document.createElement("div");
        abstractDiv.setAttribute("class", "abstractcard");
        abstractDiv.style = 'font-family: "Dosis", sans-serif;'
        abstractDiv.innerHTML = i["abstract"];

        let PaperLink = document.createElement("a");
        PaperLink.setAttribute("class", "continuereading");
        PaperLink.style = 'font-weight:bold;font-style:sans-serif;'
        PaperLink.setAttribute("href", `${i["url"]}`)
        PaperLink.innerHTML = "Continue reading";

        articleDiv.append(articleCard, HeadingCard, TimeCard, abstractDiv, PaperLink);

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "col-md-4");
        imgDiv.setAttribute("style", "text-align:right");

        let image = document.createElement("img");
        image.setAttribute("class", "img-thumbnail");
        image.setAttribute("src", `${i["multimedia"][1]["url"]}`);
        image.setAttribute("style", "width:150px;height:150px;")

        imgDiv.append(image);

        let cardbody_Div = document.createElement("div");
        cardbody_Div.setAttribute("class", "row card-body");

        cardbody_Div.append(articleDiv, imgDiv)
        cardDiv.append(cardbody_Div);
        inbox.append(cardDiv);
        outbox.append(inbox);

        closeDiv.append(outbox);
    }
}