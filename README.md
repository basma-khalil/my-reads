# MyReads Project

This is my final assessment project for Udacity's React Fundamentals course.

## Table of Contents

- [MyReads Project](#myreads-project)
  - [Table of Contents](#table-of-contents)
  - [Instructions](#instructions)
    - [Project Specification](#project-specification)
    - [Starter Code](#starter-code)
  - [Installation](#installation)
  - [Contents](#contents)
  - [Create React App](#create-react-app)
  - [Demo](#demo)

## Instructions

The project requires building a book tracking web app that allows to select and categorize books that have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that will be used to persist information while interacting with the application.

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

### Project Specification

You can review **project rubric** from [here](https://review.udacity.com/#!/rubrics/3624/view "Go to link").

### Starter Code
[https://github.com/udacity/reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter "Go to link")

## Installation

* First, you need to have [node.js](https://nodejs.org/en/download "Go to link") and npm installed on your local machine.

* **To get started:**

- Clone the repository or download the zip file and change directories.
- Install all project dependencies with run `npm install`
- Start the development server with run `npm start`
- The project is running on localhost: 3000
- To create a production build directory run `npm run build`

## Contents

```bash
├── README.md # The file that introduces the project.
├── yarn.lock # yarn package manager file.
├── package.json # npm package manager file, with all project dependencies.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # Main HTML file.
└── src
    ├── Components # Contains the main react components.
    │    ├── App.js # This is the root of the app.
    │    ├── Book.js # This is used to build the books of the app.
    │    ├── BookShelves.js # This is used to build the main home page of the app.
    │    ├── Search.js # This is used to build the search page of the app.
    │    └── Shelf.js # This is used to build the books shelves of the app.
    ├── css # Contains the main styles.
    │   ├── App.css # Styles for the app.
    │   └── index.css # Global styles.
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── utils
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    └── index.js # It is used for DOM rendering only.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Demo

For Demo of this template you can visit [bk-myreads.netlify.app](https://bk-myreads.netlify.app "Go to website")
