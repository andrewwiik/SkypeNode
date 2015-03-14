$(function() {
	var socket = io();
	var messageBox = $('#messageBox');
	var contactAccount = $('#contactAccount');
	$('form').submit(function() {
		if(messageBox.val() == '') {
			return false;
		}
		socket.emit('message', contactAccount.val() + ' ' +  messageBox.val());
		messageBox.val('');
		return false;
	});
});