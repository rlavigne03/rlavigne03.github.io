function seeMore() {
	let pTwo=document.getElementById("pTwo");
	let click=document.getElementById("click");
	
	if (pTwo.classList.contains("hidden")){
	document.getElementById("pTwo").classList.remove("hidden");
	click.innerHTML="See Less...";
	}
	else{
	document.getElementById("pTwo").classList.add("hidden");
	click.innerHTML="See More...";
	}
}

function seeMost() {
	let pOne=document.getElementById("pOne");
	let click=document.getElementById("click2");
	
	if (pOne.classList.contains("hidden")){
	document.getElementById("pOne").classList.remove("hidden");
	click.innerHTML="See Less...";
	}
	else{
	document.getElementById("pOne").classList.add("hidden");
	click.innerHTML="See More...";
	}
}

function showScore(){
	let qOne=document.getElementById("q-one").value;
	let qTwo=document.getElementById("q-two").value;
	let qThree=document.getElementById("q-three").value;
	let qFour=document.getElementById("q-four").value;
	let resultP=document.getElementById("quizres");
	let score=0;
	
	resultP.innerHTML="<h2> Quiz Results</h2>";
	
	if (qOne=="index.html"){
		resultP.innerHTML+="<p>Question 1- Correct </p>"; 
		score++;
	}else{ 
			resultP.innerHTML+="<p>Question 1- Incorrect</p>";}
			
	if (qTwo=="Above Main"){
		resultP.innerHTML+="<p>Question 2- Correct</p>"; 
		score ++;
	}else {
			resultP.innerHTML+="<p>Question 2- Incorrect</p>";}
			
	if (qThree=="A list item"){
		resultP.innerHTML+="<p>Question 3- Correct</p>"; 
		score++;
	}else{
			resultP.innerHTML+="<p>Question 3- Incorrect</p>";}
			
	if (qFour =="sayHello()"){
		resultP.innerHTML+="<p>Question 4- Correct</p>"; 
		score++;
	}else {
		resultP.innerHTML+="<p>Question 4- Incorrect</p>";}
	
		resultP.innerHTML+="<p>Score:" + score+"/4</p>";
}

setInterval(changeSlide, 10000);

function changeSlide(){
	let catspElem=document.getElementById("cats");
	let num=catspElem.getAttribute("data-num");
	
	if(num==1){
		catspElem.src="images/macie.jpg";
		catspElem.setAttribute("data-num", "2"); 
	}
	else if(num==2){
		catspElem.src="images/girls.jpg";
		catspElem.setAttribute("data-num", "3");
	}
	else if(num==3){
		catspElem.src="images/brendan.jpg";
		catspElem.setAttribute("data-num", "4");
	}
	else if(num==4){
		catspElem.src="images/cats.jpg";
		catspElem.getAttribute("data-num", "1");
	}
}









