import React from "react";
import './NavBar.css';

export default function NavBar(){
    return (
    <nav classname="nav">
        <a href="/" id="title">Jasmine Yip</a>
        <ul>
            <li>
                <a href="/Hobbies">Hobbies</a>
            </li>
            <li>
                <a href="/Education">Education</a>
            </li>

            <li>
                <a href="/Experiences">Experiences</a>
            </li>

        </ul>
    </nav>
    );
}