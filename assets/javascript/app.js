
var = []

      function renderButtons() {

  
        $("#buttons-view").empty();

        for (var i = 0; i < movies.length; i++) {

          var a = $("<button>");  
          a.addClass("movie");  
          a.attr("data-name", movies[i]);
          a.text(movies[i]);

          $("#buttons-view").append(a);
        }
      }

      $("#add-movie").on("click", function(event) {
        event.preventDefault();

        var movie = $("#movie-input").val().trim();

        movies.push(movie);


        renderButtons();

        
      });

      $(document).on("click", ".movie", alertMovieName);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();