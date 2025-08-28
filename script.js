//your JS code here. If required.
const changeButton = document.getElementById("change_button")
const resetButton = document.getElementById("Reset")

changeButton.addEventListener("click",()=>changeColor())
resetButton.addEventListener("click",()=>resetColor())
function changeColor(){
	resetColor()
	
	const selectedBlock = document.getElementById("block_id").value;
	const assignedColor = document.getElementById("color_id").value;

if(selectedBlock<1 || selectedBlock>9){
	alert("Please enter valid block 1-9")
	return
}
	
	document.getElementById(selectedBlock).style.backgroundColor=assignedColor
	     console.log(selectedBlock, assignedColor)

}
function resetColor() {
	for(let i=1;i<=9;i++){
		document.getElementById(i.toString()).style.backgroundColor="transparent";
	}
	
}
