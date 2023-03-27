
import Back from '../img/icon/back.svg';
import Statistic from '../img/icon/Statistics.svg';
import Invoices from '../img/icon/Invoices.svg';
import Schedule from '../img/icon/Schedule.svg';


function Nav1(){
	return(
		<nav className="navbar bg-body-tertiary navbar_1">
			<div className="container-fluid navbar_1-div">
				<div className="icons-nb">
					<a className="navbar-brand" href="#">
						<img className="icons-nb-img d-inline-block align-text-top" src={Back} alt="Back" width="30" height="24"/>
					</a>
					<a className="navbar-brand icons-nb-text" href="#">User pages - Profile</a>
				</div>
				<div className="icons-nb">
					<ul className="nav justify-content-end">
						<li className="nav-item">
							<a className="navbar-brand" href="#">
								<div className="icons-nb-right">
									<img className="icons-nb-right-img" src={Statistic} alt="Statistic" width="30" height="24"/>
									<p className="icons-nb-right-text">Statistic</p>
								</div>
							</a>
						</li>

						<li className="nav-item">
							<a className="navbar-brand" href="#">
								<div className="icons-nb-right">
									<img className="icons-nb-right-img" src={Invoices} alt="Invoices" width="30" height="24"/>
									<p className="icons-nb-right-text">Invoices</p>
								</div>
							</a>
						</li>

						<li className="nav-item">
							<a className="navbar-brand" href="#">
								<div className="icons-nb-right">
									<img className="icons-nb-right-img" src={Schedule} alt="Schedule" width="30" height="24"/>
									<p className="icons-nb-right-text">Schedule</p>
								</div>
							</a>
						</li>
					</ul>
				</div>

			</div>
		</nav>
	);
}

export default Nav1;