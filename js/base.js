import React from "react";

export default class Base extends React.Component {
	render() {
		return (
			<header>
				<h1>Aaron Wong</h1>
				<h4><em>Composer and Musician</em></h4>
			</header>
			<img src="images/bassoon.JPG">
			<nav>
				<a href="#home">Home</a>
				<a href="#music">Music</a>
				<a href="#contact">Contact</a>
			</nav>
			<main>
				<div class="Bio">
					<p>Aaron Wong is a composer currently studying with Professor John McDonald at Tufts University in Medford, Massachusetts. In addition, he is a classically trained pianist and bassoonist and is a member of the Tufts Symphony Orchestra.</p>
					<p>His compositions range from solo and chamber works to scores for several short films.</p>
				</div>
			</main>
		);
	}
}