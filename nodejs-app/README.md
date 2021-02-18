# nodejs-app

Auth:
POST /login {password: String, email: String}

User: 
POST /users {firstname: String, lastname: String, password: String, email: String } -save user

GET /users - get all users

GET /users/:id - get user by id