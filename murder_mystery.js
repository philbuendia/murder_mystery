var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> parent of 35ef6b1... Phil
if (room ==="ballroom" && suspect === "Mr.Kalehoff") {
   weapon = "poison";
   solved = true;
   
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
   weapon = "trophy";
<<<<<<< HEAD
<<<<<<< HEAD
   solved = true;
=======
   solved = false;
>>>>>>> parent of 35ef6b1... Phil
=======
   solved = false;
>>>>>>> parent of 35ef6b1... Phil
   
} else if (room === "billiards" && suspect === "Mrs. Sparr") {
   weapon = "pool stick";
   solved = true;
   
} else if (room === "dining room" && suspect === "Mr. Parkes") {
   weapon = "knife";
   solved = true;
<<<<<<< HEAD
=======
if (room === "ballroom") { weapon = "poison"; solved = true;
    
} else if (room === "gallery") { weapon = "trophy"; solved = true;
    
} else if (room === "billiards room") { weapon = "pool stick"; solved = true;
    
} else { weapon = "knife"; solved = true;
    
>>>>>>> parent of 3ede75d... Revert "Phil"
=======
>>>>>>> parent of 35ef6b1... Phil
}
if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}