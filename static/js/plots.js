// Appends all the tags in the drop down menu
function init() {
    // Appends all the tags in the drop down menus - needs to be in the same init
    var selector2 = d3.select("#TESTINGDROP");
    var selector3 = d3.select("#TESTINGDROP_2");
    
    List_of_options = {
        1: "HELLO THIS IS A TEST",
        2: "ANOTHER TEST TO SEE IF THIS IS BETTER",
        3: "SADLY I NEED FIVE OF THESE LONG TITLES",
        4: "THESE TITLES WILL BE FOR THE GRAPHS",
        5: "AGE VS HEART DISEASE",
        6: "ANOTHER OPTION ADDED"
    };

    List_of_options_2 = {
        1: "HELLO THIS IS A TEST",
        2: "ANOTHER TEST TO SEE IF THIS IS BETTER",
        3: "SADLY I NEED OF THESE LONG TITLES",
        4: "THESE TITLES WILL BE FOR THE GRAPHS",
        5: "AGE VS HEART DISEASE",
        6: "ANOTHER OPTION ADDED"
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
list_src = [
    "https://public.tableau.com/views/Projectgraphs_16580380150120/BMIVSHD?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link",
    'https://public.tableau.com/views/Projectgraphs_16580380150120/SEXVSSTROKE?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
    'https://public.tableau.com/views/Projectgraphs_16580380150120/SEXVSHD?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
    'https://public.tableau.com/views/Projectgraphs_16580380150120/WORKVSHD?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
    'https://public.tableau.com/views/Projectgraphs_16580380150120/SMOKERVSHD?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link',
    'https://public.tableau.com/views/Projectgraphs_16580380150120/SMOKERVSHD?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link'
]

list_img = [
    "images/image.png",
    "images/image (1).png",
    "images/image (2).png",
    "images/image (3).png",
    "images/image (4).png",
    "images/image (5).png"
]

// list of explanations for each graphs
list_explanations = [
    'THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH ',
    'THIS THE SECOND EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH ',
    'THIS THE THIRD EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH ',
    'THIS THE FOURTH EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH ',
    'THIS THE FIFTH EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH BLAH THIS THE FIRST EXPLANATION SUPER LONG BLAH BLAH BLAH ',
    'Template for the sixth explanation - just made this different just in case'
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
            .attr("height", 750)


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
        .append("tableau-viz")
            .attr("id", "visualization_2")
            .attr("src", list_src[newSample-1]);
    
    

    // // Selecting the p tag with the correct id and removing it
    // var panel_test_2 = d3.select("#stroke_stats_p").remove();

    // // Selecting the parent DIV and adding a new p tag with the same id (to redo the function) and the correct text
    // var panel_test_2 = d3.select("#stroke_stats")
    // panel_test_2 
    //     .append("p")
    //         .attr("class", "u-text u-text-2")
    //         .attr("id", "stroke_stats_p")
    //         .text(list_explanations[newSample-1])
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