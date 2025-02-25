//your JS code here. If required.
const element = document.getElementById("level");
let count=1;
while(elemet.localName!=="html"){
	++count;
	element = element.parentNode;
}
window.alert(++count);