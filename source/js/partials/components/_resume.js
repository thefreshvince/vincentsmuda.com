/*

	RESUME

*/

module.exports.Resume = {

	// Basics
	position: "Front-end web developer",
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
				"Built solutions for clients and internally",
			  "Created tools to help increase productivity",
			  "Introduced some programming methodologies"
			]
		}
	],

	// Skills
	_skills: {
		development: [
			"JS", "Webpack", "HTML", "SASS", "PHP",
			"GIT", "Gulp", "Shopify", "Laravel", "WordPress"
		],
		design: [
			"Photoshop", "Illustrator", "AfterEffects"
		],
		other: [
			"Organized for ease of maintainability",
		  "Mentoring that improves cowokers’ skills",
		  "Communication that gets things done",
		  "Componentization that makes tasks managable",
		  "QA to an annoyingly specific level"
		]
	},

	_personality: [
		"Encouraging", "Positive", "Energetic",
    "Quality Driven", "Mindful", "Focused",
    "Motivated", "Detetmined", "Creative"
	],

	// Projects
	_projects: [
		{
			name: "Exterminator",
			description: "A QA script that saves everybody time.",
			url: "https://github.com/thefreshvince/TheExterminator"
		},
		{
			name: "Meal",
			description: "A flexible scaffolding tool.",
			url: "https://github.com/thefreshvince/meal"
		},
		{
			name: "Extractor",
			description: "Extracts dists of production node modules.",
			url: "https://github.com/thefreshvince/package-extractor"
		}
	]

};
