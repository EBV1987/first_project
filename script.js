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

function fib(n)
{
	for (var i = n; i>=1;i--)
	{

		if (i!=1 && i!=2)
		{
			var x = (fib(i-1)+fib(i-2));
			var y = x +" ,";
			return y;
		}else{
			return 1;
		}
	}	
}

alert (fib(6) );



/*function sayHi() {
  alert( "Привет" );
}
var func = sayHi;    // (2)
func(); // Привет    // (3)
*/
/*
sayHi = null;
sayHi();             // ошибка (4)
*/

//alert( sayHi ); // выведет код функции	


/*var years = confirm("How old are you?");
alert( "You are so old - " + years );
*/

//alert( alert(1) || 2 || alert(3) ); // ????
//console.log( console.log(1) || 2 || console.log(3) );
//https://github.com/EBV1987/first_project