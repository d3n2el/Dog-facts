const URL = "https://dogapi.dog/api/v2/facts?limit=2" ;
 const mainButton = document.getElementById("main-button");
const centeredBox = document.getElementById("centered-box")

 const getFact = async()=> {
    let response = await fetch(URL); //make promise

    let Data = await response.json(); // plenty of (empty) promises here
    console.log(Data.data[0].attributes.body)
    centeredBox.innerText = Data.data[0].attributes.body
    
 }





 mainButton.addEventListener("click", getFact)