// Appends all the tags in the drop down menu
function init() {
    // Appends all the tags in the drop down menus - needs to be in the same init
    var selector2 = d3.select("#TESTINGDROP");
    var selector3 = d3.select("#TESTINGDROP_2");
    
    List_of_options = {
        1: "STROKE VS GENDER",
        2: "STROKE VS MARRIED STATUS",
        3: "STROKE VS HYPERTENSION",
        4: "STROKE VS WORK TYPE",
        5: "STROKE VS SMOKING STATUS",
        6: "AGE VS HEART DISEASE (STROKE DATASET)"
    };

    List_of_options_2 = {
        1: "HEART DISEASE VS STROKE",
        2: "HEART DISEASE VS GENERAL HEALTH",
        3: "HEART DISEASE VS DIFFICULTY WALKING",
        4: "HEART DISEASE VS GENDER",
        5: "HEART DISEASE VS SMOKING",
        6: "HEART DISEASE VS ALCOHOL DRINKING",
        7: "AGE VS HEART DISEASE (HEART DISEASE DATASET)"
    };

    
    Object.values(List_of_options).forEach((items) => {
    selector2
        .append("option") // Appends an option tag to the select tag (or the drop down menu) - basically adding a space for entry
        .text(items) // Within the option tag it just created - sets the text/title to the value of the iterated entry (in text form)
        //.property("value", sample); // Within the same option tag - also sets the value of that option tag to the value of the iterated entry
    });

    Object.values(List_of_options_2).forEach((items) => {
        selector3
            .append("option") // Appends an option tag to the select tag (or the drop down menu) - basically adding a space for entry
            .text(items) // Within the option tag it just created - sets the text/title to the value of the iterated entry (in text form)
            //.property("value", sample); // Within the same option tag - also sets the value of that option tag to the value of the iterated entry
    });
}

init();




// List of urls to the graphs
list_img_2 = [
    "images/HD_stroke.png",
    "images/HD_genhealth.png",
    "images/HD_walking.png",
    "images/HD_sex.png",
    "images/HD_smoking.png",
    "images/HD_alc.png",
    "images/HD_age_hd.png"
]

list_img = [
    "images/stroke_gender.png",
    "images/stroke_married.png",
    "images/stroke_hypertension.png",
    "images/stroke_worktype.png",
    "images/stroke_smoker.png",
    "images/stroke_age_HD.png"
]

// list of explanations for each graphs
list_explanations = [
    'This graph shows us that proportionally, males have a higher chance of having strokes than females. Although the individual graphs might make us think females have strokes at a higher ratio, the truth is that we have more female subjects than males in the dataset.',
    'Proportionally, people who are married seem to have slightly more chance of having strokes according to this graph. The graph does looks a little imbalanced since the amount of people who have not had strokes are much more than those who have had them.',
    'Proportionally, it looks like those who have hypertension has a higher chance of having strokes',
    'This graph shows us that people working in private jobs have a higher propensity of having strokes',
    'In this graph, we can see that proportionally.........',
    'We can see as people get older, their chances of having a stroke increases according to this graph'
]

// list of explanations for each graphs
list_explanations_2 = [
    'From the graph we can see that proportionally, people who have had a stroke has more of a chance of developing heart diseases',
    'From this graph we can tell that people who have excellent general health condition as less likely to develop heart diseases. However, a large number of people who have good health report having heart disease and it is spread very uniformly for all other categories',
    'Those who have difficulty walking also show a higher chance of having heart disease, shown by the graph',
    'According to this graph, males have a higher chance to develop heart diseases than females',
    'This graphs shows us that smoking does contribute to higer chances of developing heart disease',
    'It seems that those who drink alcohol have a less chance to develop heart diseases. This may be because alcohol thins the blood and helps with blood circulation. However, it damages other organs severely',
    'We can see clearly from this graph that with age the chances of heart disease increase'
]

// function to change the graphs of the 1st dropdown
function optionChanged2(option) {
    
    // Grabbing the correct key/index the option was chosen in
    newSample = 0;
    Object.keys(List_of_options).map(function(value){
        if (List_of_options[value] == option){
            newSample = value
        }
    });

    // Selecting the tag with the correct id and removing it
    var panel_test = d3.select("#Whatever_you_want").remove();

    // Selecting the parent DIV and adding a new tableau-viz tag with the same id (to redo the function) and the correct src to the graph
    var panel_test = d3.select("#TESTING")
    panel_test 
        .append("img")
            .attr("id", "Whatever_you_want")
            .attr("src", list_img[newSample-1])
            .attr("width", 750)
            .attr("height", 600)


    // Selecting the p tag with the correct id and removing it
    var panel_test_2 = d3.select("#stroke_stats_p").remove();

    // Selecting the parent DIV and adding a new p tag with the same id (to redo the function) and the correct text
    var panel_test_2 = d3.select("#stroke_stats")
    panel_test_2 
        .append("p")
            .attr("class", "u-text u-text-2")
            .attr("id", "stroke_stats_p")
            .text(list_explanations[newSample-1])
}


// function to change the graphs of the 2nd dropdown
function optionChanged3(option) {
    
    // Grabbing the correct key/index the option was chosen in
    newSample = 0;
    Object.keys(List_of_options_2).map(function(value){
        if (List_of_options_2[value] == option){
            newSample = value
        }
    });

    // Selecting the tableau-viz tag with the correct id and removing it
    var panel_test = d3.select("#visualization_2").remove();

    // Selecting the parent DIV and adding a new tableau-viz tag with the same id (to redo the function) and the correct src to the graph
    var panel_test = d3.select("#Parent_div_2")
    panel_test 
        .append("img")
            .attr("id", "visualization_2")
            .attr("src", list_img_2[newSample-1])
            .attr("width", 750)
            .attr("height", 500)

    // Selecting the p tag with the correct id and removing it
    var panel_test_2 = d3.select("#HD_stats_p").remove();

    // Selecting the parent DIV and adding a new p tag with the same id (to redo the function) and the correct text
    var panel_test_2 = d3.select("#HD_stats")
    panel_test_2 
        .append("p")
            .attr("class", "u-text u-text-2")
            .attr("id", "HD_stats_p")
            .text(list_explanations_2[newSample-1])
}



var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});