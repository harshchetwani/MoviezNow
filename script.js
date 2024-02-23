let open = document.getElementById("open");
let close = document.getElementById("close");
let trl = document.getElementById("trailer");

open.addEventListener("click", () => {
  trl.removeAttribute("style");
});
close.addEventListener("click", () => {
  trl.setAttribute("style", "display:none");
});

function loadSearchData() {
    // Data to be used in the searchbar
    let countries = [
     " 12AngryMen",
     " 12th Fail", ,
      "Aakhri Sach",
      "Adhura",
      "Alice in Boderland",
      "alien",
      "Angrezi medium",
      "Annabelle Creation",
      "ARJUNA",
      "Aspirants",
      "Asur 2",
      "Atrangi re",
      "bahubali",
      "Ballerina",
      "Bambai Meri Jaan",
      "Bawaal",
      "Beautiful Disaster",
      "Bloody Daddy",
      "Blue Bettle",
      "Breaking Bad",
      "Chandigarh kare Aashiqui",
      "Chernobyl",
      "Choona",
      "Chor Nikal K Bhaga",
      "Crazy Fun Park",
      "Dahaad",
      "Dasara",
      "Deadpool",
      "Delhi Crime",
      "Dream Girl 2",
      "Drishyam 2",
      "English Vinglish",
      "Escape from Alcatraz (1979)",
      "Evil Dead Rise",
      "Extraction 2",
      "Fair Play",
      "Farzi",
      "Fast X",
      "Fight Club",
      "Flash",
      "Forgotten Love",
      "Forrest Gump(1994)",
      "Free Guy",
      "Friday Night Plan",
      "Friends",
      "Fukrey 3",
      "Gen V",
      "godzilla vs king kong",
      "Goodbye",
      "GoodFelllas",
      "GOT",
      "Gran Turismo",
      "Gumraah",
      "Guns&Gulaabs",
      "Haseen Dilruba",
      "Heart of Stone",
      "1B71",
      "inception",
      "Irada",
      "IT",
      "Jaane Jaan",
      "Jailer",
      "Jawan",
      "joker",
      "Jugjugg Jeeyo",
      "jurassic park",
      "JW",
      "JW 2",
      "JW 3",
      "JW4",
      "kaala",
      "Kaapor & Sons",
      "Kannur Squad",
      "Kantara",
      "Kerela Crime Files",
      "KGF 2",
     "KGF Chapter 1",
      "Khufiya",
      "King of kotha",
      "kushi",
      "Loki",
      "lord of thwe rings the two",
     "Lucky Man",
      "M3gan",
      "maaveeran",
      "Mathagam",
      "Meg 2 The Trench",
      "Mission Impossible",
      "Money Heist",
      "Moon Knight",
      "Mumbai Diaries",
      "My Fault",
      "Narcos",
      "Nowhere",
      "OMG",
      "OMG 2",
      "Paatal lok",
      "Papillon (2017)",
      "Pathaan",
      "Por Thozhil",
      "Pulp Fiction",
      "Purple Hearts",
      "pushpa",
      "Raanjhanaa",
      "Raat Akeli hai",
      "RDX",
      "Retribution",
      "Rocky Aur Rani",
      "RRR",
      "Saas Bhau Aur Flamingo",
      "San Andreas",
      "satyaprem ki katha",
      "Saw X",
      "Scam 2003",
      "Schindler'sList",
      "Scream VI",
      "seven",
      "Shiddat",
      "Sirf Ek Banda Kaafi Hai",
      "Smile",
      "Song of the Bandits",
      "Squid Game",
      "ST4",
      "star wars",
      "Sultan of Delhi",
      "Talk To Me",
      "The Boys",
      "The Call",
      "The Conference",
      "The Conjuring",
      "The Conjuring 2",
      "The Continental",
      "The Dark Knight",
      "The Dark Knight Rises",
      "The Equalizer 3",
      "The Freelancer",
      "The Godfather",
      "The Godfather II",
      "The GodFather Part III",
      "The Green Mile (1999)",
      "The Hating Game",
      "The matrix",
      "The Mother",
      "The Night Manager",
      "The Nun",
      "The Nun II",
      "The Pope",
      "The Shawshank Redemption",
      "The Summer I Turned Pretty",
      "The Trial",
      "TheLordsOfTheRings",
      "Thor",
      "Through my window",
      "Totally Killer",
      "Triple Frontier",
      "Tu Jhoothi Main Makkaar",
      "Tumbbad",
      "Tumse na ho Payega",
      "Unpaused",
      "Vikram",
      "Wanda Vision",
      "wednesday",
      "XO, Kitty",
      "Zara Hatke Zara Bachke"
    ];
   
    let list = document.getElementById("list");
 
  countries.forEach((country) => {
    let a = document.createElement("a");
    a.setAttribute('href',`/Movies/${country}/${country}.html`);
    let i = document.createElement("img");
    i.setAttribute("src", `/Images/posters/${country}.jpg`);
    a.classList.add("listItem");
    let p=document.createElement('p')
    p.innerText=`${country}`
    a.append(p)
    a.append(i);
    
    list.appendChild(a);
  });
}

function search() {
  // search functionality goes here
  list.style.display='block'
  let listContainer = document.getElementById("list");
  listContainer.style.visibility = "visible";
  let listItems = document.getElementsByClassName("listItem");
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();

  let noResults = true;
  for (i = 0; i < listItems.length; i++) {
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
      listItems[i].style.display = "none";
      continue;
    }

    else {
      listItems[i].style.display = "flex";
      noResults = false;
      listContainer.style.display = noResults ? "none" : "block";
     
      
 
    }
  }
}
