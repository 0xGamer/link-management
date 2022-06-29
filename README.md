# Node User API
A simple user management API written using javascript. The client is written in react and is deployed to https://node-user-api.vercel.app

## Structure
- Stack: Backend: Nodejs and expressjs, Front End: Reactjs with vite
- Testing: jest and supertest
- Database: MongoDB (Atlas)
- Other tools:
	- `nodemon` for dev server
	- `morgan` for logging
	- `helmet` to set security headers
	- `dotenv` to manage environment variables
	- `cors` to set cross site headers
	- `prettier` to format code

The client resides in the `/client` folder


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
DELETE 	/users/id    	[Deletes user with the specified id]
```
