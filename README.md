# MERN-book-engine
21. MERN Challenge: Book Search Engine


# Table of Contents
1. [Links](#links)
1. [Usage](#usage)
1. [Tech used](#tech-used)
1. [Assignment Details](#assignment-details)
    1. [User Story](#user-story)
    1. [Acceptance Criteria](#acceptance-criteria)
1. [Credits](#credits)

## Links
The URL of the GitHub repository: https://github.com/azuryte5/MERN-book-engine

The link to the heroku: https://mern-engine-book.herokuapp.com/

-----
## Usage
Logged in users can set up accounts and save book items to be viewed later for either purchase or to check out at the local library


Playground works with login, adding users and adding/removing books
![Playground](https://user-images.githubusercontent.com/85147307/150715110-b5234832-842f-416c-9e04-adcf405f5aea.png)

Login and Add user works, local storage used for storing book ids and token.
![searchbooks](https://user-images.githubusercontent.com/85147307/150715342-ff481366-b01c-477e-aa62-7a238b7894c5.png)

Presently, working on an unknown issue. Many hours exploring and looking up docs to why this error is happening. Might be related to cache. Query_Me was not finding working query from backend.
![Savedbooks](https://user-images.githubusercontent.com/85147307/150715516-c26a40e9-6573-4a76-88c7-b3c5ff3396fb.png)
-----
## Tech Used 
- Mongo DB
- Express js
- React
- Node js
- Apollo 
- GraphQL
- Heroku

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria
```md
GIVEN a book search engine
WHEN I load the search engine
[☑️] THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
[☑️ ] THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
[☑️] THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
[☑️] THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
[☑️ ] THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
[☑️] THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
[☑️] THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
[☑️] THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
[☑️] THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
[☑️] THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
[☑️] THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
[ ] THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
[  ] THEN that book is deleted from my saved books list
WHEN I click on the Logout button
[☑️ ] THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

----
## Credits
Made by Andrew Lefebvre 💰

-----
