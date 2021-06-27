import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<header className="header-container">
				<ul>
					<li>
						<a href="https://kanye.rest/">API</a>
					</li>
					<li>
						<a href="https://twitter.com/KanyeWest">Twitter</a>
					</li>
					<li>
						<a href="https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x?si=FzTsV5ALT-iddPPqpKoURA&dl_branch=1">
							Spotify
						</a>
					</li>
				</ul>
			</header>
		);
	}
}
export default Header;
