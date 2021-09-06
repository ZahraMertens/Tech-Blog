# E-Commerce Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Contributor](https://img.shields.io/badge/Contributor-1-green.svg) ![Sql](https://img.shields.io/badge/Npm-MySql-red.svg) ![sequelize](https://img.shields.io/badge/Npm-sequelize-red.svg) ![express](https://img.shields.io/badge/Npm-expressJs-red.svg)


## General Information

* [GitHub repository of Tech Blog Full Stack Web Application](https://github.com/ZahraMertens/Tech-Blog.git)

* [Deployed Application in Heroku]()


## Table of Contents
1. [General Information](#general-information)
2. [Task Description](#task-description)
3. [Installation Instructions](#installation-instructions)
5. [Technologies Used](#technologies-used)
6. [User Story](#user-story)
7. [Actual Behaviour](#actual-behaviour)
8. [Mock-Up](#mock-up)
9. [Credits](#credits)


## Task Description

The Application "E-commerce-Backend" is the backend part powered by express.js and sequelize to interact with the retailers database. The task is made to understand the fundamental architecture of e-commerce platforms in order to become a full stack web developer. The application allows the user to perform different request on the database to get categories, products and its product tags as well as update, and delete data from the database. As the application represents only the backend of the retailers webpage we can use the code with Insomnia in order to perform the previously named methods.

## Installation Instructions

* 1️⃣ First the user must clone the [GitHub Repo](https://github.com/ZahraMertens/E-commerce-backend.git) on its computer.

* 2️⃣ Open the repository on your device with VS Code (or any other program)

* 3️⃣ Open the command line at the folder location OR the integrated terminal 

* 4️⃣ First, you MUST install the npm packages by running "npm install" in the terminal

* 5️⃣ You also have to install MySql and create an account in order to be able to interact with the database

   * You then need to login to mysql on the command line by running the 'mqsql -u root -p' command and run SOURCE schema.sql and SOURCE seeds.sql to initialize the database

* 6️⃣ In order to be able to interact with the database out of mysql, the user must install the npm package "sequelize" to build a connection between the database and the server

* 7️⃣ The user must also download Insomnia or postman to be able to perform the request without the frontend

* 8️⃣ To protect your personal data you need to create a ".env" file in the root of the repository, which includes your mysql password, the database name, and the user such as:  ![env-Demo](./Assets/Readme/env_demo.png)

* 9️⃣ When the database is initialized then the user must run "node seeds/index" to seed the database with some given data

* 🔟 The user must start the server in local host by runnding "npm start" and can then perform request in Insomnia

## Technologies Used

* JavaScript

* Node.JS

* Npm packages: Express, mysql2, sequelize & dotenv

## User Story

```

```

## Actual Behaviour

* 


## Mock-Up

🎥 The GIF shows the Login and signup page of the web application:

![DEMO](./ReadmeAssets/loginGif.gif)

🎥 The GIF shows comment a post functionality:

![DEMO](./ReadmeAssets/commentGif.gif)

🎥 The GIF shows update a post functionality:

![DEMO](./ReadmeAssets/updateGif.gif)

🎥 The GIF shows add a post functionality:

![DEMO](./ReadmeAssets/addpostGif.gif)

🎥 The GIF shows the delete a post functionality:

![DEMO](./ReadmeAssets/deleteGif.gif)



## Credits

* 



© 2021 Zahra Mertens, Tech Blog