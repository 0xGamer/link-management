# Link manager
A simple user Link API written using javascript.

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
- Clone the repo using `git clone https://github.com/0xGamer/school-app`
- `cd` into the project folder and run `npm i` to install the dependencies
- Rename the `.env.example file to .env` and input your mongodb URI
- Run `npm run dev` to start the development server
- Run `npm run test` to run all the tests

## Endpoints
```
GET 	/links 		[Gets all the links]
GET 	/links/id 	[Gets a single link with the specified id]
POST 	/links 		[Adds a new user] { link: string, file: boolean, form: boolean }
PATCH 	/links 		[Updates existing link with the specified id] { link: string, file: boolean, form: boolean } // data can be partial
DELETE 	/links/id    	[Deletes link with the specified id]
```
