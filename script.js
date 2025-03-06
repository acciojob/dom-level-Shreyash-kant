//your JS code here. If required.
let element = document.getElementById("level");
let count=0;
while(element.localName!=="html"){
	++count;
	element = element.parentNode;
}
window.alert("The level of the element is:"+(++count));