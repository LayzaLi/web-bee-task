//import logo from './logo.svg';
import './App.css';
import './style/style.css'
import './style/adaptiv.css'


import Header from './Header/Header';
import MainPage from './Main';
import MapPage from './Map';
import TimePage from './Time'

import Activity from './img/icon/activity.svg'
import Map2 from './img/icon/map.svg'
import Time from './img/icon/time.svg'
import Friends from './img/icon/friends.svg'
import Settings from './img/icon/settings.svg'

import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
	
  return (
		<>
			<Header />
			<Router>
				<nav className="navbar navbar-expand-lg bg-body-tertiary navbar_2">
					<div className="container-fluid navbar_2-div">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item navbar_2-div-li7">
									<NavLink to="/" className="App-link nav-link active navbar_2-link">
										<img className="navbar_2-img" src={Activity} alt="Activity"/>
										<p className="navbar_2-link-text">Activity</p>
									</NavLink>
									
								</li> 
								<li className="nav-item navbar_2-div-li6">
									<NavLink to='/Map' className="App-link nav-link active navbar_2-link">
										<img className="navbar_2-img" src={Map2} alt="Map"/>
										<p className="navbar_2-link-text">Map</p>
									</NavLink>
									
								</li>
								<li className="nav-item navbar_2-div-li5">
									<NavLink to='/Time' className="App-link nav-link active navbar_2-link">
										<img className="navbar_2-img" src={Time} alt="Time"/>
										<p className="navbar_2-link-text">Time</p>
									</NavLink>
								</li>
								<li className="nav-item navbar_2-div-li">
									
								<Link to="/" className="App-link nav-link active navbar_2-link">
									<img className="navbar_2-img" src={Time} alt="Notes"/>
									<p className="navbar_2-link-text">Notes</p>
								</Link>
						</li>
						<li className="nav-item navbar_2-div-li2">
							<Link to="/" className="App-link nav-link active navbar_2-link ">
									<img className="navbar_2-img" src={Friends} alt="Friends"/>
									<p className="navbar_2-link-text">Friends</p>
								</Link>
						</li>
						<li className="nav-item navbar_2-div-li3">
							<Link to="/" className="App-link nav-link active navbar_2-link "><img className="navbar_2-img" src={Map2} alt="Photos"/>
									<p className="navbar_2-link-text">Photos</p>
								</Link>
						</li>
						<li class="nav-item dropdown navbar_2-div-li4">
							<Link to="/" className="App-link"><a className="nav-link dropdown-toggle navbar_2-link" href="/" role="button" data-bs-toggle="dropdown"
									aria-expanded="false">
									<img className="navbar_2-img" src={Settings} alt="Settings"/>
									<p className="navbar_2-link-text">Settings</p>
								</a></Link>
						</li>
							</ul>
						</div>
				</nav>
				<Routes>
					<Route exact path="/" element={<MainPage />} />
					<Route exact path="/Map" element={<MapPage />} />
					<Route exact path="/Time" element={<TimePage />} />
				</Routes>
			</Router>
			
		</>
  );
}

export default App;
