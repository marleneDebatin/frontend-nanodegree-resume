/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $(document).click(function (loc) {
       logClicks(loc.pageX, loc.pageY);
 })

/*
 Biographical information
*/
var bio = {
      "name" : "Pia Droop",
      "role" : "Web Developer",
      "contacts" : {
            "email" : "pia.droop@gmail.com",
            "location" : "Hamburg, Germany",
            "website" : "http://marlenedebatin.github.io./"
      },
      "pictureURL" : "images/nose-up.jpg",
      "welcomeMessage" : "Welcome! This is my resume. It tells you everything you have always wanted to know about me.",
      "skills" : [
            "design",
            "web development",
            "tea drinking"
            ]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedWebsite = HTMLwebsite.replace("%data%", bio.contacts.website);
var formattedCity = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedContact = formattedEmail + formattedWebsite + formattedCity;
$("#topContacts").append(formattedContact);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPicture);
$("#header").append(formattedMessage);

if(bio.skills.length != 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
      }
}

/*
Work information
*/
var rexrodtDescription = "I spend my student internship at the Restaurant Rexrodt, because I didn't want to spend my time copying and making coffee at a large, important company, without learning anything."
                  + " Therefore, I decided to follow one of my personal interests and go to a Restaurant, but one that actually still did everything themselves and not bought their food precooked in plastic bags."
                  + " I figuered that there would always be something to do at a Restaurant and that I would be included in the workflow and get actual insight of what it means to be a chef."
                  + " And I did: Though I was by law restricted to not be working during dinner but only lunch time, I was in that time, after having helped with the preparation, responisible for the salats and desserts."
                  + " Though I did not spend my internship at a large, prestigous company like a newspaper, as my teacher would have expected, I was in my class one the students who gained the most insight on the job and actually did a lot.";
var work = {
      "jobs":  [ {
                  "title" : "Intern",
                  "employer" : "Restaurant Rexrodt",
                  "time" : "20th of January 2014 - 8th of February 2014",
                  "city" : "Hamburg",
                  "description" : rexrodtDescription
            }
      ]
};
displayWork(work.jobs);

/*
Education information
*/
var education = {
      "schools" : [
            {
                  "name" : "Wilhelm Gymnasium",
                  "degree" : "Abitur",
                  "major" : "Physics, Geography",
                  "location" : "Hamburg",
                  "dates" : "2009 - 2017"
            }
      ],
      "onlineCourses" : [
            {
                  "school" : "Harvardx on edx",
                  "title" : "CS50 Introduction to Computer Science",
                  "dates" : "March 2015 - December 2015",
                  "URL" : "http://www.edx.org"
            },
            {
                  "school" : "Microsoft on edx",
                  "title" : "Programming with C#",
                  "dates" : "April 2015 - May 2015",
                  "URL" : "http://www.edx.org"
            },
            {
                  "title" : "Front-End Web Developer Nanodegree",
                  "dates" : "January 2016 - now",
                  "school" : "Udacity",
                  "URL" : "http://www.udactiy.com"
            }
      ]
};

for (var school in education.schools) {
      var mySchool = education.schools[school];
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", mySchool.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", mySchool.degree);
      var formattedSchoolDates = HTMLschoolDates.replace("%data%", mySchool.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", mySchool.location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", mySchool.major);
      var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

      $(".education-entry:last").append(formattedSchool);
}
if (education.onlineCourses.length != 0) {
      $("#education").append(HTMLonlineClasses);
      for (var online in education.onlineCourses) {
            var course = education.onlineCourses[online];
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.URL);
            var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;
            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(formattedOnline);
      }
}

/*
Project information
*/
var projects = {
      "in course projects" : [
            {
                  "title" : "CS50 Introduction to Computer Science - final project",
                  "description" : "This website allows students and tutors to easily conntect and communicate. It was my final project for CS50.",
                  "dates" : "December 2015"
            }
      ],
      "display" : function() {
            for (var project in projects["in course projects"]) {
                  var myProject = projects["in course projects"][project];
                  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", myProject.title);
                  var formattedProjectDates = HTMLprojectDates.replace("%data%", myProject.dates);
                  var formattedProjectDescription = HTMLprojectDescription.replace("%data%", myProject.description);
                  var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
                  var finishedProject = HTMLprojectStart.replace("%data%", formattedProject);

                  $("#projects").append(finishedProject);
            }
      }
};
projects.display();


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

function displayWork(jobs) {
      for(var job in jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", jobs[job].time);
            var formattedLocation = HTMLworkLocation.replace("%data%", jobs[job].city);
            var formattedDescription = HTMLworkDescription.replace("%data%", jobs[job].description);
            var formattedInfos = formattedDates + formattedLocation + formattedDescription;
            $(".work-entry:last").append(formattedInfos);
      }
}
function inName(name) {
      var names = name.trim().split(" ");
      var first = names[0].toLowerCase();
      var firstName = first[0].toUpperCase() + first.slice(1);
      var lastName = names[1].toUpperCase();
      var internationalName = firstName + " " + lastName;
      console.log(internationalName);
      return internationalName;
}
