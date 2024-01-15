import React from "react";
import "./pages.css";
import portriat from './jasmine@UW.jpeg';


export default function HomeScreen(){
    return(
        <div id='About-Me'>
            <img src={portriat} alt="Me at the University of Waterloo" class="App-portriat"/>

            <h1>Hello, World!</h1>
            <p>My name is Jasmine Yip and I am currently a software engineering student at the University of Waterloo. <br></br>My favourite things to do are swimming, crocheting, and playing video games. 
          Thanks for visitng!</p>

      </div>

    );
}