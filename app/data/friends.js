//questions and options json
	var questionObj = {"questions": [
	  {"id":1,
	  "question": "Your mind is always buzzing with unexplored ideas and plans." ,
	  "answer": ""},
	  {"id":2,
	  "question": "Generally speaking, you rely more on your experience than your imagination." ,
	  "answer": ""},
	  {"id":3,
	  "question": "You find it easy to stay relaxed and focused even when there is some pressure." ,
	  "answer": ""},
	  {"id":4,
	  "question": "You rarely do something just out of sheer curiosity." ,
	  "answer": ""},
	  {"id":5,
	  "question": "People can rarely upset you." ,
	  "answer": ""},
	  {"id":6,
	  "question": "It is often difficult for you to relate to other people’s feelings." ,
	  "answer": ""},
	  {"id":7,
	  "question": "In a discussion, truth should be more important than people’s sensitivities." ,
	  "answer": ""},
	  {"id":8,
	  "question": "You think that everyone’s views should be respected regardless of whether they are supported by facts or not." ,
	  "answer": ""},
	  {"id":9,
	  "question": "You feel more energetic after spending time with a group of people." ,
	  "answer": ""},  
	  {"id":10,
	  "question": "You feel more energetic after spending time with a group of people." ,
	  "answer": ""}       
	],

	"options": [
	  {"value1": "1 (Strongly Disagree)",
	  "value2": "2" ,
	  "value3": "3" ,
	  "value4": "4" ,
	  "value5": "5 (Strongly Agree)"}
	]
};

$( document ).ready(function() {
    console.log( "document loaded" );
    var selectionHTML1 = '<select class="chosen-select"  name="question" id="q">'
    var selectionHTML2 = +'>';   
    var optionsHTML = '<option value=""></option>' +
           '<option value="1">1 (Strongly Disagree)</option>' +
           '<option value="2">2</option>' +
           '<option value="3">3</option>'+
           '<option value="4">4</option>' +
           '<option value="5">5 (Strongly Agree)</option>';
    var questionsHTML ="";
	var endHTML1 = '</select>'
	//iterate over the data and append a select option
	 $.each(questionObj.questions, function(key, val){
	 	questionsHTML += "<h3><strong>Question"+val.id + "</strong></h3>";
	 	questionsHTML += "<h4>"+ val.question + "</h4>";
	 	questionsHTML += selectionHTML1 + val.id + selectionHTML2;
	 	questionsHTML += optionsHTML;
	 	questionsHTML += endHTML1 
	 });
	 $("#questions").html(questionsHTML);
	 $(".chosen-select").chosen();
});