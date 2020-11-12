+(function (window, document) {

  'use strict';

 function digitalWrite(ip, pin, val) {
	var url = "http://"+ip+"/?digitalwrite="+pin+";"+val;
	console.log(url);
	fetch(url);
 }

 function digitalRead(pin) {
	var url = "http://192.168.1.100/?digitalread="+pin;
	console.log(url);
	return url;
 }

  window.digitalWrite = digitalWrite;
  window.digitalRead = digitalRead;

}(window, window.document));
