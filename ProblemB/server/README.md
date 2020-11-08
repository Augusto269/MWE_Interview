# Princpal data of the API
  The main idea is to generate a dynamic, powerful and auto-scalable API that allows to be managed dynamically
- The API will be structured in entities, (the structure can be viewed in the "structure" file)
- A closed login will be performed (only the admin user will be able to do it)
- All endpoints will be documented in the apiDoc folder, in which the postman will also be found to facilitate use
- Jwt token will be used to handle the api
- Endpoints will be used to evaluate the profile (admin and user) to prevent erroneous profiles from accessing the functions
- The entry data will be validated to avoid the use of the services if the data is wrong
- Bcrypt is used to encrypt passwords
- Critical errors will be logged in a table to keep track of errors in production
- The api will have a language selector (English Spanish) and the errors and returns will make dynamic with the database (It could be done through a Json as well)
- The formController is intended to build lists dynamically, with which you can change values
- The times_appointment it is made to be able to extend and generate more calendars dynamically and to be able to extend the project to more uses

# Endpoints and explains
Due to time the endpoints and their operation are explained
- GET / user / gets the user's data
- PUT / user updates user data
- GET / forms /: key dynamically returns the data of the necessary form
- GET / calenders returns the list of calendars (JEDI STRESS MANAGEMENT, LIGHTSABER SKILLS, FIGHTING THE DARK SIDE) along with the schedules and the number of appointments by schedules
-GET calenders /: name, returns the dynamically armed calendar data
- GET calenders /: name /: date returns all the appointments that are from that day (by default the date of the day will be used in the frontEnd)
- POST calenders /: name /: date the schedule is sent and with that the record will be created in the table, the calendar values ​​will be validated first so as not to record more than the number of appointments per hour
- GET calenders /: name /: date /: uuid, will bring the specific appointment (a uuid is generated to avoid writing a random value and bringing an external appointment), the data related to it and the user
- PUT calenders /: name /: date /: uuid, the modification of the time will be sent, if it can be modified (it will seek to validate the date and time available with the base) it will also be validated if the appointment belongs to the user or in case of being an admin this validation will be eliminated
-DELETE calenders /: name /: date /: uuid the appointment will be logically deleted (delete true) to leave a record of it (for audit issues) this can be something that is deleted if not necessary, it is also validated if the quote belongs to user or if user is admin
- The corresponding notifications must be made each time a modification or a new record is made in the calendars

# Practices that would improve the API (they will not be used for reasons of time)
- TypeScript
- UnitTest and Integration Test
- Migrations
- Lint
- Hide .env, for development reasons since the product will not be functional, it is left as an example
- Reddis server to cache endpoints have a lot of delay
- Notifications and send emails

# How to run it? 
- npm install (to install the modules)
- npm run start  / to start the API whit nodemon 