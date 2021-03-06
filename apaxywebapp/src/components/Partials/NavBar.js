import React, { Component, Fragment } from 'react'
// Add # (anchor link) to router
import { HashLink as Link } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
// Scroll animation
import { animateScroll as scroll } from 'react-scroll'
// Add active class to li when their # is visible
import Scrollspy from 'react-scrollspy'

/** Images */
import { logo } from '../../img'

export default class NavBar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasScrolled: false,
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	handleScroll = event => {
		const scrollTop = window.pageYOffset
		// If the page scroll hasScrolled become true
		if (scrollTop > 50) {
			this.setState({ hasScrolled: true })
		} else {
			this.setState({ hasScrolled: false })
		}
	}

	scrollToTop() {
		//scroll at top of the page
		scroll.scrollToTop()
	}

	render() {
		return (
			<Fragment>
				<nav
					className={
						// if hasScrolled is true
						this.state.hasScrolled
							? 'NavbarScrolled navbar navbar-expand-lg navbar-dark mb-5 fixed-top AnimationNav'
							: 'navbar navbar-expand-lg navbar-dark mb-5 fixed-top AnimationNav'
					}
				>
					<div className="container">
						<Link className="navbar-brand" to="/" onClick={this.scrollToTop}>
							<img src={logo} alt={logo} height="38" />
						</Link>
						<button
							className="navbar-toggler btn"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse text-center" id="navbarNav">
							<Scrollspy
								className="navbar-nav ml-auto"
								items={['icons', 'preview']}
								currentClassName="active"
							>
								{/* <li
									className="nav-item"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<Link className="nav-link" to="/#icons" smooth={true}>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h4 className="">Icons</h4>
										</button>
									</Link>
								</li>
								<li
									className="nav-item"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<Link className="nav-link" to="/#preview" smooth={true}>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h4 className="">Preview</h4>
										</button>
									</Link>
								</li> */}
								<li
									className="nav-item"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										className="nav-link"
										to="/documentation"
										onClick={this.scrollToTop}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h4>Doc</h4>
										</button>
									</NavLink>
								</li>
								<li
									className="nav-item"
									data-toggle="collapse"
									data-target=".navbar-collapse.show"
								>
									<NavLink
										className="nav-link"
										to="/donation"
										onClick={this.scrollToTop}
									>
										<button
											type="button"
											className="btn BtnWhite font-weight-bold"
										>
											<h4>Donate</h4>
										</button>
									</NavLink>
								</li>
								{/* Doc Link */}
								<li className="nav-item d-inline-block my-auto">
									<a
										className="nav-link"
										href="https://hub.docker.com/r/fusengine/apaxy"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-docker text-white fa-lg HoverAnim" />
									</a>
								</li>
								<li className="nav-item d-inline-block my-auto">
									<a
										className="nav-link"
										href="https://github.com/fusengine/apaxy-v2"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i className="fab fa-github text-white fa-lg HoverAnim" />
									</a>
								</li>
							</Scrollspy>
						</div>
					</div>
				</nav>
			</Fragment>
		)
	}
}
