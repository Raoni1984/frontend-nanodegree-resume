/*
This is empty on purpose! Your code to build the resume will go here.
 */
var myName = "Raoni";
var myRole = "Web Dev";

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", myRole);

$("#header").prepend(formattedName);
$("#header").append(formattedRole)