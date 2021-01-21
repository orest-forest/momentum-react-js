import React, {Component, useState, useEffect} from "react";
import s from "../App.css";
// import image from '../../public/assets/images/day/1.jpg'
// import images from './assets/images'


function Background() {
    const [background, setBackground] = useState(0);
    // let background = 0;
    const [greeting, setGreeting] = useState(undefined) ;
    // let greeting = undefined;
    const [today, setToday] = useState(new Date);
    // let today = new Date(),
    //     hour = today.getHours();
   useEffect(() => {
let hour = today.getHours();
    if (hour > 6 && hour < 12) {
        // Morning
        setBackground(`assets/images/morning/${Math.floor(Math.random() * Math.floor(20))}.jpg`);
        setGreeting('Доброе утро, ');
        // document.body.style.color = 'white';

    } else if (hour > 11 && hour < 18) {
        // Afternoon
        setBackground(`assets/images/day/${Math.floor(Math.random() * Math.floor(20))}.jpg`);
        setGreeting('Добрый день, ');
        // document.body.style.color = 'white'
    }

    else if (hour > 17 && hour < 22) {
        setBackground(`assets/images/evening/${Math.floor(Math.random() * Math.floor(20))}.jpg`);
        setGreeting('Добрый вечер, ');
        // document.body.style.color = 'white';
    }
    else {
        // night
        setBackground(`assets/images/night/${Math.floor(Math.random() * Math.floor(20))}.jpg)`);
        setGreeting('Доброй ночи, ');
        // document.body.style.color = 'white';
    }
       // document.body.style.backgroundImage = background;
   }, [today]);


    document.body.style.backgroundImage = 'url(' + background + ')';

    return <>

        {/*<img src = {background} className="background-img"/>*/}
        {/*<img src = {'assets/images/evening/16.jpg'} />*/}
    <h2 className="greeting">{ greeting}</h2>
</>


}

export default Background;