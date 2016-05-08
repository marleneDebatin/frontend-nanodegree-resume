/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var description = "I spend my student internship at the Restaurant Rexrodt, because I didn't want to spend my time copying and making coffee at a large, important company, without learning anything."
 + " Therefore, I decided to follow one of my personal interests and go to a Restaurant, but one that actually still did everything themselves and not bought their food precooked in plastic bags."
 + " I figuered that there would always be something to do at a Restaurant and that I would be included in the workflow and get actual insight of what it means to be a chef."
 + " And I did: Though I was by law restricted to not be working during dinner but only lunch time, I was in that time, after having helped with the preparation, responisible for the salats and desserts."
 + " Though I did not spend my internship at a large, prestigous company like a newspaper, as my teacher would have expected, I was in my class one the students who gained the most insight on the job and actually did a lot.";

var model = {
      // holds biographical information, name, skills etc.
      "bio" : {
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
      },
      // holds information about previous employment
      "work" : {
            "jobs":  [ {
                  "title" : "Intern",
                  "employer" : "Restaurant Rexrodt",
                  "time" : "20th of January 2014 - 8th of February 2014",
                  "city" : "Hamburg",
                  "description" : description
            }]
      },
      // information about schools and online courses
      "education" : {
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
      },
      // information about some projects
      "projects" : {
            "in course projects" : [
                  {
                        "title" : "CS50 Introduction to Computer Science - final project",
                        "description" : "This website allows students and tutors to easily conntect and communicate. It was my final project for CS50.",
                        "dates" : "December 2015"
                  }
            ],
      }
}

var view = {
      // displays the projects
      displayProjects : function (HTMLProject) {
            $("#projects").append(HTMLProject);
      },
      // displays the biographical information
      displayBio : function (header, contact, picture, skills) {
            $("#header").prepend(header);
            $("#topContacts").append(contact);
            $("#header").append(picture);

            $("#header").append(HTMLskillsStart);
            $("#skills").append(skills);
      },
      // displays the school information
      displayEducation : function (schools, onlines) {
            for (var i = 0; i < schools.length; i++) {
                  $("#education").append(HTMLschoolStart);

                  $(".education-entry:last").append(schools[i]);
            }

            $("#education").append(HTMLonlineClasses);
            for (var i = 0; i < onlines.length; i++) {
                  $("#education").append(HTMLschoolStart);
                  $(".education-entry:last").append(onlines[i]);
            }
      },
      // displays the work information
      displayWork : function (jobs) {
            for (var i = 0; i < jobs.length; i++) {
                  $("#workExperience").append(HTMLworkStart);
                  $(".work-entry:last").append(jobs[i]);
            }
      }
}

var octopus = {
      // gets the projects form the model, formatts them and passes them to the view
      getProjects : function () {
            for (var project in model.projects["in course projects"]) {
                  var myProject = model.projects["in course projects"][project];
                  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", myProject.title);
                  var formattedProjectDates = HTMLprojectDates.replace("%data%", myProject.dates);
                  var formattedProjectDescription = HTMLprojectDescription.replace("%data%", myProject.description);
                  var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjectDescription;
                  var finishedProject = HTMLprojectStart.replace("%data%", formattedProject);
                  view.displayProjects(finishedProject);
            }
      },
      // gets the bio infos from the model, formattes them and passes them to the view
      getBio : function () {
            var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
            var formattedHeader = formattedName + formattedRole;

            var formattedEmail = HTMLemail.replace("%data%", model.bio.contacts.email);
            var formattedWebsite = HTMLwebsite.replace("%data%", model.bio.contacts.website);
            var formattedCity = HTMLlocation.replace("%data%", model.bio.contacts.location);
            var formattedContact = formattedEmail + formattedWebsite + formattedCity;

            var formattedMessage = HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMessage);
            var formattedPicture = HTMLbioPic.replace("%data%", model.bio.pictureURL);
            var formattedPictureMessage = formattedPicture + formattedMessage;

            var formattedAllSkills = "";
            if(model.bio.skills.length != 0) {
                  for (var i = 0; i < model.bio.skills.length; i++) {
                        var formattedSkill = HTMLskills.replace("%data%", model.bio.skills[i]);
                        formattedAllSkills += formattedSkill;
                  }
            }

            view.displayBio(formattedHeader,
                  formattedContact,
                  formattedPictureMessage,
                  formattedAllSkills);
      },
      // gets eduction from the model, formattes them and passes them to the view
      getEducation : function () {
            var formattedAllSchools = [];
            for (var school in model.education.schools) {
                  var mySchool = model.education.schools[school];

                  var formattedSchoolName = HTMLschoolName.replace("%data%", mySchool.name);
                  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", mySchool.degree);
                  var formattedSchoolDates = HTMLschoolDates.replace("%data%", mySchool.dates);
                  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", mySchool.location);
                  var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", mySchool.major);
                  var formattedSchool = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor;

                  formattedAllSchools.push(formattedSchool);
            }

            var formattedAllOnlines = [];
            if (model.education.onlineCourses.length != 0) {
                  for (var online in model.education.onlineCourses) {
                        var course = model.education.onlineCourses[online];
                        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
                        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
                        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
                        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.URL);
                        var formattedOnline = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;

                        formattedAllOnlines.push(formattedOnline)
                  }
            }

            view.displayEducation(formattedAllSchools, formattedAllOnlines);
      },
      // gets work info from the model, formattes them and passes them to the view
      getWork : function () {
            var formattedAllJobs = [];
            for(var i = 0; i < model.work.jobs.length; i++) {
                  var work = model.work.jobs[i];
                  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer);
                  var formattedTitle = HTMLworkTitle.replace("%data%", work.title);
                  var formattedEmployerTitle = formattedEmployer + formattedTitle;

                  var formattedDates = HTMLworkDates.replace("%data%", work.time);
                  var formattedLocation = HTMLworkLocation.replace("%data%", work.city);
                  var formattedDescription = HTMLworkDescription.replace("%data%", work.description);
                  var formattedInfos = formattedDates + formattedLocation + formattedDescription;

                  var formattedJob = formattedEmployerTitle + formattedInfos;
                  formattedAllJobs.push(formattedJob);
            }
            view.displayWork(formattedAllJobs);
      }
}

$("#mapDiv").append(googleMap);

octopus.getProjects();
octopus.getBio();
octopus.getEducation();
octopus.getWork();
