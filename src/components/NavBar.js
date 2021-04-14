import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
         	<header>
		<h1>Welcome Space Cadet!</h1>
		<nav>
			<ul id="menu">
				<li><a href="#">Take Me Home</a></li>
				<li><a href="#">What About Mars?</a></li>
				<li><a href="#">Scheduled Manned Missions</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
	</header>
        </div>
    )
}