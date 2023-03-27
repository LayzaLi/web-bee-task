ymaps.ready(init);

let center = [56.74019747396372,37.225219337120045];

function init(){
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 17
	});
	
	let placemark = new ymaps.Placemark(center,{},{

	});
	// map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  //map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  //map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
	map.geoObjects.add(placemark);
}