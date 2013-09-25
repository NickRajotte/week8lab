//these are the variables needed that are getting their info from the HTML ID
var fadeBox = document.getElementById('fadeBox');
		var fadeIn = document.getElementById('fadeIN');
		var fadeOut = document.getElementById('fadeOUT');
		//initializes the counter at 10 so it can count down
		var counter = 10;
		//opacity set to full dark 100%
		var opacity = 1;
		var contentTimer;
		//timer variable being set to 10 as well
		var timer = 10;
		//This is the event listner that runs the fade in function when the fadeIn Button is clicked
		fadeIn.addEventListener("click", callFadeIN);
		fadeOut.addEventListener("click", callFadeOUT);
		//this adds an event listener that once the page is loaded it starts the red alert function to countdown from 10
		window.addEventListener("load", redAlert);
	 
		
		function FadeDiv(){
			opacity -= .10;
			fadeBox.style.opacity =  opacity;
		}
		//this is the function for the fade in effect once clicked its starts an internal countdown while running the function
		//to do a 10% interval ont he opacity
		function fadeIN() {

			if ( counter >= 0 ) {
				counter--;
				FadeDiv()
				fadeBox.style.opacity = opacity;
				if(counter == 0){
					opacity = 0;
				}
			} 
			//will reset the counter back to 10
			else {
				clearInterval(contentTimer);
				counter = 10;
			}
		}

		//this is the actual function called in which set the speed on how fast it will fade in and out
		function callFadeIN(){
			contentTimer = setInterval(fadeIN, "100");
		}

		function callFadeOUT(){
			contentTimer = setInterval(fadeOUT, "100");
		}

		function ShowDiv(){
			opacity += .10;
			fadeBox.style.opacity =  opacity;
			}

		function fadeOUT() {

			if ( counter >= 0 ) {
				counter--;
				ShowDiv()
				fadeBox.style.opacity = opacity;
				if(counter == 0){
					opacity = 1;
				}
			} else {
				clearInterval(contentTimer);
				counter = 10;
			}
		}

		//this function is the function called in on the onload eventlistener
		function redAlert() {
			if (timer > 0){
			timer --
			}
			else {
			alert("You have wasted 10 seconds here already :(")
			clearInterval(contentTimer)
			timer = 10;
			}
		}

		contentTimer = setInterval(redAlert, "1000")


	//the canvas stuff which I dont know too much about So nothing crazy in here until I lean more cool things to do
	 var canvas = document.getElementById('myCanvas');
     var context = canvas.getContext('2d');

      context.beginPath();
      context.rect(150, 60, 220, 130);
      context.fillStyle = 'blue';
      context.fill();
      context.lineWidth = 3;
      context.strokeStyle = 'yellow';
      context.stroke();
