

var movements = ['burpee', 'push up', 'stretch', 'squat', 'rope climb', 'clean and jerk', 'handstand walk'];


var currentGif;
var pausedGif;
var animatedGif;
var stillGif;


//creates buttons
function createButtons() {
    $('#fitButton').empty();
    for (var i = 0; i < movements.length; i++) {
        var fitnessBtn = $('<button>');
        fitnessBtn.text(movements[i]);
        fitnessBtn.addClass('fitnessBtn');
        fitnessBtn.attr({
            'data-name': movements[i]
        });
        $('#fitButton').append(fitnessBtn);
    }
  

    //displays gifs on click
    $('.fitnessBtn').on('click', function () {
        $('.display').empty();

        var movement = $(this).data('name');
        console.log(movement);
        //console.log(this);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movement + "&api_key=1apqXVsrQlquOoNnhYwcCGEeOjbuM2kK";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function (response) {
                var results = response.data;
                // console.log(response)
                $.each(results, function (index, value) {
                    // this produces the picture
                    animatedGif = value.images.original.url;
                    //console.log(animatedGif);
                    pausedGif = value.images.original_still.url;
                    var thisRating = value.rating;
                    //gives blank ratings 'unrated' text
                    if (thisRating == '') {
                        thisRating = 'unrated';
                    }
                    var rating = $('<h5>').html('Rated: ' + thisRating).addClass('ratingStyle');
                    stillGif = $('<img>').attr('data-animated', animatedGif).attr('data-paused', pausedGif).attr('src', pausedGif).addClass('playOnHover');
                    var fullGifDisplay = $('<button>').append(rating, stillGif);
                    $('.display').append(fullGifDisplay);
                });
            });
    });
}

createButtons();

