// ARRAY FOR RANDOMIZED THEMES
var themes = ["80s", "70s", "Star Wars", "Greek", "Sports", "Western", "Princess", "Beach", "Luau", "Ninja", "Pirate", "Movie", "Carnival", "Fiesta", "Tie Dye", "Patriotic", "Cactus", "Tiny Hat", "Vampire", "Mustache", "Disney", "Harry Potter", "Mardi Gras", "Ugly Sweater", "Spooky"]
var userInput;

// ON CLICK FUNCTION FOR SEARCH BUTTON
$("#search-button").on("click", function(event){
  event.preventDefault();
  userInput = $("#search-input").val().trim();
  if ($("#search-input").val().length != 0){
    console.log(userInput);
    $("#search-input").val("");
    getAPIresults.music();
  }
});


var getAPIresults = {
  supplies: function(){
    $("#supplies-results").html('');
  },
  recipes: function(){
    $("#recipes-results").html('');
  },
  music: function(){
    $("#music-results").html('');
    var queryURL = "https://api.cognitive.microsoft.com/bing/v5.0/videos/search?q=" + userInput + "+music" + "&mkt=en-us"
    $.ajax({
      url: queryURL,
      beforeSend: function(xhrObj) {
        // Request headers
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "416d8f635b1c4ecaaab8233c448a732b"); //replace value with your own key
      },
      type: "GET",
      // Request body
      //data: "{body}",
    })
    .done(function(response) {
      console.log(response);
      displayResults(response);
    });
  },
  costumes: function(){
    $("#costumes-results").html('');
  },
  games: function(){
    $("#games-results").html('');
  },

};

function displayResults(response){
  for (var i = 0; i < response.value.length; i++) {
    $("#music-results").append("<div class='card'>" + "<img src='" + response.value[i].motionThumbnailUrl + "' class='thumbnail-video'>" + "<a href='" + response.value[i].contentUrl + "' target='_blank'>" + response.value[i].name + "</a>" + "<div class='favorite'></div>" + "</div>");
  }
}
