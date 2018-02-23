var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

<<<<<<< HEAD
if (room ==="ballroom" && suspect === "Mr.Kalehoff") {
   weapon = "poison";
   solved = true;
   
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
   weapon = "trophy";
<<<<<<< HEAD
   solved = true;
=======
   solved = false;
>>>>>>> parent of 35ef6b1... Phil
   
} else if (room === "billiards" && suspect === "Mrs. Sparr") {
   weapon = "pool stick";
   solved = true;
   
} else if (room === "dining room" && suspect === "Mr. Parkes") {
   weapon = "knife";
   solved = true;
=======
if (room === "ballroom") { weapon = "poison"; solved = true;
    
} else if (room === "gallery") { weapon = "trophy"; solved = true;
    
} else if (room === "billiards room") { weapon = "pool stick"; solved = true;
    
} else { weapon = "knife"; solved = true;
    
>>>>>>> parent of 3ede75d... Revert "Phil"
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
