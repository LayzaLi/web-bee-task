
import Mount from './img/mount.png';
import TimeImg from './img/icon/time.svg';
import VtimeImg from './img/icon/vtime.svg';
import AvatarImg from './img/avatar.png';
import ProfileImg from './img/icon/profile.svg';
import BalanceImg from './img/icon/balance.svg';
import ConnectionsImg from './img/icon/connections.svg';
import FriendsImg from './img/icon/friends.svg';
import EventsImg from './img/icon/events.svg';
import SettingsImg from './img/icon/settings.svg';
import TelegImg from './img/icon/teleg.svg';
import Eye from './img/icon/eye.svg';
import Chat from './img/icon/chat.svg';


function Main(){
	return(
			<div className="all">
					<div className="sec1">
						<div className="post">
							<img className="post-img" src={Mount} alt="Mount" />
							<div class="post-comm">
							<img src={Chat} alt="a"/>
							<p class="post-comm-text">Jason Anderson commented:</p>
						</div>
						
						<div class="post-div">
							<p class="post-div-text">Don’t sit and wait. Get out there, feel life. Touch the sun, and immerse in the sea. Keep love in your heart. A life without it is like a sunless garden when the flowers are dead. Because summer is passion, memories, light breeze, the sun that appears on the skin and caresses the face. </p>
							<p class="post-div-text2 ">– Jason, 10:30 am</p>
						</div>
						<div class="post-comm">
							<img src={Eye} alt="a"/>
							<p class="post-comm-text">432</p>
							<img src={Chat} alt="a"/>
							<p class="post-comm-text">47</p>
						</div>
						</div>

						<div className="post_hide"> 
							<p className="post_hide-text">Sunset Sunset Sunset</p>
							<div className="post_hide-div">
								<img className="timer-icon" src={TimeImg} alt="a"/>
								<p className="post_hide-text">53 minutes ago</p>
								<img className="timer-icon" src={VtimeImg} alt="a"/>
							</div>
						</div>

						<div className="post_hide"> 
							<p className="post_hide-text">Morning of Siberia</p>
							<div className="post_hide-div">
								<img className="timer-icon" src={TimeImg} alt="a"/>
								<p className="post_hide-text">56 minutes ago</p>
								<img className="timer-icon" src={VtimeImg} alt="a"/>
							</div>
						</div>
					</div>

					<div className="sec2">
						
						<div className="sec2-div sec2-div1">
								<img className="sec2-div1-avatar" src={AvatarImg} alt="a"/>
								<p className="sec2-div1-text sec2-div1-text1">Hanna Dorman</p>
								<p className="sec2-div1-text sec2-div1-text2">UX/UI designer</p>
								<ul className="sec2-div1-ul">
										<li className="sec2-div1-li"><img className="sec2-div1-icon" src={TelegImg} alt="a"/></li>
										<li className="sec2-div1-li"><img className="sec2-div1-icon" src={TelegImg} alt="a"/></li>
										<li className="sec2-div1-li"><img className="sec2-div1-icon" src={TelegImg} alt="a"/></li>
								</ul>
						</div>
						
						<div className="sec2-div sec2-div2">
							<div className="sec2-div2-nav">
								<p className="sec2-div2-nav-text">Navigation</p>
								<img src={VtimeImg} alt="a"/>
								
							</div>	
							<hr/>
							
							<ul className="sec2-div2-ul">
								<li className="sec2-div2-li">
									<img className="sec2-div2-icon" src={ProfileImg} alt="a"/>
									<a className="sec2-div2-a" href="#">My profile</a>
								</li>
								<li className="sec2-div2-li">
									<img className="sec2-div2-icon" src={BalanceImg} alt="a"/>
									<a className="sec2-div2-a" href="">Balance</a>
									<p className="sec2-div2-text">$ 1,430</p>
								</li>
								<li className="sec2-div2-li">
										<img className="sec2-div2-icon" src={ConnectionsImg} alt="a"/>
										<a className="sec2-div2-a" href="">Connection</a>
								</li>
								<li className="sec2-div2-li">
									<img className="sec2-div2-icon" src={FriendsImg} alt="a"/>
									<a className="sec2-div2-a" href="">Friends</a>
								</li>
							</ul>
							<hr/>
							<div className="sec2-div2-nav2">
								<ul className="sec2-div2-ul">
									<li className="sec2-div2-li">
										<img className="sec2-div2-icon" src={EventsImg} alt="a"/>
										<a className="sec2-div2-a" href="">Events</a>
									</li>
									<li className="sec2-div2-li">
										<img className="sec2-div2-icon" src={SettingsImg} alt="a"/>
										<a className="sec2-div2-a" href="">Account settings</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="sec2-div sec2-div3">
							<div className="sec2-div2-nav">
								<p className="sec2-div2-nav-text">Share your thoughts</p>
								<img src={VtimeImg} alt="a"/>
							</div>	
							<hr/>

							<div className="sec2-div3-div">
								<textarea className="sec2-div3-textarea" rows="5">Enter your message...</textarea>
								<button type="button" className="sec2-div3-button">Save</button>
							</div>
							
						</div>
					</div>
				</div>
		
	);
}

export default Main;