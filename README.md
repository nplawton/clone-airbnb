# Clone - Airbnb

## Description
> Clone-Airbnb is a Front-End Capstone project developed by the Girl Scout Rangers from MCSP-19. The Clone-Airbnb is a full-stack Airbnb product page replica built in a week with remote development team of three. 

![Fantasybnb](https://live.staticflickr.com/65535/52851458096_e15ea93fa0_c.jpg)

## Table of Contents
- [Clone - Airbnb](#clone---airbnb)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Instalation](#instalation)
    - [Server Side](#server-side)
    - [Client Side](#client-side)
  - [Usage](#usage)
  - [ScreenShot](#screenshot)
  - [Contributors](#contributors)
  - [My Contributions](#my-contributions)
  - [Tech](#tech)
  - [License](#license)

## Instalation

### Server Side
 - Program is using a postrges database the user must know their postgreSQL username and password.
 - Run npm install to insert of needed dependencies 
 - In the server.js file switch the username and password to the user
 - Enter in a database name in the dbName variable. The database will be created in postgress
 - In the terminal type nodemon server.js
 - Open a new terminal window and create the new database table 
   - Command to enter postgres through VS Code sudo -u postgres psql
   - Type in CREATE DATBASE &#10096;database name&#10097;
   - Close out of the postgres prompt
 - Once the database is created type node &#10096;database name&#10097; -f migration.js
 - This will seed the database and seed file information

### Client Side
- Open a third terminal window
- Run npm install to insert of needed dependencies
- Run npm start to start the web application

## Usage
> This project was for education purposes to teach a remote group of students how to use the Agile methodology, stregthen their React and DEVOP skills, and learn to use Git Flow, while building a replica of a website. 

## ScreenShot
![Sitelook](https://live.staticflickr.com/65535/52850874047_b1f9d78f6f_w.jpg)

## Contributors
- Nicholas Lawton
  - https://github.com/nplawton
- Steven Dean
  - https://github.com/EZSteezy
- Javier Torres
  - https://github.com/jtorres95

## My Contributions
> As this was a group project, we were each assigned certain components to build. I was charged with building the functionality of the search bar, the map functionality, the language and currency functionality, along with other components and modals throughout the project. I served a scrum master for the project and was responsible for all merge requests.

![searchbar1](https://live.staticflickr.com/65535/52850749219_c31c3b952a.jpg)

![searchbar2](https://live.staticflickr.com/65535/52850561161_e6fccf3ede_w.jpg)

![map](https://live.staticflickr.com/65535/52849989127_a6c5d8aabd_b.jpg)

## Tech
- Front End: React, Leaflet, React-Calendar
- Backend: Express.js
- Database: Postgresql
- Tools: GitLabs, GitHub, Thunder Client, VS Code

## License
> The license used for this project is MIT.