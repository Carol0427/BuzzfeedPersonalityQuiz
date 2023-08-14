//1 = Luke
//2 = Han Solo
//3 = Yoda
//4 = Darth Vader
var faded = false;
var char_point;
var question = 1;
//answers array
const answers=[];
var ans_index = 0;
//clicky thingy
const onClick = function() {
	if (question ==1){
		q1(this.id);}
	else if (question ==2){
		q2(this.id);
	}
	else if (question==3){
		q3(this.id);
	}
	else if (question==4){
		q4(this.id);
	}
	else if (question==5){
		q5(this.id);
	}
}
//QUESTION 1
document.getElementById('funyuns').onclick = onClick;
document.getElementById('3d').onclick = onClick;
document.getElementById('hot_cheetos').onclick = onClick;
document.getElementById('lays').onclick = onClick;
//QUESTION 2
document.getElementById('avengers').onclick = onClick;
document.getElementById('hunger').onclick = onClick;
document.getElementById('dark').onclick = onClick;
document.getElementById('jurassic').onclick = onClick;
//QUESTION 3
document.getElementById('skateboard').onclick = onClick;
document.getElementById('low').onclick = onClick;
document.getElementById('heli').onclick = onClick;
document.getElementById('train').onclick = onClick;
//QUESTION 4
document.getElementById('evil').onclick = onClick;
document.getElementById('streets').onclick = onClick;
document.getElementById('teacher').onclick = onClick;
document.getElementById('music').onclick = onClick;
//QUESTION 5
document.getElementById('sza').onclick = onClick;
document.getElementById('old_hollywood').onclick = onClick;
document.getElementById('bella').onclick = onClick;
document.getElementById('ariana').onclick = onClick;
//SUBMIT
document.getElementById('submit').onclick = submit;
function start() {
	window.scroll(0, 500);
}
function to_fade_or_not_to_fade(id){
	var id = id;
	if (faded == false){
	document.getElementById(id).style.opacity = "0.5";
	faded= true;}
	else {
		//alert("can't cahnge your answer!");
	}
}
function q1(id){
	//get id from onClick function
	var id = id;
	//scroll to next answer
	window.scroll(0, 950);
	//can't change answer
	//to_fade_or_not_to_fade(id);
	document.getElementById(id).style.opacity = "0.5";
	if (faded == true){
		window.scroll(0, 950);
	}
	else {
		//sets character points
		if (id == 'funyuns'){
			char_point = 2;
		}
		else if (id == '3d'){
			char_point = 3;
		}
		else if (id == 'hot_cheetos'){
			char_point = 4;
		}
		else if (id == 'lays'){
			char_point = 1;
		}
		//adds to answers list
		answers[ans_index] =  char_point;
		//index is now 1
		//alert("index: "+ans_index+" answers[ans_index]: "+answers[ans_index]);
		ans_index++;
		question++;
	}
}
function q2(id) {
	faded = false;
	var id = id;
	window.scroll(0, 1350);
	//to_fade_or_not_to_fade(id);
	document.getElementById(id).style.opacity = "0.5";
	if (faded == true){
		window.scroll(0, 1350);
	}
	else {
		//sets character points
		if (id == 'avengers'){
			char_point = 2;
		}
		else if (id == 'hunger'){
			char_point = 3;
		}
		else if (id == 'dark'){
			char_point = 4;
		}
		else if (id == 'jurassic'){
			char_point = 1;
		}
		//adds to answers list
		answers[ans_index] =  char_point;
		//index is now 1
		//alert("index: "+ans_index+" answers[ans_index]: "+answers[ans_index]);
		ans_index++;
		question++;
	}
}
function q3(id){
	faded = false;
	var id = id;
	window.scroll(0, 1700);
	//to_fade_or_not_to_fade(id);
	document.getElementById(id).style.opacity = "0.5";
	if (faded == true){
		window.scroll(0, 1700);
	}
	else {
		//sets character points
		if (id == 'skateboard'){
			char_point = 1;
		}
		else if (id == 'low'){
			char_point = 3;
		}
		else if (id == 'heli'){
			char_point = 4;
		}
		else if (id == 'train'){
			char_point = 2;
		}
		//adds to answers list
		answers[ans_index] =  char_point;
		//index is now 1
		//alert("index: "+ans_index+" answers[ans_index]: "+answers[ans_index]);
		ans_index++;
		question++;
	}
}
function q4(id){
	faded = false;
	var id = id;
	window.scroll(0, 2600);
	//to_fade_or_not_to_fade(id);
	document.getElementById(id).style.opacity = "0.5";
	if (faded == true){
		window.scroll(0, 2600);
	}
	else {
		//sets character points
		if (id == 'evil'){
			char_point = 4;
		}
		else if (id == 'streets'){
			char_point = 3;
		}
		else if (id == 'teacher'){
			char_point = 1;
		}
		else if (id == 'music'){
			char_point = 2;
		}
		//adds to answers list
		answers[ans_index] =  char_point;
		//index is now 1
		//alert("index: "+ans_index+" answers[ans_index]: "+answers[ans_index]);
		ans_index++;
		question++;
	}
}
function q5(id){
	faded = false;
	var id = id;
	//window.scroll(0, 2800);
	//to_fade_or_not_to_fade(id);
	document.getElementById(id).style.opacity = "0.5";
	if (faded == true){
		console.log("hey you finished the quiz!");
	}
	else {
		//sets character points
		if (id == 'sza'){
			char_point = 2;
		}
		else if (id == 'old_hollywood'){
			char_point = 4;
		}
		else if (id == 'bella'){
			char_point = 3;
		}
		else if (id == 'ariana'){
			char_point = 1;
		}
		//adds to answers list
		answers[ans_index] =  char_point;
		//alert(ans_index);
				alert("index: "+ans_index+" answers[ans_index]: "+answers[ans_index]);
		for (var i=0;i<answers.length;i++){
			//alert(answers[i]);
		}
	}
}
function submit(){
	var character;
	/*if (answer[0] == answer[1] == answer[2] == answer[3] == answer[4]){
		if (answer[0] == 1){
			character = "Luke";
		}
		else if (answer[0] == 2){
			character = "Han Solo";
		}
		else if (answer[0] == 3){
			character = "Yoda";
		}
		else if (answer[0] == 4){
			character = "Darth Vader";
		}
	}*/
	var ones = 0;
	var twos = 0;
	var threes = 0;
	var fours = 0;
	for (var i=0;i<answers.length;i++){
		if (answers[i] == 1){
			ones++;
		}
		else if (answers[i] == 2){
			twos++;
		}
		else if (answers[i] == 3){
			threes++;
		}
		else if (answers[i] == 4){
			fours++;
		}
	}
	//alert("ones: "+ones+" twos: "+twos+" threes: "+threes+" fours: "+fours);
	if (ones >= 2){
		character = "Luke";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/3ornjUXynKibT5tNcc' width='480' height='227' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-3ornjUXynKibT5tNcc'>via GIPHY</a></p>";
	}
	else if (twos >= 2){
		character = "Han Solo";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/3ornjSL2sBcPflIDiU' width='480' height='271' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-movie-star-wars-3ornjSL2sBcPflIDiU'>via GIPHY</a></p>";
	}
	else if (threes >= 2){
		character = "Yoda";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/26FmQ6EOvLxp6cWyY' width='480' height='243' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-star-wars-yoda-26FmQ6EOvLxp6cWyY'>via GIPHY</a></p>";
	}
	else if (fours >= 2){
		character = "Darth Vader";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/xT9DPlL2P7TL2HjxPa' width='480' height='271' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-xT9DPlL2P7TL2HjxPa'>via GIPHY</a></p>";
	}
	else if (ones == 2 && twos == 2){
		character = "Princess Leia";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/xTiIzwRcObjXgQ3vxu' width='480' height='206' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-movie-star-wars-xTiIzwRcObjXgQ3vxu'>via GIPHY</a></p>";
	}
	else if (ones == 2 && threes == 2){
		character = "Obi Wan Kenobi";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/3owzWjdu4dw7Xa6tYQ' width='480' height='208' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-star-wars-the-phantom-menace-3owzWjdu4dw7Xa6tYQ'>via GIPHY</a></p>";
	}
	else if (ones == 2 && fours == 2){
		character = "Rey";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/HrjswmGYbrhwA' width='480' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/daisy-ridley-HrjswmGYbrhwA'>via GIPHY</a></p>";
	}
	else if (twos == 2 && threes == 2){
		character = "Chewie";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/dfzyBlzJH9Q0E' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/chewbacca-dfzyBlzJH9Q0E'>via GIPHY</a></p>";
	}
	else if (twos == 2 && fours == 2){
		character = "Boba Fett";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/sOaeagN5epdw7o2yOY' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/disneyplus-star-wars-starwars-the-book-of-boba-fett-sOaeagN5epdw7o2yOY'>via GIPHY</a></p>";
	}
	else if (threes == 2 && fours == 2){
		character = "R2-D2";
		document.getElementById("gif").innerHTML = "<iframe src='https://giphy.com/embed/3o7abCVuQBnszn3Hws' width='480' height='227' frameBorder='0' class='giphy-embed' allowFullScreen></iframe><p><a href='https://giphy.com/gifs/starwars-3o7abCVuQBnszn3Hws'>via GIPHY</a></p>";
	}
	/*else if (){
		character = "Jaba the Hutt";
	}*/
	document.getElementById("results").innerHTML = "You're such a "+character;
	window.scroll(0, 3500);
}