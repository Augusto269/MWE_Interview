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

# Practices that would improve the API (they will not be used for reasons of time)
- TypeScript
- UnitTest and Integration Test
- Migrations
- Lint
- Hide .env, for development reasons since the product will not be functional, it is left as an example
- Reddis server to cache endpoints have a lot of delay

# How to run it? 
- npm install (to install the modules)
- npm run start  / to start the API whit nodemon 