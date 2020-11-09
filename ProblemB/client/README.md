### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Princpal data of the Client
 The endpoints and definition itś on the server Readme
  The main idea is to generate a dynamic, powerful and auto-scalable FrontEnd that allows to be managed dynamically . For now most of the data is hardcode
- The project is structured in utilities, component services and views, mainly
- The idea of ​​the project is that it finds a login that by the type of profile is displayed or not functions (example for the admin to create a user)
- The calendars would be dynamically created with a call to the api that allows to expand or simplify (a value that sent the values ​​of the calendar schedule and another value that allows identifying the number of rows that have to be displayed, or rather the number of appointments you can have per hour)
- The calendars menu would be one separate from the other, although my idea would be to be able to create the menu together with the calendars through a dynamic backend service in /calenders, which would return which calendars are active and the schedules together with the amount appointments per hour.
- Within the calendars we will search with the service / calenders /: name, the values ​​that have the calendar to arm itself dynamically
- Within the calendar view, at the top it will be possible to search for the day with a datapicker that will search the service / calenders /: name /: date and return the values ​​to generate the existing records .By default the date of the day will be used  
- In each click on the calendar, a modal will appear that if there is a value in it, it will allow updating or deleting the appointment and if it is empty it will allow creating one.
- Edit User data
- Changed language
# For the admin :
- For the administrator, it will allow to do most of the actions in the calendar, but it will allow the user to send to be able to modify and change the data
- You have the ability to edit and create user (for now only creating works)
- See all users and their data, together with their appointments
- Add new Calendars and edit 
# Practices that would improve the API (they will not be used for reasons of time)
- TypeScript
- UnitTest and Integration Test
- Lint
- Hide .env, for development reasons since the product will not be functional, it is left as an example
- Redux
- Validations
- Error handler
- Error API Handler
- Spiner 
- Pagination on the tables
- I would re-assemble the front code to make it much more readable and performant, it was done quickly
# How to run it? 
- npm install (to install the modules)
- npm run start  / to start the API whit nodemon 