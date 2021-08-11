# Express 
- web framework for Node.js

## 1. Installing
- npm init
- npm install express --save
- nodemon install
    * npm install --save-dev nodemon
    *  "scripts": {
                    "start": "node index",
                    "dev": "nodemon index"
                  }

## 2. http Methords
1. get 
2. post
3. put
4. delete

## 3. Routing
- Use the express.Router class to create modular

## 4. Middleware 
- Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.
- Middleware functions are always invoked in the order in which they are added.
- It can make changes to the request and the response objects.
* Application-level middleware
* Router-level middleware
* Error-handling middleware
* Built-in middleware
* Third-party middleware