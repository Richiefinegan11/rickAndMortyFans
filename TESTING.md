### Testing carried out using validators

[W3C CSS validation](https://jigsaw.w3.org/css-validator/)
  * The developer used W3C CSS Validation for testing the code in the CSS stylesheet.
    *  *Error showed up on all media queries which were fixed and committed*
  
[W3C Markup Validation](https://validator.w3.org/)
  * The developer used W3C Markup Validation for testing the HTML code
    * *Error showed up on script tags which were fixed and committed*

[JSHint](https://jshint.com/)
* The developer used JSHint for testing the Javascript code
  * Some warnings showed, but this was due to the use of new JS
  

### Testing UX Stories

* As a user who enjoys Rick and Morty, I want to test my knowledge at a Rick and Morty quiz, I can attempt the quiz on the main page
  * The user can simply find the "Start Quiz" button on the main page and begin the quiz.
  * The quiz is easy to use and only requires clicking the desired option
* As a user who enjoys social meet-ups, I want to meet new people, I can find out where the fans meet up on the club page
  * The user can navigate to the club page and find a map of where the meet up happens and then contact via the signup form
* As a user who loves Rick and Morty, I want to be part of a fan club, I can sign up to the fan club on the club page.
  * The user can find a signup form on the club page, where they can contact the club admin and request to join
* As the owner of the site, who also loves Rick and Morty, I can gain club members and eventually sell merchandise and organise events for the club
  * Once there is traffic on the site and users apply to join the club, the owner will be able to create a database of club members and customers for merchandise

### Manual Testing of all elements and functionality on every page

#### Home Page

##### Navigation bar:
  1. Go to the home page from the desktop.
  2. Change the screen size to both tablet and mobile phone to confirm that the navigation bar is responsive and switches to the burger icon dropdown menu and it works correctly.
  3. Check that the navigation bar links work accordingly on each page, so navigation around the site works properly

##### Introduction section:
  1. Check that the introduction section is responsive on all devices
  2. Check that the club page link is visible and works properly
  3. Check that the 'Start Quiz' button is working ok and brings up the quiz questions and options

##### Quiz Section
  1. Make sure that when an option is picked, the 3 incorrect buttons turn red, the correct one turns green and the next button appears to bring the user to the next question
  2. Check that when the next button brings a fresh set of questions and the next button disappears until the next option is clicked.
  3. This test is carried out throughout the whole quiz and works fine
  4. Change the size of the page to make sure the quiz section is responsive

##### Score Section
  1. Check that the score appears correctly when the quiz is complete
  2. Make sure that the appropriate video/gif to match the score appears on the score page
  3. Make sure that the 'try again' button works and brings the user back to the beginning of the quiz
  4. Check the quiz again and see if the shuffle works correctly so that the order of the questions is changed
  5. Check that once finished again, that the quit link works ok and bring the user back to the landing page
  6. Change the size of the page to make sure the score section is responsive

##### Join the club Page
1.  Check that Map appears with markers on the club page to show the various locations
2.  Check the buttons under the map are functioning correctly and zoom in on the named location, showing the cycling tracks
3.  Check that join the club form works correctly and the alert appears to let the user know if it has worked or not
4.  Change the size of the page to make sure the club page is responsive

## Further Testing

* I asked my friends and family for feedback on their devices. *Color changed on the main page due to better visibility*
* I asked for feedback in the peer-code-review channel in slack. *Did not get a response, so I hope no news, is good news*
* I ran my text through Google Docs to spell check and used the "Grammarly feature" to check the grammar. *There were quite a few typos which were corrected*
