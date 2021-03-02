import React from 'react'

export default class Weather extends React.Component{
    constructor(props){
        super(props)
        
        this.loadXMLDoc = this.loadXMLDoc.bind(this)
        

    }

    loadXMLDoc() {
        let lat = "";
        let lon = "";
        navigator.geolocation.getCurrentPosition((pos)=>{
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;
        });
        console.log(lat);
        var xmlhttp = new XMLHttpRequest();
        let response = "";
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
               if (xmlhttp.status == 200) {
                   response = xmlhttp.responseText;
               }
               else if (xmlhttp.status == 400) {
                  alert('There was an error 400');
               }
               else {
                   alert('something else other than 200 was returned');
               }
            }
        };
        xmlhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7480236268949733bfd91e428070f0be`, true);
        xmlhttp.send();
        return response;
    }

    

    render(){
        return (
            <div className="weather-div">
                <h1 className="weather-title">Weather!</h1>
                <h3>{this.loadXMLDoc()}</h3>
            </div>
        )
    }
}