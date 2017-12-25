 function mathFun(a, b, c){
	var res;
	if (c == "+") {
		res = a + b;
	}else if (c == "-"){
		res = a - b;
	}else if (c == "*"){
		res = a * b;
	}else if (c == "/"){
		if (b == 0) {
			res = false;
		}
			else{
			res = a / b;
		}
	}else{
		res = '';
	}	
	return(res);
    }

 function randInt(min, max){
  		var leghs = max - min + 1;
  		var rand = Math.floor(Math.random() * leghs) + min;
  		return(rand);
  	}

 function nameOp(d){
 		var op;
 		if (d == 0) {
 			op = "+";
 		}else if (d == 1) {
 			op = "-";
 		}else if (d == 2) {
 			op = "/";
 		}else if (d == 3) {
 			op = "*";
 		}else{
 			op = "";
 		}
 		return(op);
 	}

  var x, y, z, op, fin, answ;
  x = randInt(70, 99);
  y = randInt(70, 99);
  z = randInt(0, 3);
  op = nameOp(z);
  fin = mathFun(x, y, op);
  answ = prompt( x +""+ op+""+y+""+"=?" );
     if (answ == fin) {
     	console.log("Genius");
     }else{
     	console.log("Smoking babmu");
     }




// рандомні числа та знаки та перевірка відповіді юзера


// function mathOp (a, b, op){
// 	var res;
// 	if (op == "+") {
// 		res = a + b;
// 	}else if (op == "-") {
// 		res = a - b;
// 	}else if (op == "*") {
// 		res = a * b;
// 	}else if (op == "/") {
// 		if (b == 0) {
// 			res = false;
// 		}else{
// 			res = a / b;
// 		}
// 	}else{
// 		res = false;
// 	}	
// 	return(res);
// }



// function randomInt(min, max){
// 	var lengh = max - min + 1;
// 	var int = Math.floor(Math.random() * lengh) + min;
// 	return(int);           
// }

  

// function znak(z) {
// 	var num;
// 	if (z == 1) {
// 		num = '+';
// 	}
// 	else if (z == 2) {
// 		num = '-';
// 	}else if (z == 3) {
// 		mun = '*';
// 	}else if (z == 4) {
// 		num = '/';
// 	}
// 	else{
// 		num = '';
// 	}
// 	return(num);
// }
  

// var x, y, t, op, fin, answer ;

// 	for (var i = 0; i < 10; i++) {
// 		x = randomInt(50, 100);
// 		y = randomInt(50, 100);
// 		t = randomInt (1, 4);
// 		op = znak(t);
// 		fin = mathOp(x, y, op);
// 	answer = prompt(x +"" + op + "" + y + "= ?");
		
// 		if (answer == fin) {
// 		alert("Good");
// 		}
// 		else {
// 			alert("fuck");
// 			}
// 	}
	























// 		 // функція обрахунку

// ______________________________________


// нижчe арифметичний тернажер 

// var x, y, res, answer;

// for ( i = 0; i < 10; i++) {
// x= Math.floor((Math.random() * 13))	+ 3;
// y= Math.floor((Math.random() * 13)) + 3;

// res = x * y;

// answer = prompt(" введіть результат " + x + " * " + y + " = ", "");
// 	if (res == answer) {
// 		alert("Вірно");
// 	}
// 	else if (answer == null) {
// 		alert("Ти шо засцяв?");
// 	}
// 	else{
// 		alert("ти шо лох ?");
// 	}
// }
// ______________________________________

// функція арифметична, вираховує потім підставленні значеня


// function mathRoz(a, b, op) {
//     if (op == "+") {
//     	res=a + b;
//     }
// 	else if (op == "/") {
// 		if (b == 0) {
// 			res = "error";
// 		}
// 		else{
// 		res = a / b;
// 			}
// 		}
// 	else if (op == "*") {
// 			res = a * b;
// 		}
// 	else if (op == "-") {
// 			res= a - b;
// 		}
// 		alert(res);
	
// 	}
	
//     mathRoz(99, 8 ,"+");
// 	mathRoz(4, 5, "/");
// 	mathRoz(18, 0, "/");
// ______________________________________