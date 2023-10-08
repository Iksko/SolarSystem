//Stars
function GenerateStars(){
    const Stars = document.getElementById("stars")

    for(let i = 0; i < 200; i++){
        const Object = document.createElement("div")
        Object.classList.add("generated-object" + i)
        Stars.appendChild(Object)

        const randomX = Math.random() * (window.innerWidth);
        const randomY = Math.random() * (window.innerHeight);
        // console.log(window.innerHeight)
        // console.log(window.innerWidth)
        // console.log(window.randomX)
        // console.log(window.randomY)
        Object.style.left = `${randomX}px`;
        Object.style.top = `${randomY}px`
        

    }
}

window.addEventListener("load", GenerateStars())


//Planet info
const Sun = document.getElementById("sun")
const SunInfo = document.getElementById("planet-info-sun")

Sun.addEventListener("click", () => {
    SunInfo.classList.toggle("sunActive")
})

const Mercury = document.getElementById("mercury")
const MercuryInfo = document.getElementById("planet-info-mercury")

Mercury.addEventListener("click", () => {
    MercuryInfo.classList.toggle("mercuryActive")
})

const Venus = document.getElementById("venus")
const VenusInfo = document.getElementById("planet-info-venus")

Venus.addEventListener("click", () => {
    VenusInfo.classList.toggle("venusActive")
})

const Earth = document.getElementById("earth")
const EarthInfo = document.getElementById("planet-info-earth")

Earth.addEventListener("click", () => {
    EarthInfo.classList.toggle("earthActive")
})

const Mars = document.getElementById("mars")
const MarsInfo = document.getElementById("planet-info-mars")

Mars.addEventListener("click", () => {
    MarsInfo.classList.toggle("marsActive")
})

const Jupiter = document.getElementById("jupiter")
const JupiterInfo = document.getElementById("planet-info-jupiter")

Jupiter.addEventListener("click", () => {
    JupiterInfo.classList.toggle("jupiterActive")
})

const Saturn = document.getElementById("saturn")
const SaturnInfo = document.getElementById("planet-info-saturn")

Saturn.addEventListener("click", () => {
    SaturnInfo.classList.toggle("saturnActive")
})

const Uranus = document.getElementById("uranus")
const UranusInfo = document.getElementById("planet-info-uranus")

Uranus.addEventListener("click", () => {
    UranusInfo.classList.toggle("uranusActive")
})

const Neptune = document.getElementById("neptune")
const NeptuneInfo = document.getElementById("planet-info-neptune")

Neptune.addEventListener("click", () => {
    NeptuneInfo.classList.toggle("neptuneActive")
})

const Close = document.querySelectorAll(".close")

Close.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        ElementArray = document.querySelectorAll(".sunActive, .mercuryActive, .venusActive, .earthActive, .marsActive, .jupiterActive, .saturnActive, .uranusActive, .neptuneActive").forEach(element => {
            element.classList.remove("sunActive", "mercuryActive", "venusActive", "earthActive", "marsActive", "jupiterActive", "saturnActive", "uranusActive", "neptuneActive")
        })
    })
})

//JSON data

// URL k JSON souboru
const url = './data.json'

// Vytvoření instance XMLHttpRequest
const HttpRequest = new XMLHttpRequest()

// Nastavení požadavku
HttpRequest.open('GET', url, true)

// Nastavení callbacku pro zpracování dat
HttpRequest.onreadystatechange = function () {
  if (HttpRequest.readyState === 4) {
    if (HttpRequest.status === 200) {
      // Zpracování dat, pokud je požadavek úspěšný
      jsonData = JSON.parse(HttpRequest.responseText)
      console.log(jsonData)

        // Zde můžete provádět další operace s načtenými daty

        //Planets title + des
        const PlanetTitles = document.getElementsByClassName("planetTitle")
        const PlanetDescription = document.getElementsByClassName("planetP")

        //Planet parameters
        const Radius = document.getElementsByClassName("radius")
        const Diamater = document.getElementsByClassName("diamater")

        //Distances
        const DistanceFromSun = document.getElementsByClassName("distanceFromSun")
        const DistanceFromEarth = document.getElementsByClassName("distanceFromEarth")

        //Age
        const Age = document.getElementsByClassName("age")
        
        //Sun orbit
        const SunOrbit = document.getElementsByClassName("sunOrbit")

        //Number of moons
        const NumberOfMoons = document.getElementsByClassName("numberOfMoons")

        //Gravitation
        const Gravitation = document.getElementsByClassName("gravitation")

        //Weight
        const Weight = document.getElementsByClassName("weight")

        //Surface
        const Surface = document.getElementsByClassName("surface")

        //Volume
        const Volume = document.getElementsByClassName("volume")
        
        //Avg temperature
        const AvgTemperature = document.getElementsByClassName("avgTemperature")

        //Min Temperature
        const MinTemperature = document.getElementsByClassName("minTemperature")

        //Max temperature (4 planets)
        const MaxTemperature = document.getElementsByClassName("maxTemperature")
        
        
        for (let i = 0; i < jsonData.planets.length; i++) {
            console.log(i+" "+jsonData.planets[i].name)
            console.log(jsonData.planets[8].old)
            //Planet title + des
            PlanetTitles[i].textContent = jsonData.planets[i].name
            PlanetDescription[i].textContent = jsonData.planets[i].des

            //Planet parameters
            Radius[i].textContent = "Radius: " + jsonData.planets[i].radius
            Diamater[i].textContent = "Diameter: " + jsonData.planets[i].diameter
            //Distances
            if(i === 0){
                DistanceFromEarth[0].textContent = "Distance from Earth: " + jsonData.planets[0].distanceFromEarth
            }
            DistanceFromSun[i].textContent = "Distance from Sun: " + jsonData.planets[i+1].distanceFromSun
            //Age
            if(i === 0){
                Age[0].textContent = "Age: " + jsonData.planets[0].old
                console.log("i se rovná 0")
            }
            Age[i+1].textContent = "Age: " + jsonData.planets[i+1].old
            //Sun orbit
            SunOrbit[i].textContent = "Orbit around Sun in: " + jsonData.planets[i+1].sunOrbit
            //Number of moons
            NumberOfMoons[i].textContent = "Moons: " + jsonData.planets[i+1].numberOfMoons
            //Gravitation
            Gravitation[i].textContent = "Gravitation: " + jsonData.planets[i+1].gravitation
            //Weight
            Weight[i+1].textContent = "Weight: " + jsonData.planets[i+1].weight
            if(i === 0){
                Weight[0].textContent = "Weight: " + jsonData.planets[0].weight
            }
            //Surface
            Surface[i+1].textContent = "Surface: " + jsonData.planets[i+1].surface
            if(i === 0){
                Surface[0].textContent = "Surface: " + jsonData.planets[0].surface
            }
            //Volume
            Volume[i+1].textContent = "Volume: " + jsonData.planets[i+1].volume
            if(i === 0){
                Volume[0].textContent = "Volume: " + jsonData.planets[0].volume
            }
            //Avg temperature
            if(i <= 5){
                AvgTemperature[i].textContent = "Average temperature: " + jsonData.planets[i].avgTemperature
            }
            if(i === 7){
                AvgTemperature[i].textContent = "Average temperature: " + jsonData.planets[i+1].avgTemperature
            }
            if(i === 6){
                AvgTemperature[i].textContent = "Average temperature: " + jsonData.planets[i+1].avgTemperature
            }

             
            if(i === 0){
                AvgTemperature[i].textContent = "Surface temperature: " + jsonData.planets[i].surfaceTemperature
            }
            
            //Min Temperature
            MinTemperature[i].textContent = "Minimal temperature: " + jsonData.planets[i+1].minTemperature
            if(i === 0){
                MinTemperature[i].textContent = "Core temperature: " + jsonData.planets[i].coreTemperature
            }
            if(i === 1){
                MinTemperature[i].textContent = "Minimal temperature: " + jsonData.planets[i].minTemperature
            }
            //Max temperature (4 planets)
            if(i === 0 || i === 1 || i === 2 || i === 3){
                MaxTemperature[i].textContent = "Maximal temperature: " + jsonData.planets[i+1].maxTemperature
            }
        }
        

        
       
        
        

    

    } else {
      // Zpracování chyby, pokud požadavek selže
      console.error('Chyba při načítání JSON souboru')
    }
  }
}

// Odeslání požadavku
HttpRequest.send()

