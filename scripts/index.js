	//randomize array - will match 1st with second and so on and the last gets matched with the first

	// 1. ask user how many participants?✅
		//  - prompt user for number of participants
	// 2. ask user for names✅
		//	- prompt user for names.
	// pair two names together
		//  - can't get yourself 
		//  - Pair everyone with someone?
	// alert who is matched with who
		//  - display the pairings on the screen or enter your name to see who you matched with?.
				
	// create two lists: 
		//  - one with all the names of the participants
		//  - a hidden list with all the names to be matched 
	// hover/click on your name to display who you are matched with
	// bonus
		//  - bonus1: track who they had last year so you don't get the same person
		//  - bonus2: two: make it email the pairings to the person so you can't see who others got 
	//finish secret santa game this way then switch it to jQuery
		// secretSantaList{
		// 	names[]
		// 	matches[]
		// }
	//ask for how many participants, Jquery generate HTML for that many boxes 1 for each name.
		//  -  look at example in meme-ory game that adds html based on the user interaction
	
$(function() {

    const secretSantaList = [];
    const secretSantaMatches = [];
    let numberOfParticipants = 0;

    function getRandoNum() {
        return Math.floor(Math.random() * (secretSantaMatches.length));
        //gets random number
    }

    function getRandomPerson() {
        const randoNum = getRandoNum();
        const randoPerson = secretSantaMatches[randoNum];
        return randoPerson;
        //gets random person to be matched with current person
	}

    function compare(match, currentPerson) {
        if (match === currentPerson && secretSantaMatches.length && secretSantaList.length === 0) {
            console.log("the last user is matched with themselves, start the game again")
            startGame();
        } else if (match === currentPerson) {
            //they got matched with themselves - get a new match
            const newMatch = getRandomPerson();
            const checkName = compare(newMatch, currentPerson);
            return newMatch
            //still struggling to make this work? occasionally throws an error when only 3 people entered
        } else {
            //they are matched with someone else, list the match
            $('.matchedNames').append(`<li>${currentPerson} is buying a gift for ${match} 🎁🎄🎅</li>`);
            removeMatchFromArray(match);

        }
    }

    function removeMatchFromArray(match) {
        const matchPlace = secretSantaMatches.indexOf(match);
        const removeFromMatches = secretSantaMatches.splice(matchPlace, 1)
        // Takes a name, finds where that person is in the array, removes that person from the array 
    }

    $('.numberOfParticipants').on('submit', function(e) {
        e.preventDefault();

        numberOfParticipants = $(this).find(".text").val();
        $(".numberOfParticipants").fadeOut(500);
        $(".namesOfParticipants").fadeIn(1000);

    });

    $('.namesOfParticipants').on('submit', function(e) {
        e.preventDefault();

        const nameOfPlayers = $(this).find(".text").val();
        $('.text').val('');
        $(".listNames").append(`<li>${nameOfPlayers}</li>`)
        $('li').css("text-transform", "uppercase");

        secretSantaList.push(nameOfPlayers);
        secretSantaMatches.push(nameOfPlayers);

    });

    $('.matchNames').on('submit', function(e) {
        e.preventDefault();
        for (let i = 0; i < numberOfParticipants; i++) {

            const currentPerson = secretSantaList.pop();
            let match = getRandomPerson();
            const checkName = compare(match, currentPerson);

        }
        $('li').css("text-transform", "capitalize");

    });

});

	
//💡this is the remainder of my Vanilla code, it took forever and hurt to delete it so I'm saving it

// const startGame = function(){

// 	const secretSantaList = [];
// 	const secretSantaMatches = [];

// 	const numberOfParticipants = function(){
// 		const howManyParticipants = prompt("How Many People Will be in Your Secret Santa?");
// 		return howManyParticipants;
// 	}

// 	//collect one name from the user
// 	const getName = function(){
// 		const names = prompt ("enter names for Secret Santa")
// 		return names;
// 	}
// 	// collect all names submitted by the user
// 	function collectNames(){
// 		const participants = getName();
// 		return participants;
// 	}
// 	const howManyParticipants = numberOfParticipants();

	
// 	for(let i = 0; i < howManyParticipants; i++){

// 		const collection = collectNames(getName);

// 		secretSantaList.push(collection) && secretSantaMatches.push(collection)
// 	}

// startGame();