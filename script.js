var Focus = document.getElementById("Name");
Focus.onkeyup = Message;
function Message() {
	alert(Focus.value);
}
