let sector = document.getElementById('sector') 
let inputCity = document.getElementById('input-city') 
let getWth = document.getElementById('getWth') 
let myCity = document.getElementById('myCity') 
 
 
async function fetchData() { 
    try { 
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric') 
        if (response.ok) { 
 
            let data = await response.json() 
 
            let div = document.createElement('div') 
 
            div.className = "sector-cart" 
 
                div.innerHTML = ` 
            <h3>${data.name}, ${data.sys.country}</h3> 
            <p>Temperature:  ${data.main.temp}</p> 
            <p>Weather:  ${data.weather[0].main}</p>` 
             
 
            sector.appendChild(div) 
        } 
         
 
    } catch (error) { 
        throw new Error("error"); 
 
    } 
} 
let massiv = [] 
getWth.addEventListener('click',async function(){ 
    sector.textContent = "" 
     
    let inpt = inputCity.value 
    try{ 
        massiv.push(inpt) 
        localStorage.setItem('recently', JSON.stringify(massiv)) 
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpt}&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric`) 
        if (response.ok) { 
 
            let data = await response.json() 
 
            console.log(data); 
             
            let div = document.createElement('div') 
 
            div.className = "sector-cart" 
 
                div.innerHTML = ` 
            <h3>${data.name}, ${data.sys.country}</h3> 
            <p>Temperature:  ${data.main.temp}</p> 
            <p>Weather:  ${data.weather[0].main}</p>` 
             
 
            sector.appendChild(div) 
            inputCity.value = "" 
        } 
         
    }catch(err){ 
        console.error(err); 
    } 
 
}) 
 
 
myCity.addEventListener('click',async function(){ 
sector.textContent = "" 
fetchData() 
}) 
 
let cities = ["Almaty","Astana","Shymkent","Atyrau"] 
 
kzCity.addEventListener('click',async function(){ 
    sector.textContent = "" 
    cities.forEach(async(city)=>{ 
        try{ 
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric`) 
            if(!response.ok){ 
                throw new Error('Error') 
            } 
 
            let data = await response.json() 
 
         
             
            let div = document.createElement('div') 
 
            div.className = "sector-cart" 
 
                div.innerHTML = ` 
            <h3>${data.name}, ${data.sys.country}</h3> 
            <p>Temperature:  ${data.main.temp}</p> 
            <p>Weather:  ${data.weather[0].main}</p>` 
             
 
            sector.appendChild(div) 
             
        }catch(err){ 
            console.log(err); 
             
        } 
    }) 
}) 
 
function recently() { 
        let recetnlySearched = JSON.parse(localStorage.getItem('recently')) 
         
        recetnlySearched.forEach(async(city)=>{ 
            try{ 
                let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric`) 
                if(!response.ok){ 
                    throw new Error('Error') 
                } 
     
                let data = await response.json() 
     
             
                 
                let div = document.createElement('div') 
     
                div.className = "sector-cart" 
     
                    div.innerHTML = ` 
                <h3>${data.name}, ${data.sys.country}</h3> 
                <p>Temperature:  ${data.main.temp}</p> 
                <p>Weather:  ${data.weather[0].main}</p>` 
                 
     
                sector.appendChild(div) 
            }catch(err){ 
                console.log(err); 
            } 
        }) 
         
} 
recently()