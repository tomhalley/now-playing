Hello! This project has been written in React, Redux, and Styled Components, and some elements of Material UI.

# Installation
```sh
mv .env.example .env
npm install
npm start
```
Open localhost:3000 in your browser
# Testing
```sh
mv .env.example .env
npm install
npm test
```
# Notes


If I had more time, I would have:
* Added more comprehensive tests, especially to the async action creators. 
The component tests are very simple.
* Fixed a small bug with the genres selector not highlighting in the dropdown that
an element has been selected.
* It's probably excessive that I handle loading and errors on the async action creators,
since we're not handing or using these values, but that's the pattern
I tend to follow with Redux.
