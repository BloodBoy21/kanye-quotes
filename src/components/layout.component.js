import React, { Component } from "react";
import Header from "./header.component";
import Content from "./content.component";
import Footer from "./footer.component";
class Layout extends Component {
	render() {
		return (
			<main className="main-container">
				<Header />
				<Content />
				<Footer />
			</main>
		);
	}
}
export default Layout;
