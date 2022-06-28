# Node User API
A simple user management API written using javascript.

## Structure
- Stack: Nodejs and expressjs
- Database: MongoDB (Atlas)
- Other tools:
	- `nodemon` for dev server
	- `morgan` for logging
	- `helmet` to set security headers
	- `dotenv` to manage environment variables
	- `cors` to set cross site headers

## How to setup
- Make sure to have nodejs and git installed
- Clone the repo using `git clone https://github.com/ujjwal-kr/node-user-api`
- `cd` into the project folder and run `npm i` to install the dependencies
- Rename the `.env.example file to .env` and input your mongodb URI
- Run `npm run dev` to start the development server
- Run `npm run test` to run all the tests

## Endpoints
```
GET 	/users 		[Gets all the users]
GET 	/users/id 	[Gets a single user with the specified id]
POST 	/users 		[Adds a new user] { name: string, email: string, password: string }
PATCH 	/users 		[Updates existing user with the specified id] { name: string, email: string, password: string } // data can be partial
DELETE 	users/id    [Deletes the user with the specified id]
```