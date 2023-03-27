import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
// import PreloadFunc from './ScriptsJs/preloader.js'
// import React, { useEffect } from 'react'

import VtimeImg from './img/icon/vtime.svg';
import MoretimeImg from './img/icon/moretime.svg';
import ClosetimeImg from './img/icon/closetime.svg';

let center = [56.74019747396372,37.225219337120045];
	


function Map1(){
	document.body.onload = function() {
					
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done')
		}
}


	return(
		<>

				<section  class="map">
					<div class="map-div">
						
						<div class="map-div2">
							<p class="map-text">Basic map</p>
							<ul class="map-ul">
								<li class="map-li"><img class="timer-icon" src={VtimeImg} alt="img"/></li>
								<li class="map-li"><img class="timer-icon" src={MoretimeImg} alt="img"/></li>
								<li class="map-li"><img class="timer-icon" src={ClosetimeImg} alt="img"/></li>
							</ul>
						</div>
						<div id="page-preloader" class="preloader">
							<div class="loader"></div>
						</div> 
							{/* Карта */}
							<YMaps>
							<div id="map" class="map-block">
								<Map defaultState={{ center: center, zoom: 15,}} width={"90vw"} height={"50vh"}>
									<Placemark defaultGeometry={center} />
								</Map>
								</div>
							</YMaps>
							
					</div>
				</section>
		</>
	);
}

export default Map1;