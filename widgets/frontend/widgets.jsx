import React from 'react'
import ReactDOM from 'react-dom'
import Clock from './clock.jsx'
import Tabs from "./tabs.jsx";
import Weather from "./weather.jsx"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const filler = <div>Filler</div>;
    // ReactDOM.render(, root);
    const tabData = [{title: "Weather", content: "Cloudy with a chance of meatballs"}, {title: "Schedule", content: "App-Academy"}, {title: "Dinner", content: "Tteokbokki, Kimchi-jigae"}]; 
    const renderData = (
        <div>
            <div>
                <Clock/>
            </div>
            <div>
                <Tabs tabs={tabData}/>
            </div>
            <div>
                <Weather/>
            </div>
        </div>
    )
    ReactDOM.render(renderData, root);

})