if (sessionStorage.getItem('startTime')){
	startdate = sessionStorage.getItem('startTime');
 } else{
	startdate =  (new Date()).getTime();//создание объекта времени (1/1000 сек)
	sessionStorage.setItem('startTime', startdate);
 }
clockStart = startdate;

function initStopwatch() {
	var thisTime = new Date(); //снова новая дата
	return (thisTime.getTime() - clockStart)/1000; //возвращается разница (сколько времени прошло) в сек
}
function getSecs() {
	var tSecs = Math.round(initStopwatch()); //округляем к целому, берем секунды
	var iSecs = tSecs % 60; //сколько чистых секунд
	var iMins = Math.round((tSecs-30)/60);//из-за округления функции в большую сторону (-30), кол-во минут
	var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);//способ написания с нулями
	var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
	document.getElementById("timer-counter").innerHTML = sMins+":"+sSecs; //вывод в timer-counter
	setTimeout('getSecs()', 1000);//каждую секнду вызывается функция
}