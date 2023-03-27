import VtimeImg from './img/icon/vtime.svg';
import MoretimeImg from './img/icon/moretime.svg';
import ClosetimeImg from './img/icon/closetime.svg';

import GetTime from './ScriptsJs/time';

function Time(){
	
	return(
		<>
		
		<section class="timer">
			<div class="timer-div">
				<div>
					<p class="timer-text">Timer</p>
					<body onLoad="getSecs()"> <span id='timer-counter' class="timer-time"></span> </body>
					<script src='./ScriptsJs/time.js'></script>
				</div>
				<ul class="timer-ul">
					<li class="timer-li"><img class="timer-icon" src={VtimeImg} alt="v"/></li>
					<li class="timer-li"><img class="timer-icon" src={MoretimeImg} alt="more"/></li>
					<li class="timer-li"><img class="timer-icon" src={ClosetimeImg} alt="close"/></li>
				</ul>
			</div>
		</section>
		</>
	);
}

export default Time;