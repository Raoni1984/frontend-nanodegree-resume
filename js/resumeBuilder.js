/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    name: "Raoni",
    role: "Web Dev",
    contactInfo:  {
        email: "raonico@gmail.com",
        celPhone: "11990119747"
    },
    pictureUrl: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAMDAAAAJDE2NmNjMTc4LTE4NmEtNDViNi1iMmRlLWRkZmY1YjJlZGFkOQ.jpg",
    welcomeMessage: "Hello and welcome to my website!",
    skills: ["JS", "HTML", "CSS"]
}

var work = {};
work.jobPositon = "Full Stack Trainee Web Developer";
work.employer = "Somar Meteorologia";
work.yearsWorked = 2;
work.city = "Sao Paulo";

var education = {};
education["lastSchool"] = "Fatec";
education["yearsAtSchool"] = 3;
education["schoolCity"] = "Carapicuiba";

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);
//.append() work["position"] and education.name to resume
$("#main").append(work["position"]);
$("#main").append(education.name);

/*
TODO: 
1) Create work and project objects.
2) Double check or finish your bio and education objects.
3) Clear out resumeBuilder.js so that only 4 objects remain.

Seções do currículo:
work
work contém uma matriz de jobs. Cada objeto job em jobs deve conter um employer, um title, um location, dates trabalhadas e uma description.

projects
projects contém uma matriz de projects. Cada objeto project em projects deve conter um title, dates trabalhadas, description e uma matriz images com strings de URL para imagens do projeto.

bio
bio contém os objetos name, role, welcomeMessage, contacts e uma matriz skills. O objeto contacts, embora não seja obrigatório, deve conter um número mobile, endereço de email, nome de usuário no github, perfil no twitter e location.

education
education contém uma matriz de schools. Cada objeto school em schools contém um name, um location, um degree, uma matriz majors, dates do curso e uma url do site da escola. education também contém uma matriz onlineCourses. Cada objeto onlineCourse em onlineCourses deve conter um title, uma school, dates e uma url do curso.
*/






/*--
//
The code below is not part of this Project.
//
*/

var wordChanger = function(string, word1, word2) {
    return string.replace(word1, word2);
}

//Exercise 1
//Array Manipulation
var sampleArray = [1,2,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    newArray = _array.slice();

    console.log("_array length == " +  _array.length);
    console.log("ultimo elemento de _array == " + _array[_array.length - 1]);
    console.log("newArray length == " + newArray.length);

    newArray.pop(); 
    newArray.push(_array[_array.length - 1] + 1);
    
    // Don't delete this line!
    return newArray;
};
// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));

//Exercise 2
//
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName = finalName.toLowerCase();
    var firstName = finalName.charAt(0).toUpperCase() + finalName.slice(1, finalName.indexOf(" "));
    var lastName = finalName.slice(finalName.indexOf(" "));
    lastName = lastName.toUpperCase();
    finalName = firstName + lastName;
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));