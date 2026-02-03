const input = document.getElementById("input");
const button = document.getElementById("search-button");
let nam = document.getElementById("cont2")
let nam2 = document.getElementById("cont1")
let nam3 = document.getElementById("cont2-sub")
button.addEventListener("click",function(){
  const location = input.value.trim();
  
  //calling api 
  
  fetchWheather().then((data)=>{
        updateDom(data)
  })
    
  


    async function fetchWheather() {
        console.log("Inside function");
        const apikey = `http://api.weatherapi.com/v1/current.json?key=eb14b1d04463469cbf542806262301&q=${location}&aqi=no`;
        const response = await fetch(apikey) ;
        if (response.status==400) {
    alert(`API Error: ${response.status}`);
  }

        console.log(response);
        const data = await response.json();
        return data
      
      }

function updateDom(data){
   const locationName = data.location.name;
        const temperature = data.current.temp_c; 
        const localTime = data.location.localtime;
        nam.textContent = locationName;
        nam2.textContent= temperature+" ℃";
        nam3.textContent = localTime;
}
      

    input.value= null
})