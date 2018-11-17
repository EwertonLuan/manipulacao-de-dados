# API with NodeJs, Mongodb and ReactJs 

### This project creates a website with a login page, signup, user information, data editing, password update, user delete and logout

we use [JSON Web Tokens](https://jwt.io/) to create a Token Signing / Verification and store it in the localStorage for persiste authorization between sessions.

To encrypt the password we use [bcrypt](https://bycryp.com/).


## Installation and Usage

Prerequisites Backend: 
* [Node.js](https://nodejs.org/en/)
* [Mongodb](https://www.mongodb.com/) 

Prerequisites Frontend: 
* [ReactJs](https://reactjs.org/)

Into the folders backend and frontend, run the comand:
```sh
$ npm install 
```
 Start the React server, in the folder frontend with command:
 ```sh
 $ npm start
 ```
Start the server API in the folder backend with command:
 ```sh
 $ npm run dev
 ```
Satart the Mongodb
 ```sh
 $  mongod --dbpath /data/db
 ```
This comando will runing the projetc with the babel and nodemon.

[Babel.js](https://babeljs.io/) is a JavaScript compiler. He can transform a code written with ES6 specifications into something that Node.js can fully understand.

![screenshot](frontend/public/babel.png)

You should configurate the variables in this file /config/index.js, inside the projects Backend and Front.

![screenshot](frontend/public/back_config.png)


![screenshot](frontend/public/front_config.png)

###These are the Routes API 

For testes API you can use [Postman](https://www.getpostman.com/), just put the Url(https://localhost:500/users) select the method(GET, POST...) and send it the resquested. 

`GET /users/verify`

This is the route that verifies  the token validate.  

```sh
router.get('/verify', verifyToken)
```
- requested: header 
```sh
Authorization

Bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV3ZXJ0b24yQGhvdC5jb20iLCJpZCI6IjViYjZjZjc1NjAyMGJiMWY3NWEzYmQxZiIsImlhdCI6MTUzODcxMjU1MywiZXhwIjoxNTM4NzE2MTUzfQ.L7Tbm3J5898GhCQx3b6bThDdrXSOJBCUmkvFDSBBVWc
```

`GET /users`

This is the route that show all uses.

```
sh router.get('/', findAll)
```
- requested: don't have

`GET /users/5bac1f4980701043b4bb0b80 `

This is the route that find one by id.  

```
sh router.get('/:id', :findOne)
```
- requested: id:(req.params)

`POST /users`

This is the route that create a new user.

```sh
router.post('/', create)
```
- requested: 
```sh
email:
first_name:
last_name:
personal_phone:
password: 
```

`DELETE /users/5bac1f4980701043b4bb0b80`

This is the route that delete a user by id. 

```
sh router.delete('/:id', remove)
```
- requested: id(req.params)

`PUT /users/5bac1f4980701043b4bb0b80`

This is the route that Update a user by id.

```sh
router.put('/:id', update)
```
- requested:
```sh
id:(req.params)
email:
first_name:
last_name:
personal_phone:
```
`PUT /users/5bac1f4980701043b4bb0b80/change`

This is the route that change  the password after confirm current password.

```sh
router.put('/:id/change', updatePassword)
```
- requested:
```sh
id:(req.params)
password:
```
`POST /users/auth`

This is the route that Autentication.

```sh
router.post('/auth', auth)
```
- requested: 
```sh
email:
password:
```
`POST /users/login`

This is the route that Login 

```sh
router.post('/login', findUser)
```
- requested: 
```sh
email:
password:
```
Model for input datas into the Database, we use [Joi](https://github.com/hapijs/joi) to validate the API Input
 ```sh
UserJoi = joi.object({
    email: joi.string().email().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    personal_phone: joi.string().regex(/\([0-9]{2}\)\s[0-9]{5}\-[0-9]{4}/).required(),
    password: joi.string().required()
 ```

Route React:

`/ <Login/>` Link to login page home page ("/") if don't be logged.
 
`/signup {NewUser}` Link to creat a new user after redirect to "Get User" page.

` /user <GetUSer/>` Show informations about the user and the buttons for Edit, Change password and Logout.

` /user/edit  <EditUser/>`  Can edite informations about the user and show the button Delete.

` /user/edit_password <EditPassword/>`  Change current password.



