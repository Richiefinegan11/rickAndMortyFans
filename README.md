# The Rick & Morty Fan Club
## Welcome to the fan page, I hope you enjoy your time here.
[![Rick & Morty Image](/assets/images/rickmorty.jpg)](https://richiefinegan11.github.io/rickAndMortyFans/)

## Table of content
* [Overview](#Overview)
* [UX](#UX)
* [Wireframes](#Wireframes)
* [Features](#Features)
* [Technologies Used](#Technologies-Used)
* [Testing](#Testing)
* [Deployment](#Deployment)
* [Credits](#Credits)
## Overview

This is a mobile-first site that is designed for Rick and Morty fans to enjoy! Rick and Morty have gained a lot of die-hard fans in the last few years and this website will be a treat for any of those fans.

The main page has a background image of Rick and Morty gazing up at the universe with a befuddled look on their faces. It also contains a brief introduction with a start button for a quiz, which appears on the main page. Mentioned in the introduction, is the club page where fans can see where meetups take place and also sign up to the fan club using a form below the map.

The goals of this site are:
* Provide a fun site for Rick & Morty fans to visit
* Build brand awareness
* Build up a database by getting users to sign up to the fan page
* Nice UX to keep the users interested

The user's goals are:
* Take part in a fun quiz on Rick & Morty to test their Knowledge
* Finding out where the fan club meet-ups are taking place
* Signing up to the fan club

## UX
This website has the potential to reach a large market, both young and old Rick & Morty fans. It's both simple and aesthetically pleasing, as well as easy to navigate around. The main page has a quiz which is very straight forward to use and indicates if they choose a correct or incorrect answer. They can also navigate to the club page where they can use a map provided by a Google API to show where the fans meet-up and also sign up for the fan club using a form and emailJS. Once the form is completed, the user will receive an alert to confirm whether the form has been filled out correctly or not.

### Ideal Users
* English Speaking
* Rick and Morty Fans
* Quiz lovers
* Social People

### User Stories
* As a user who enjoys Rick and Morty, I want to test my knowledge at a Rick and Morty quiz, I can attempt the quiz on the main page
* As a user who enjoys social meet-ups, I want to meet new people, I can find out where the fans meet up on the club page
* As a user who loves Rick and Morty, I want to be part of a fan club, I can sign up to the fan club on the club page.
* As the owner of the site, who also loves Rick and Morty, I can gain club members and eventually sell merchandise and organise events for the club

## Wireframes 
* Home
  * [Desktop Landing Page](/assets/images/Rick%20&%20Morty%20Landing%20page.png)
  * [Tablet Landing Page](assets/images/Rick%20&%20Morty%20Landing%20page%20(tablet).png)
  * [Mobile Landing Page](/assets/images/Rick%20&%20Morty%20Landing%20page%20(Mobile).png)
  * [Desktop Quiz](/assets/images/Rick%20&%20Morty%20Quiz%20page.png)
  * [Tablet Quiz](/assets/images/Rick%20&%20Morty%20Quiz%20(tablet)%20.png)
  * [Mobile Quiz](/assets/images/Rick%20&%20Morty%20Quiz%20(mobile).png)
* Club Page
  * [Desktop](assets/images/Join%20Now.png)
  * [Tablet](assets/images/Join%20Now%20(Tablet).png)
  * [Mobile](assets/images/Join%20Now%20(mobile).png)

## Features
### Existing Features
Each page has a responsive navigation bar with the name of the site (top left) as a clickable home button. When viewed on a mobile site the navbar presents a clickable burger icon that drops down the list of pages, which can then be clicked for simple navigation. Each page also has a colorful background with nice contrasting fonts that is continuous across the two pages. The purpose of the background image is to not only add humor but to show the characters looking confused when the quiz questions appear.

### Home    
Under the navbar, the heading appears in the form of a welcoming message to the user. Under the heading, the introduction begins and is designed to resemble the Star Wars opening crawl, with an attempt at humor. The introduction is short and sweet, it lets the user know there is a quiz available on the page and also has a clickable prompt to let the user know about the club page. 

At the bottom of the introduction, there is a button labeled 'Start Quiz', when clicked, the introduction disappears and the quiz questions appear one by one with four clickable multiple-choice options with a yellow background. Once an option is picked, the 3 incorrect options turn red and the correct option turns green, then a clickable next button appears for the user to go to the next question. This repeats through 10 questions and then the quiz is complete. At the end of the quiz, the user will receive a score accompanied by a GIF reaction to the score. Under this, there is an option to re-attempt the quiz or to quit back to the main page using buttons and hyperlinks.

### Club Page
Under the navbar on the club page, there is a map showing the locations, where the fan club meets all over the country. Under the map, there is a button with the name of each city where the meet-ups take place. When clicked, these buttons will zoom in on the city and show cycling routes all around that city. Directly under this, there is a form for the user to fill out if they are interested in joining the club. Once filled out correctly, the user will then receive an email to the address they have given, indicating if they have been accepted or not.

### Features left to implement
* Store - Once there is a sufficient amount of fans, I will then implement a merchandise page. The fans can then purchase merchandise from the show upon visiting the website.
* Blog - Once the site gets some more interest and traffic, I will add a blog page to the site so fans can then interact with each other online too.

## Technologies Used
* [Visual Studio Code](https://code.visualstudio.com/)
   * The developer used visual studio code as their IDE while building the website
* [BootstrapCDN](https://getbootstrap.com/)
  * The project used Bootstrap4 to simplify the layout of the website and make it easily responsive
* [Google Fonts](https://fonts.google.com/)
  * This project used google fonts to style the website fonts
* [Popper.js](https://popper.js.org/)
  * This project used Popper.js reference Javascript needed for the responsive navbar
* [jQuery](https://jquery.com/)
  * The project uses jQuery to reference Javascript needed for the responsive navbar
* [EmailJS](https://www.emailjs.com/)
  * The project uses emailJS for the user to join the club and the owner to receive the email
* [Google Maps API](https://developers.google.com/maps/documentation)
  * The project uses the google maps API to show where the meet-up spots are

## Testing
Testing can be accessed [here](TESTING.md)

## Deployment
This project was developed using Visual Studio Code, committed to git, and pushed to Github.

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into GitHub.
From the list of repositories on the left-hand side of the screen, select [Richiefinegan11/stoic_in_action](https://github.com/Richiefinegan11/rickAndMortyFans).
2. From the menu items near the top of the page, select Settings.
3. Scroll down the page to the GitHub Pages section.
4. Under Source, in the Github Pages section, click the drop-down menu labeled None and select Master Branch.
5. On selecting Master Branch the page is automatically refreshed, the website is now deployed.
6. Scroll back down to the GitHub Pages section where the link to the deployed website will be, at the top of the section.

### How to run the code locally

To clone this project from GitHub:

1. Click on the repository [Richiefinegan11/stoic_in_action](https://github.com/Richiefinegan11/rickAndMortyFans).
2. To the right of the page, click the "Clone or download button.
3. When the Clone with HTTPs section shows, copy the URL of the repository.
4. In your local IDE open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone - then paste the URL copied for as advised in step 3.

## Credits 

### Code 

* CSS
  * Stack Overflow was very helpful in assisting me with questions I needed to be answered to create the style sheet.

* Main page HTML -
  * Some of the HTML5 was copied from BootstrapCDN and modified for layout and responsiveness.

* Main page JS -
  * The javascript used for the quiz was influenced by:
    * [Sitepoint](https://www.sitepoint.com/simple-javascript-quiz/)
    * [VerkkoNet](https://www.youtube.com/channel/UCErON4Z0YyiVHKNtx4BvLfg)
    * [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)
* Club Page JS -
  * The Google maps was achieved by using [Google Maps API](https://developers.google.com/maps/documentation)
  * The form on this page was achieved by using [EmailJS](https://www.emailjs.com/) and implemented with the help of the Code Institue course
  

### Content 
  * The content for this site was influenced by the TV show "Rick and Morty"
  * Some Questions for the quiz were obtained from [thequiz.com](https://www.thequiz.com/can-you-pass-the-hardest-rick-and-morty-quiz-on-the-internet/)

### Media 
  * The main image used in the background was taken from [HD Wallpaper](https://www.hdwallpaper.nu/rick-and-morty-wallpapers/)

### Acknowledgements

Jonathan Munz (Code Institute Mentor) - For his advice, helpful feedback, and reassurance towards the end of this project, as always.

The Code Institute Slack Community - which was so helpful, especially for this project. Viewing other student's projects helped me a lot with my own.

My friends and family, especially Aaron Mcdonnell & Ian P Brady for their very helpful feedback for this site.

### Disclaimer
The content of this Website is for educational purposes only



