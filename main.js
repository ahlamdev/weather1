

////https://api.openweathermap.org/data/2.5/weather?q =iraq&units=metric&apikey=2c13dc212e53206b0798997404a8afe5
//api ky i should put in env file
apikey= "2c13dc212e53206b0798997404a8afe5"

const searchBox= document.querySelector("input");
const searchBtn= document.querySelector("button");


 async function clickWeather(city) {
const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`+ city + `&appid=${apikey}`);
const data = await response.json();
console.log(data)
 
 
//document.querySelector(".country").innerHTML += data.sys.country;
document.querySelector(".country").innerHTML += data.sys.country ;
document.querySelector(".city").innerHTML += data.name;
document.querySelector(".temp").innerHTML += Math.floor (data.main.temp) + "<sup>o</sup>C";
}
searchBtn.addEventListener("click",() => {
//console.log("search")
clickWeather(searchBox.value)
});
 








