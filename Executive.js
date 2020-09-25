/**
 * @class
 */
class Executive {
	/**
	 * @description Sets up the game with the user selected number of ships. Constructor create event listeners on the game setup menu
	 */
    constructor() {
		/*
		* @member numShips {number} The number of ships each player will have
		* @member rows {number} The number of rows each board will have
		* @member cols {number} The number of columns each board will have
		*/
		this.numShips = document.getElementById("ship-slider").value;
		// Future enhancement: Allow the user to select the size of the board
		this.rows = 9;
		this.cols = 9;
		
		let selectPlayers = document.getElementById("numPlayers");
		selectPlayers.addEventListener("change", () => {
			if (selectPlayers.value == "TwoPlayers"){
				document.getElementById("textSelectDifficulty").style.display = "none";
				document.getElementById("difficulty-slider").style.display = "none";
				document.getElementById("difficulty").style.display = "none";
			}
			else{
				document.getElementById("textSelectDifficulty").style.display = "";
				document.getElementById("difficulty-slider").style.display = "";
				document.getElementById("difficulty").style.display = "";
			}
		});

		document.getElementById("ship-slider").addEventListener("input", e => {
			this.numShips = e.target.value
			document.getElementById("num-ships").innerHTML = this.numShips;
		});

		document.getElementById("difficulty-slider").addEventListener("input", e => {
			//This can probably be improved.
			this.difficulty = e.target.value;
			let mapString = "";
			if (this.difficulty == 1){mapString = "Easy";}
			else if (this.difficulty == 2){mapString = "Medium";}
			else if (this.difficulty == 3) {mapString = "Hard";}
			else{mapString = "ERROR";}
			document.getElementById("difficulty").innerHTML = mapString;
		});

		// Setting up the event for a click to change the menu for the board
		document.getElementById("complete").addEventListener("click", e => this.initGame());
    }
	
	/**
	* @description Sets up the player names and number of ships, then begins the game.
	**/
	initGame() {
		for (let i = 0; i <= 1; i++) {
			let playerName = document.getElementById("player" + i + "-name-input").value;
			if (playerName == "") playerName = "Player " + (i+1);{
					document.getElementById("player" + i + "-name").value = playerName;
				/**change by T14**/
				document.getElementById("player" + i + "-scoreboards").innerText = playerName;
				/**change by T14**/
			}
		}
		var backgroundMusic;
		backgroundMusic= new sound("theme.mp3");
		backgroundMusic.play();
		document.getElementById("menu").style.display = "none";
		document.getElementById("controls").style.display = "";
		document.getElementById("both_boards").style.display = "";
		document.getElementById("switch-turn").style.display = "none";
		document.getElementById("scoreboards").style.display = "";
		this.game = new Gameplay(this.rows, this.cols, this.numShips);
	}
}
