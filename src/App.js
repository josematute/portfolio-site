function App() {
	return (
		<div className="App">
			{/* Navigation */}
			<nav className="navbar navbar-expand-lg black-bg text-uppercase fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand" href="#page-top">
						JEMG
					</a>
					<button
						className="navbar-toggler text-uppercase font-weight-bold text-white rounded"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						Menu
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">
									Portfolio
								</a>
							</li>
							<li className="nav-item mx-0 mx-lg-1">
								<a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* Masthead */}
			<header className="masthead dark-bg text-white text-center">
				<div className="container d-flex align-items-center flex-column">
					{/* Masthead Avatar Image */}
					<img className="masthead-avatar mb-5 circle" src="img/me.jpg" alt="..." />
					{/* Masthead Heading */}
					<h1 className="masthead-heading text-uppercase mb-0">Jose Esteban Matute Garcia</h1>
					{/* Icon Divider */}
					<div className="divider-custom divider-light">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<i className="fas fa-male"></i>
						</div>
						<div className="divider-custom-line"></div>
					</div>
					{/* Masthead Subheading */}
					<p className="masthead-subheading font-weight-light mb-0">University of Utah Student - Software Engineer Aspirant</p>
					{/* Social Media Icons */}
					<div className="col-lg-6 mb-5 mb-lg-0 mt-5">
						<a
							className="btn btn-outline-light btn-social mx-1"
							href="https://www.instagram.com/jemg1210/"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-fw fa-instagram"></i>
						</a>
						<a
							className="btn btn-outline-light btn-social mx-1"
							href="https://www.linkedin.com/in/jose-e-matute-garcia-780032214/"
							target="_blank"
							rel="noopener noreferrer">
							<i className="fab fa-fw fa-linkedin-in"></i>
						</a>
						<a className="btn btn-outline-light btn-social mx-1" href="https://github.com/josematute" target="_blank" rel="noopener noreferrer">
							<i className="fab fa-fw fa-github"></i>
						</a>
					</div>
				</div>
			</header>
			{/* Portfolio Section */}
			<section className="page-section portfolio" id="portfolio">
				<div className="container">
					{/* Portfolio Section Heading */}
					<h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
					{/* Icon Divider */}
					<div className="divider-custom">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<i className="fas fa-code"></i>
						</div>
						<div className="divider-custom-line"></div>
					</div>
					{/* Portfolio Grid Items */}
					<div className="row justify-content-center">
						{/* Portfolio Item 1 */}
						<div className="col-md-6 col-lg-4 mb-5">
							<div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white">
										<i className="fas fa-plus fa-3x"></i>
									</div>
								</div>
								<img className="img-fluid" src="img/mips.png" alt="Mips instructions image" />
							</div>
						</div>
						{/* Portfolio Item 2 */}
						<div className="col-md-6 col-lg-4 mb-5">
							<div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
								<div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
									<div className="portfolio-item-caption-content text-center text-white">
										<i className="fas fa-plus fa-3x"></i>
									</div>
								</div>
								<img className="img-fluid" src="img/debatr-logo.png" alt="Debatr image" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section */}
			<section className="page-section dark-bg text-white mb-0" id="about">
				<div className="container">
					{/* About Section Heading */}
					<h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
					{/* Icon Divider */}
					<div className="divider-custom divider-light">
						<div className="divider-custom-line"></div>
						<div className="divider-custom-icon">
							<i className="far fa-address-card"></i>
						</div>
						<div className="divider-custom-line"></div>
					</div>
					{/* About Section Content */}
					<div className="row">
						<div className="col-lg-4 ms-auto">
							<p className="lead">
								I am Jose Matute and I was born in Honduras. I came to the United States in 2016. I enjoy listening to music, code and expand my
								learning in my free time. I also love to work and study to keep myself productive and to always give 100% to any project.
							</p>
						</div>
						<div className="col-lg-4 me-auto">
							<p className="lead">
								I am currently studying at the University of Utah and pursuing a Bachelor's Degree in Computer Science. I will graduate in
								Spring 2023.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer text-center text-dark bg-white">
				<div className="container">
					<div className="row">
						{/* Footer Location */}
						<div className="col-lg-6 mb-5 mb-lg-0">
							<h4 className="text-uppercase mb-4">Location</h4>
							<p className="lead mb-0">Salt Lake City, Utah, USA</p>
						</div>
						{/* Footer Social Icons */}
						<div className="col-lg-6 mb-5 mb-lg-0">
							<h4 className="text-uppercase mb-4">Around the Web</h4>
							<a
								className="btn btn-outline-dark btn-social mx-1"
								href="https://www.instagram.com/jemg1210/"
								target="_blank"
								rel="noopener noreferrer">
								<i className="fab fa-fw fa-instagram"></i>
							</a>
							<a
								className="btn btn-outline-dark btn-social mx-1"
								href="https://www.linkedin.com/in/jose-e-matute-garcia-780032214/"
								target="_blank"
								rel="noopener noreferrer">
								<i className="fab fa-fw fa-linkedin-in"></i>
							</a>
							<a className="btn btn-outline-dark btn-social mx-1" href="https://github.com/josematute" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-fw fa-github"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
			{/* Copyright Section */}
			<div className="copyright py-4 text-center text-white black-bg">
				<div className="container">
					<small>Copyright &copy; Jose Matute - 2022</small>
				</div>
			</div>
			{/* Portfolio Modals */}
			{/* Portfolio Modal 1 - MIPS Converter */}
			<div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={"-1"} aria-labelledby="portfolioModal1" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-header border-0">
							<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body text-center pb-5">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* Portfolio Modal - Title */}
										<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">MIPS Converter</h2>
										{/* Icon Divider */}
										<div className="divider-custom">
											<div className="divider-custom-line"></div>
											<div className="divider-custom-icon">
												<i className="fas fa-code"></i>
											</div>
											<div className="divider-custom-line"></div>
										</div>
										{/* Portfolio Modal - Image */}
										<a href="https://converter-mips.herokuapp.com/" target="_blank" rel="noopener noreferrer">
											<img className="img-fluid rounded mb-5" src="img/mips-converter.PNG" alt="Image about my mips converter website" />
										</a>

										{/* Portfolio Modal - Text */}
										<p className="mb-4 text-start">
											My MIPS Converter project is a tool to translate mips instructions (assembly language) to binary and hexadecimal
											values. It is also very flexible and translates binary and hex values to instructions as well. It is very helpful
											for computer science students who are learning about the low-level assembly language and how it converts
											instructions to binary so the machine understands what to do. I used NodeJS, Express and Ejs to complete this
											project.
										</p>

										<a href="https://converter-mips.herokuapp.com/" target="_blank" rel="noopener noreferrer">
											<button className="btn black-bg text-white mb-2 mx-2" href="">
												<i className="fas fa-arrow-right"></i>
												<span className="ms-2"></span>
												Go to Website
											</button>
										</a>

										<a href="https://github.com/josematute/mips-converter" target="_blank" rel="noopener noreferrer">
											<button className="btn black-bg text-white mb-2" href="https://github.com/josematute/mips-converter">
												<i className="fab fa-fw fa-github"></i>
												<span className="ms-1"></span>
												Repository
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Portfolio Modal 2 - Debatr */}
			<div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" aria-labelledby="portfolioModal2" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
						<div className="modal-header border-0">
							<button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body text-center pb-5">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-lg-8">
										{/* Portfolio Modal - Title */}
										<h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Debatr</h2>
										{/* Icon Divider */}
										<div className="divider-custom">
											<div className="divider-custom-line"></div>
											<div className="divider-custom-icon">
												<i className="fas fa-code"></i>
											</div>
											<div className="divider-custom-line"></div>
										</div>
										{/* Portfolio Modal - Image */}
										<a href="https://www.debatr.us/" target="_blank" rel="noopener noreferrer">
											<img className="img-fluid rounded mb-5" src="img/debatr-site.png" alt="Image about Debatr" />
										</a>

										{/* Portfolio Modal - Text */}
										<p className="mb-4 text-start">
											Debatr is a social media website dedicated on debates. A user can create a debate and react/comment to other
											people's debates. A debate can have tags that can relate to the debate's topic. Users can edit their profile and
											display as much information as they please. This project was created with React and Firebase.
										</p>

										<a href="https://www.debatr.us/" target="_blank" rel="noopener noreferrer">
											<button className="btn black-bg text-white mb-2" href="">
												<i className="fas fa-arrow-right mr-2"></i>
												<span className="ms-2"></span>
												Go to Website
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
