-----------------------------------------
# So You Want to Throw A Party

#### Project 1 - Group 2

-----------------------------------------

## About

#### Team Members

Cadie B.
Bryce S.
Arthur H.
Tiffany J.


#### Project Description

This Party App takes either the users input or a randomized input for a party theme and generates lists on costumes, supplies, recipies, music, costumes, and games for each search. This helps the user plan a theme-based party.
APIs Used: Pinterest API, Amazon API, BING Search
New Technologies Used: Zurb Foundation for the HTML/CSS Framework, New APIs


#### Projects

You must give a full effort on every group and individual project.

-----------------------------------------

## Overview of Tasks

- Think of name for web app (everyone think on this before Tuesday's class)
- Learn how to use each API (to be completed by Tuesday)
- Learn how to use Foundation (homework to be completed by each Person by Tuesday)
- Pseudo Code (to be completed ASAP)
- Create file structure on Repository (to be done early on Tuesday)
- HTML Structure built with Foundation Framework (to be done by end of Tuesday)
- Code out jQuery logic for receiving users input/randomized input and storing in a variable
- Code out jQuery/AJAX logic for each option of results in individual JS files (do not edit HTML file during this task if possible):
  - Supplies (Amazon API)
  - Recipes (Pinterest API)
  - Music (BING Video API?)
  - Costumes (Pinterest API)
  - Games (Pinterest API)
- Code out responses to appear in div under the buttons when the buttons are clicked
- Code out 'Start New Search' button functionality
- Run tests and make sure everything is functioning correctly
- Combine JS files into one file
- Finish the design of the web app

-----------------------------------------

## Pseudo code

Load: Start Screen Displayed with Searchable Field and 'Randomize' Button;

if (user enters keyword to search){
  user input is stored as a variable themeKeyword;
}

else (randomize button is clicked){
  a random string in the themes array is selected and stored in the themeKeyword variable;
}

Main Page Loads with search field and randomize button hidden and Supplies Button selected/clicked already {
  The themeKeyword + 'supplies' is used to generate results from the Amazon API under the 'Supplies' section;
  The results are displayed in the div under the buttons with: the name of the product, image of the product, short description, and price of the item. Top 20 are displayed.
}

if (the 'Recipes' button is clicked){
  The themeKeyword + 'recipes' is used to generate results from the Pinterest API under the 'Recipes' section;
  The results are displayed in the div under the buttons with: Pin Image, Pin Name, and when clicked it takes the user to the linked page in a new tab. Top 20 are displayed.
}

if (the 'Music' button is clicked){
  The themeKeyword + 'music' is used to generate results from the BING Video API under the 'Music' section;
  The results are displayed in the set div under the buttons with: Video Name, Video, and Video Description. When you click on the video it plays the video and music.
}

if (the 'Costumes' button is clicked){
  The themeKeyword + 'costumes' is used to generate results from the Pinterest API under the 'Costumes' section;
  The results are displayed in the div under the buttons with: Pin Image, Pin Name, and when clicked it takes the user to the linked page in a new tab. Top 20 are displayed.
}

if (the 'Games' button is clicked){
  The themeKeyword + 'games' is used to generate results from the Pinterest API under the 'games' section;
  The results are displayed in the div under the buttons with: Pin Image, Pin Name, and when clicked it takes the user to the linked page in a new tab. Top 20 are displayed.
}

if ('Start New Search' button is clicked){
  hides the main information div;
  shows the search field and the randomize button;
}
