/*

	RESUME

*/

module.exports.Resume = {

	// Basics
	position: "Front-end developer",
	location: "Montréal, Quebec, Canada",
	email:    "throwmail@vincentsmuda.com",
	github:	 "https://github.com/thefreshvince",
	website:  "http://www.vincentsmuda.com",

	// Education
	_education: [
		{
			school:  "Northern Alberta Institute of Technology",
			program: "Digital and interactive media design",
			period:  "2007 - 2009"
		}
	],

	// Employment
	_employment: [
		{
			company:  "Overhaul Media",
			position: "Developer",
			period:   "2010-2015",
			tasks:[
				"Worked closely with clients",
				"Collaborated with team",
				"Integrated designs"
			]
		},
		{
			company:  "Designshopp",
			position: "Developer",
			period:   "2016-2017",
			tasks:[
				"Built a plethora of websites",
				"Built tools to help increase productivity",
				"Introduced some programming best practices"
			]
		}
	],

	// Skills
	_skills: {
		development: [
			"JS", "Webpack", "HTML", "CSS", "Sass", "PHP",
			"GIT", "Gulp", "Shopify", "Laravel", "WordPress"
		],
		design: [
			"Photoshop", "Illustrator", "AfterEffects"
		],
	},

	// Projects
	_projects: [
		{
			name: "Exterminator",
			description: "A QA script that saves everybody time.",
			url: "https://github.com/thefreshvince/TheExterminator"
		},
		{
			name: "Meal",
			description: "A flexible scaffolding tool built with node.",
			url: "https://github.com/thefreshvince/meal"
		},
		{
			name: "Extractor",
			description: "A script that extracts dist files of production node modules.",
			url: "https://github.com/thefreshvince/package-extractor"
		},
		{
			name: "Personal Site",
			description: "As I\'m not allowed to show sites that I have worked on, please use my publically published personal site to review my development integrity.",
			url: "https://github.com/thefreshvince/vincentsmuda.com"
		}
	]

};
