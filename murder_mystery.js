var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "ballroom") { weapon = "poison"; solved = true;
    
} else if (room === "gallery") { weapon = "trophy"; solved = true;
    
} else if (room === "billiards room") { weapon = "pool stick"; solved = true;
    
} else { weapon = "knife"; solved = true;
    
}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
