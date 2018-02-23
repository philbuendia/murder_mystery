var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

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
>>>>>>> parent of a07d2de... Quibox corrected
   
} else if (room === "billiards" && suspect === "Mrs. Sparr") {
   weapon = "pool stick";
   solved = true;
   
} else if (room === "dining room" && suspect === "Mr. Parkes") {
   weapon = "knife";
   solved = true;
}
if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}