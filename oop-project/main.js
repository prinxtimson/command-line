'use strict';

function phone(maker, model, color){
	this.name = maker;
	this.model = model;
	this.color = color;

	phone.prototype.makeCall = function(phoneNum){
		return ('Calling ' + phoneNum);
	}

	phone.prototype.sendMessage = function (phoneNum){
		return ('Message send to: ' + phoneNum);
	}
}

function smartPhone(maker, model, color){
	
	smartPhone.prototype.sendMail = function (email){
		return ('Mail send to ' + email);
	}

	smartPhone.prototype.onBluetooth = function(){
		return ('Bluetooth activated.')
	}

	smartPhone.prototype.onWifi = function(){
		return ('WiFi activated.')
	}

	phone.prototype.makeCall = function(){
		return ('Calling last dial.');
	}
}

smartPhone.prototype = new phone();
smartPhone.prototype.constructor = smartPhone;
