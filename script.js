const pirateDictionary = {
"hello" : "ahoy",
"hi" : "ahoy",
"hey" : "arrgh",
"Hey" : "Arrgh", 
"Hi" : "Ahoy", 
"Hello" : "Ahoy", 
"friend" : "matey",
"friends" : "me hearties",  
"buddy" : "matey", 
"Friend" : "Matey", 
"Buddy" : "Matey", 
"mate" : "matey", 
"Mate" : "Matey", 
"yes" : "aye", 
"Yes" : "Aye", 
"yeah" : "aye",
"Yeah" : "Aye",  
"no" : "nay", 
"No" : "Nay", 
"treasure" : "booty", 
"Treasure" : "Booty", 
"reward" : "bounty", 
"Reward" : "Bounty", 
"pirate" : "buccaneer", 
"Pirate" : "Buccaneer", 
"song" : "shanty", 
"Song" : "Shanty", 
"ship" : "vessel", 
"Ship" : "Vessel", 
"box" : "coffer", 
"Box" : "Coffer",
"chest" : "coffer", 
"Chest" : "Coffer", 
"lookout" : "crow's nest", 
"Lookout" : "Crow's nest", 
"sword" : "cutlass", 
"Sword" : "Cutlass", 
"money" : "doubloons", 
"Money" : "Doubloons", 
"pull" : "heave", 
"Pull" : "Heave", 
"flag" : "Jolly Roger", 
"Flag" : "Jolly Roger", 
"boy" : "lad", 
"Boy" : "Lad", 
"girl" : "lassie", 
"Girl" : "Lassie", 
"person" : "landlubber", 
"Person" : "Landlubber", 
"steal" : "plunder", 
"Steal" : "Plunder", 
"my" : "me", 
"My" : "Me", 
"rob" : "pillage", 
"Rob" : "Pillage", 
"alcohol" : "rum", 
"Alcohol" : "Rum", 
"newbie" : "scallywag", 
"Newbie" : "Scallywag", 
"veterans" : "seadog", 
"Veterans" : "Seadog", 
"wow" : "shiver me timbers!", 
"Wow" : "Shiver me timbers!", 
"clean" : "swab", 
"Clean" : "Swab", 
"you" : "ye", 
"You" : "Ye", 
"is" : "be", 
"Is" : "Be", 
"are" : "be", 
"Are" : "Be", 
"the" : "th'", 
"The" : "Th'", 
"your" : "yer", 
"Your" : "Yer", 
"stop" : "avast", 
"Stop" : "Avast", 
"where" : "whar", 
"Where" : "Whar", 
"there" : "thar", 
"There" : "Thar", 
"sir" : "cap'n", 
"Sir" : "Cap'n", 
"captain" : "cap'n", 
"Captain" : "Cap'n", 
"madam" : "beauty", 
"Madam" : "Beauty", 
"ma'am" : "beauty", 
"Ma'am" : "Beauty", 
"woman" : "beauty", 
"Woman" : "Beauty", 
"go" : "set sail", 
"Go" : "Set sail", 
"food" : "grub", 
"Food" : "Grub", 
"yikes" : "blimey!",
"Yikes" : "Blimey!", 
"dead" : "in Davey Jones' locker",
"beat" : "flog", 
"Beat" : "Flog", 
"ramp" : "gangplank", 
"Ramp" : "Gangplank", 
"saying" : "sayin'", 
"playing" : "playin'", 
"talking" : "talkin'", 
"scary" : "dreaded", 
"Scary" : "Dreaded", 
"escaping" : "escapin'", 
"feeling" : "feelin'",
"i" : "me", 
"am" : "be",  
};

function translateToPirateSpeak(sentence) {
    if (!sentence || typeof sentence !== "string") return "";
  
    
    const words = sentence.match(/\b\w+\b|[^\w\s]/g); 
    if (!words) return ""; 
  
    
    const translatedWords = words.map((word) => {
      const cleanWord = word.toLowerCase();
      return pirateDictionary[cleanWord] ? pirateDictionary[cleanWord] : word;
    });
  
    const pirateSpeak = translatedWords.join(" ");
    return pirateSpeak;
  }
  
  
  document.getElementById("translateButton").addEventListener("click", () => {
    
    const inputSentence = document.getElementById("inputSentence").value;
  
    
    const translatedSentence = translateToPirateSpeak(inputSentence);
  
    
    document.getElementById("output").innerText = translatedSentence;
  });


  function togglePirateMusic() {
    const music = document.getElementById("pirateMusic");
    const button = document.getElementById("toggleMusic");
  
    if (music.paused) {
      music.play();
      button.textContent = "🎵 NAYYY DO NOT PAUSE IT!";
    } else {
      music.pause();
      button.textContent = "🎵 Play the Sea Shanty, ya scallywag";
    }
  }
  


  

 
                                                            