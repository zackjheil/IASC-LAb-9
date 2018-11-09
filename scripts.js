
function textMagic(){

document.getElementById("First").style.color= "blue";
document.getElementById("First").style.textAlign ="center";
document.getElementById("First").style.fontSize= "45px";

//Second Paragraph

document.getElementById("Second").style.color="green";
document.getElementById("Second").style.textAlign ="center";
document.getElementById("Second").style.fontSize="12px";

//Third Paragraph

document.getElementById("Third").style.color="#E5ED47";
document.getElementById("Third").style.textAlign ="justify";
document.getElementById("Third").style.fontSize="15px";
document.getElementById("Third").style.textTransform="uppercase";

}
//Function Test

function changeText(){
	document.getElementById("Third").style.fontSize="200px";
}

//Variables

var number1=5;
var number2=10;
var number3=number1+number2;
// document.write (number3);

//Variable Function

function Addition(num1,num2) {
		document.getElementById("Output").innerHTML=(num1 + num2);
}


function Subtract(num1,num2) {
		document.getElementById("Output").innerHTML=(num1 - num2);
	}

	function Multiply(num1,num2) {
			document.getElementById("Output").innerHTML=(num1 * num2);
		}

	function Divide(num1,num2) {
			document.getElementById("Output").innerHTML=(num1 / num2);
		}
