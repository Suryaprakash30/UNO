let cards = [
	"1red1",
	"1red2",
	"1red3",
	"1red4",
	"1red5",
	"1red6",
	"1red7",
	"1red8",
	"1red9",
	"1red0",
	"1redrev",
	"1redskip",
	"1red+2",
	"1blu1",
	"1blu2",
	"1blu3",
	"1blu4",
	"1blu5",
	"1blu6",
	"1blu7",
	"1blu8",
	"1blu9",
	"1blu0",
	"1blurev",
	"1bluskip",
	"1blu+2",
	"1grn1",
	"1grn2",
	"1grn3",
	"1grn4",
	"1grn5",
	"1grn6",
	"1grn7",
	"1grn8",
	"1grn9",
	"1grn0",
	"1grnskip",
	"1grnrev",
	"1grn+2",
	"1yel1",
	"1yel2",
	"1yel3",
	"1yel4",
	"1yel5",
	"1yel6",
	"1yel7",
	"1yel8",
	"1yel9",
	"1yel0",
	"1yelskip",
	"1yelrev",
	"1yel+2",
	"2red1",
	"2red2",
	"2red3",
	"2red4",
	"2red5",
	"2red6",
	"2red7",
	"2red8",
	"2red9",
	"2redrev",
	"2redskip",
	"2red+2",
	"2blu1",
	"2blu2",
	"2blu3",
	"2blu4",
	"2blu5",
	"2blu6",
	"2blu7",
	"2blu8",
	"2blu9",
	"2blurev",
	"2bluskip",
	"2blu+2",
	"2grn1",
	"2grn2",
	"2grn3",
	"2grn4",
	"2grn5",
	"2grn6",
	"2grn7",
	"2grn8",
	"2grn9",
	"2grnskip",
	"2grnrev",
	"2grn+2",
	"2yel1",
	"2yel2",
	"2yel3",
	"2yel4",
	"2yel5",
	"2yel6",
	"2yel7",
	"2yel8",
	"2yel9",
	"2yelskip",
	"2yelrev",
	"2yel+2",
	"wildwild",
	"wildwild",
	"wildwild",
	"wildwild",
	"1wil+4",
	"2wil+4",
	"3wil+4",
	"4wil+4",
];

// console.log(cards.length);
var shuffle, i;
shuffle = [];
for (let i = 108; i > 0; i--) {
	let random = Math.floor(Math.random() * cards.length);
	random = cards[random];
	shuffle.push(random);
	cards.splice(cards.indexOf(random), 1);
}
// console.log(cards.length);
cards = shuffle;

let middledeck;
let opencard;
function Colordetails(value) {
	let obj = {
		"1r": "red",
		"2r": "red",
		"1g": "green",
		"2g": "green",
		"1y": "yellow",
		"2y": "yellow",
		"1b": "blue",
		"2b": "blue",
	};
	value = value.slice(0, 2);
	//console.log(value);
	for (key in obj) {
		if (obj[value]) {
			return obj[value];
			} else {
			return "black";
		}
	}
}
function getrandom(cards) {
	let randomCard = Math.floor(Math.random() * cards.length);
	return cards[randomCard];
}
const playerA = document.getElementById("playerA");
const playerB = document.getElementById("playerB");
let computerCards = [];
let playerCards = [];

function showcards(user1, user2) {
	for (let i = 1; i < 15; i++) {
		let a = Math.floor(Math.random() * cards.length);
		// computerCards.push(cards[a]);
		let cardcolor = Colordetails(cards[a]);
		let drawncard = document.createElement("div");
		drawncard.className = `cardStruct`;
		drawncard.textContent = cards[a].slice(4);
		drawncard.id = cards[a];
		if (i % 2 === 0) {
			drawncard.dataset.player = `player`;
			drawncard.style.backgroundColor = cardcolor;
			playerCards.push(cards[a]);
			user2.appendChild(drawncard);
			} else {
			drawncard.dataset.player = `computer`;
			drawncard.style.backgroundColor = "black";
			drawncard.style.color= "black";
			computerCards.push(cards[a]);
			user1.appendChild(drawncard);
		}
		cards.splice(cards.indexOf(cards[a]), 1);
	}
}
// console.log({ computerCards });
// console.log({ playerCards });
showcards(playerA, playerB);
// showcards(playerB);
let a = Math.floor(Math.random() * cards.length);
decktop = cards[a].slice(4);
let middecktop = Colordetails(cards[a]);
let middeck = document.getElementById("middeck");
middeck.style.backgroundColor = middecktop;
middeck.textContent = decktop;
cards.splice(cards.indexOf(cards[a]), 1);

// function checkthecard (user,machine){
//   let b=Math.floor(Math.random()*cards.length);
//   middeck = push.deletedarray;
// }

unoProceed = () => {
	penalty = false;
	document.getElementById("uno").style.display = "none";
	//document.getElementById("unoProcedd").style.display = `block`;
};

penaltyCards = () => {
	if (penalty) {
		let user = "player";
		plusCard(user);
		plusCard(user);
		penalty = false;
	}
	document.getElementById("uno").style.display = "none";
};

matchColorOfUser = () => {
	document.querySelectorAll("[data-player='player']").forEach((element) => {
		element.addEventListener("click", (event) => {
			let middeckColor = document.getElementById("middeck").style.backgroundColor;
			let middeckInnerText = document.getElementById("middeck").innerText;
			let clickedInnerText = element.innerText;
			let clickedColor = Colordetails(element.id);
			if((middeckInnerText === "+4" || middeckInnerText === "wild") && clickedColor === middecktop) {
				document.querySelector("#choosenCol").style.display = "none";
				let drawnCard = element.id;
				if(playerCards.includes(drawnCard)) {
					action = false;
					check = 1;
					decktop = drawnCard.slice(4);
					middecktop = Colordetails(drawnCard);
					let middeck = document.getElementById("middeck");
					middeck.style.backgroundColor = middecktop;
					middeck.textContent = decktop;
					document.getElementById(drawnCard).remove();
					playerCards.splice(playerCards.indexOf(drawnCard), 1);
					if(decktop === "+2") {
						let user = "computer";
						plusCard(user);
						plusCard(user);
						check++;
						action = true;
						matchColorOfUser();
					}
					else if(decktop === "+4") {
						check++;
						document.querySelector(".colPic").style.display = "inline";
					}
					else if(decktop === "wild") {
						check++;
						document.querySelector(".colPic").style.display = "inline";
					}
					else if(decktop === "skip" || decktop === "rev") {
						check++;
						action = true;
						setTimeout(matchColorOfUser, 2000);
					}
					if(check === 1) {
						setTimeout(matchColorOfComputer, 3000);
					}
				}
			}
			if (
				action &&
				(clickedColor === middeckColor || clickedInnerText === middeckInnerText || clickedColor === "black")
				) {
				document.querySelector("#choosenCol").style.display = "none";
				document.querySelector(".pass").style.display = "none";
				let drawnCard = element.id;
				if(playerCards.includes(drawnCard)) {
					action = false;
					count = 1;
					check = 1;
					decktop = drawnCard.slice(4);
					middecktop = Colordetails(drawnCard);
					let middeck = document.getElementById("middeck");
					middeck.style.backgroundColor = middecktop;
					middeck.textContent = decktop;
					document.getElementById(drawnCard).remove();
					playerCards.splice(playerCards.indexOf(drawnCard), 1);
					if(decktop === "+2") {
						let user = "computer";
						plusCard(user);
						plusCard(user);
						check++;
						action = true;
						matchColorOfUser();
					}
					else if(decktop === "+4") {
						check++;
						document.querySelector(".colPic").style.display = "inline";
					}
					else if(decktop === "wild") {
						check++;
						document.querySelector(".colPic").style.display = "inline";
					}
					else if(decktop === "skip" || decktop === "rev") {
						check++;
						action = true;
						setTimeout(matchColorOfUser, 2000);
					}
					if(check === 1) {
						setTimeout(matchColorOfComputer, 3000);
					}
				}
			}
			if(playerCards.length === 2) {
				document.getElementById("uno").style.display = "inline";
				penalty = true;
				setTimeout(penaltyCards, 3000);
			}
			if(playerCards.length === 0) {
				alert("You Won");
				document.location.reload();
			}
		});
	});
};

action = true;
count = 1;
check = 1;
// matchColorOfUser();

function ValidCard(computerCards) {
	return computerCards.filter(
		(element) =>
		Colordetails(element) === middecktop || element.slice(4) === decktop || Colordetails(element) === "black"
	);
}

matchColorOfComputer = () => {
	let randomColor;
	let color = ["red","blue","green","yellow"];
	let middeckColor = document.getElementById("middeck").style.backgroundColor;
	let middeckInnerText = document.getElementById("middeck").innerText;
	let drawnCard = ValidCard(computerCards);
	if(drawnCard.length > 0) {
		let a = Math.floor(Math.random() * drawnCard.length);
		decktop = drawnCard[a].slice(4);
		middecktop = Colordetails(drawnCard[a]);
		let middeck = document.getElementById("middeck");
		middeck.style.backgroundColor = middecktop;
		middeck.textContent = decktop;
		computerCards.splice(computerCards.indexOf(drawnCard[a]), 1);
		document.getElementById(drawnCard[a]).remove();
		document.querySelector("#choosenCol").style.display = "none";
		if(decktop === "+2") {
			let user = "player";
			plusCard(user);
			plusCard(user);
			setTimeout(matchColorOfComputer, 3000);
		}
		else if(decktop === "+4") {
			let user = "player";
			let a = Math.floor(Math.random() * color.length);
			randomColor = color[a];
			document.querySelector("#selectedCol").style.backgroundColor = randomColor;
			document.querySelector("#choosenCol").style.display = "inline";
			middecktop = randomColor;
			decktop = undefined;
			plusCard(user);
			plusCard(user);
			plusCard(user);
			plusCard(user);
			setTimeout(matchColorOfComputer, 3000);
		}
		else if(decktop === "wild") {
			let a = Math.floor(Math.random() * color.length);
			randomColor = color[a];
			document.querySelector("#selectedCol").style.backgroundColor = randomColor;
			document.querySelector("#choosenCol").style.display = "inline";
			middecktop = randomColor;
			decktop = undefined;
			setTimeout(matchColorOfComputer, 3000);
		}
		else if(decktop === "skip" || decktop === "rev") {
			setTimeout(matchColorOfComputer, 2000);
		}
		} else {
		let a = Math.floor(Math.random() * cards.length);
		let middecktop = Colordetails(cards[a]);
		let decktop = cards[a].slice(4);
		if(middecktop === middeckColor || decktop === middeckInnerText || middecktop === "black") {
			setTimeout(function(){
				let middeck = document.getElementById("middeck");
				middeck.style.backgroundColor = middecktop;
				middeck.textContent = decktop;
			}, 1000);
			if(decktop === "+2") {
				let user = "player";
				plusCard(user);
				plusCard(user);
				setTimeout(matchColorOfComputer, 3000);
			}
			else if(decktop === "+4") {
				let user = "player";
				let a = Math.floor(Math.random() * color.length);
				randomColor = color[a];
				document.querySelector("#selectedCol").style.backgroundColor = randomColor;
				document.querySelector("#choosenCol").style.display = "inline";
				middecktop = randomColor;
				decktop = undefined;
				plusCard(user);
				plusCard(user);
				plusCard(user);
				plusCard(user);
				setTimeout(matchColorOfComputer, 3000);
			}
			else if(decktop === "wild") {
				let a = Math.floor(Math.random() * color.length);
				randomColor = color[a];
				document.querySelector("#selectedCol").style.backgroundColor = randomColor;
				document.querySelector("#choosenCol").style.display = "inline";
				middecktop = randomColor;
				decktop = undefined;
				setTimeout(matchColorOfComputer, 3000);
			}
			else if(decktop === "skip" || decktop === "rev") {
				setTimeout(matchColorOfComputer, 2000);
			}
			} else {
			let user = "computer";
			let randomCard = takeCard(a,user);
			randomCard.style.backgroundColor = "black";
			randomCard.style.color= "black";
			playerA.appendChild(randomCard);
			computerCards.push(cards[a]);
		}
		cards.splice(cards.indexOf(cards[a]), 1);
	}
	action = true;
	count = 1;
	setTimeout(matchColorOfUser, 3000);
};

takeCard = (a,usertype) => {
	let addCard = document.createElement("div");
	addCard.className = `cardStruct`;
	addCard.id = cards[a];
	addCard.dataset.player = usertype;
	addCard.textContent = cards[a].slice(4);
	addCard.style.backgroundColor = Colordetails(cards[a]);
	return addCard;
};

document.querySelector(".deck").addEventListener("click", function () {
	if(action && count === 1) {
		count++;
		let a = Math.floor(Math.random() * cards.length);
		let user = "player";
		let randomCard = takeCard(a,user);
		playerB.appendChild(randomCard);
		playerCards.push(cards[a]);
		cards.splice(cards.indexOf(cards[a]), 1);
		setTimeout(matchColorOfUser, 3000);
		document.querySelector(".pass").style.display = "inline";
	}
});

computerturn = () => {
	document.querySelector(".pass").style.display = "none";
	setTimeout(matchColorOfComputer, 1000);
};

plusCard = (usertype) => {
	let a = Math.floor(Math.random() * cards.length);
	let addCard = document.createElement("div");
	addCard.className = `cardStruct`;
	addCard.id = cards[a];
	addCard.dataset.player = usertype;
	addCard.textContent = cards[a].slice(4);
	addCard.style.backgroundColor = Colordetails(cards[a]);
	if(usertype === "computer") {
		playerA.appendChild(addCard);
		computerCards.push(cards[a]);
		} else {
		playerB.appendChild(addCard);
		playerCards.push(cards[a]);
	}
	cards.splice(cards.indexOf(cards[a]), 1);
};

chooseColor = (color) => {
	if(decktop === "+4") {
		let user = "computer";
		document.querySelector(".colPic").style.display = "none";
		document.querySelector("#selectedCol").style.backgroundColor = color;
		document.querySelector("#choosenCol").style.display = "inline";
		middecktop = color;
		decktop = undefined;
		plusCard(user);
		plusCard(user);
		plusCard(user);
		plusCard(user);
		action = true;
		matchColorOfUser();
		} else {
		document.querySelector(".colPic").style.display = "none";
		document.querySelector("#selectedCol").style.backgroundColor = color;
		document.querySelector("#choosenCol").style.display = "inline";
		middecktop = color;
		decktop = undefined;
		action = true;
		matchColorOfUser();
	}
};

setTimeout(matchColorOfComputer, 3000);

// for (i = 0; i < document.querySelectorAll(".cardStruct").length; i++) {
//   document
//     .querySelectorAll(".cardStruct")
//     [i].addEventListener("click", function () {
//       let similarCard = ValidCard(playerCards);
//       userChoosen = this.getAttribute("id");
//       if (similarCard.includes(userChoosen)) {
//         console.log("Matching");
//       } else {
//         console.log("Not Matching");
//       }
//     });
// }																		