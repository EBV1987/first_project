function openMenu()
{
	var class_id = document.getElementById('first_id');

	if (class_id.className == "dropdown_menu show_menu")
	{
		class_id.className = "dropdown_menu hide_menu"
	}else {
		class_id.className = "dropdown_menu show_menu"
	}
}
	
	


/*var years = confirm("How old are you?");
alert( "You are so old - " + years );
*/

//alert( alert(1) || 2 || alert(3) ); // ????
//console.log( console.log(1) || 2 || console.log(3) );