/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
      "name" : "Pia Droop",
      "role" : "We Developer",
      "contactInfo" : {
            "email" : "pia.droop@gmail.com",
            "address" : "Richterstraße 15",
            "city" : "Hamburg, Germany"
      },
      "pictureURL" : "images/nose-up.jpg",
      "welcomeMessage" : "Welcome! This is my resume. It tells you everything you have always wanted to know about me.",
      "skills" : [
            "design",
            "web development",
            "tea drinking"
            ]
};

var work = {
      "position" : "intern",
      "employer" : "Restaurant Rexrodt",
      "years" : 0.058,
      "city" : "Hamburg"
};

var education = {
      "schools" : [
            {
                  "name" : "Wilhelm Gymnasium",
                  "major" : ["Physics", "Geography"],
                  "minor" : ["English", "Mathematics"],
                  "city" : "Hamburg",
                  "graduationYears" : 8
            }
      ],
      "online courses" : [
            {
                  "creator" : "Harvard",
                  "subject" : "Computer Science",
                  "title" : "CS50 Introduction to Computer Science",
                  "years" : 0.75,
                  "provider" : "edx",
                  "fee" : 80,
                  "certificate" : "verified"
            },
            {
                  "creator" : "Microsoft",
                  "subject" : "Computer Science",
                  "title" : "Programming with C#",
                  "years" : 0.115,
                  "provider" : "edx",
                  "fee" : 0,
                  "certificate" : "honor code"
            },
            {
                  "creator" : ["at&t", "Google", "Hack Reactor", "GitHub"],
                  "subject" : "Computer Science",
                  "title" : "Front-End Web Developer Nanodegree",
                  "years" : 0,
                  "provider" : "Udacity",
                  "fee" : 0,
                  "certificate" : "in progress"
            }
      ]
};

var projects = {
      "in course projects" : [
            {
                  "Course" : "CS50 Introduction to Computer Science",
                  "type" : "website",
                  "description" : "A website to connect students and tutors",
                  "years" : 0.125
            }
      ]
};

if(bio.skills.length != 0) {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
            var newSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(newSkill);
      }
}
