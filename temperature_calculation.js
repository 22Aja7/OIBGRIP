//javascript for temperature converter
function calculation()
{
	var val = document.getElementById("input").value;
	//val = val.valueOf();
	if(isNaN(val))//check whether val is not a number
	{
		alert("enter a number");
		return false;
	}
	if(val=="")
	{
		alert("input must be filled");
		return false;
	}
	else
	{
	var cel = document.getElementById("cel").checked;  //return true/false depending on whether radio button checked or not
	var fah = document.getElementById("fah").checked;
	if(cel == false && fah == false)
	{
		alert("please select what is unit of entered value.!!");
		return false;
	}
	if(cel == true && fah == false)
	{
		document.getElementById("ans").innerHTML = ((9/5)*val + 32) + " fahrenheit"
		return true;
	}
	if(cel==false && fah == true)
	{
		document.getElementById("ans").innerHTML = ((5/9)*(val-32)) + " celsius ";
		return true;
	}
	}
}
