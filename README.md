# Game Realm

The deployed app can be found at https://nurd-game-realm.netlify.com/

This repo contains the front end code for this app.  It sends requests to a back end server in order to write to and read from the database.  The repo containing the back end code can be found at https://github.com/RyanEllingson/NURD-be

## Description

The Game Realm application is used to locate local or digital groups of people to play games ranging from tabletop RPGs to popular video games. Game Realm is an all in one Network of players from every type of game. Not only can you find a group to play games you already know you can also find groups from other games being played at lower level to try them out and maybe find a new favorite!

When the user first navigates to the app, they are directed to the login screen.  Here they can enter their email address and password if they already have an account, or go to the "Register" page to create a new account.  For testing purposes, a test account has been created (email: test@test.com, password: password).
![screenshot 1](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot1.JPG)
![screenshot 2](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot2.JPG)

Upon logging in, the user is directed to the "All Groups" page, which displays all the groups that currently exist in the database.  Each group card displays the name of the group, the location information, the group organizer, and a list of users who have joined the group.  Each group card also has a button to delete the group from the database, and a button to join the group.
![screenshot 3](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot3.JPG)

Groups can be filtered by what type of game on the "Search" page.  The user can select from either trading card game, board game, video game, or other.
![screenshot 4](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot4.JPG)

On the "Create Groups" page, the user enters the type of game (video, card, board, or other), the name of the group, the name of the game, and information about the location.  The minimum age and required gender fields are optional.  Then the user clicks the "Create Group" button to create the group.  It will then appear on the "All Groups" page.
![screenshot 5](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot5.JPG)
![screenshot 6](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot6.JPG)

Clicking the "Join" button on the new group adds the currently logged-in user's name to the "Current Members" list on that group.
![screenshot 7](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot7.JPG)

On the "My Profile" page, the user can see a card displaying their user name, email, and a list of all the groups they have joined.
![screenshot 8](https://github.com/RyanEllingson/nurd/blob/master/public/assets/images/screenshot8.JPG)

Technologies Used:
React, Material UI, Passport, Formik, jwt-decode, Mongoose, Paralax, testing - Mocha and Chai

## Installation

No installation required.

## Contributing

Aydy Burling, Ryan Ellingson, William Molhoek, Jesse Edwards

## Challenges

Communicating issues effectively remotely, compatability issues, focusing efforts on core features

## Road Map

Things to update:

Anyone can delete a group - make it so only able to delete if user was logged in as the creator

User still remains on a group list despite user deleting group from user list

Add ability to restrict who can join groups based on gender, age, etc.

Add ability to rate members - limit toxic environment

Screen resolution affects display (Paralax) - 4k, retina

## License

[MIT](https://choosealicense.com/licenses/mit/)
