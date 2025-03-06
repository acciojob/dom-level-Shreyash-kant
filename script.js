//your JS code here. If required.
const element = document.getElementById("level");
let count=0;
while(elemet.localName!=="html"){
	++count;
	element = element.parentNode;
}
window.alert("The level of the element is:"+ ++count);