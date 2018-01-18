
// $(document).ready(function() {

// var series = ["Shameless", "Game Of Thrones", "The Office", "Stranger Things"];

// function alertMovieName() {
//     console.log(this);
//     console.log("*****");
//     // YOUR CODE GOES HERE!!!
//     console.log($(this));
//     console.log("*****");
//      alert($(this).text());
//   }


//       function renderButtons() {
//         $("#series-buttons").empty();

//         for (var i = 0; i < series.length; i++) {

//           var seriesButton = $("<button>");  
//           seriesButton.text(seriesAdd[i]);
//           seriesButton.addClass("seriesAdd");  
//           seriesButton.attr("data-name", seriesAdd[i]);
//           $("#series-buttons").append(seriesButton);
//           console.log(seriesButton);
//           console.log("********")

//           renderButtons();
//         }
//       }

//       $("#add-series").on("click", function(event) {
//         event.preventDefault();

//         var show = $("#series-input").val().trim();

//         $(series).push(seriesAdd);
//         renderButtons();

        
//       });


     
//         function submitButtonClicked() {
//             var userInput = $('#series-input').val();
        
//             if (userInput) {
//                 $('#series-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
//             }
//         }

//       });


    //   $(document).on("click", ".movie", alertMovieName);

    //   // Calling the renderButtons function to display the intial buttons
    //   renderButtons();


    var showTitle = ['The Office', 'Game of Thrones','The Walking Dead','DareDevil'];


//creates buttons
function createButtons(){
	$('#TVButtons').empty();
	for(var i = 0; i < showTitle.length; i++){
		var showBtn = $('<button>').text(showTitle[i]).addClass('showBtn').attr({'data-name': showTitle[i]});
		$('#TVButtons').append(showBtn);
	}

