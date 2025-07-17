import PropTypes from "prop-types";

export default function Navbar({
	toggleMode,
	mode,
	title = "Hello",
	aboutText = "Enjoying learning reactJs",
}) {
	return (
		<nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					{title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" href="/">
								{aboutText}
							</a>
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-primary" type="submit">
							Search
						</button>
					</form>

					<div className={`form-check form-switch mx-4 text-${mode === "light" ? "dark" : "light"}`}>
						<input
							onClick={toggleMode}
							className="form-check-input"
							type="checkbox"
							role="switch"
							id="switchCheckDefault"
						/>
						<label className="form-check-label" htmlFor="switchCheckDefault">
							{mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
						</label>
					</div>
				</div>
			</div>
		</nav>
	);
}

Navbar.propTypes = {
	title: PropTypes.string,
	aboutText: PropTypes.string,
};
