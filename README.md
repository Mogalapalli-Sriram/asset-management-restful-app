# RESTful-APIs 


## Courtesy and Followed this video tutorial on Youtube
https://youtu.be/-MTSQjw5DrM


## About Code
The code is about using RESTful API's from scratch by which we can render the data from the server and add the data into the server by using the HTTP request verbs.


## Prerequisites

* code text editors (Atom or visual studio code)
* Express.js
* Node.js
* Hyper Terminal(CLI) or Robo3T(GUI)
* MongoDB
* Mongoose
* API clients(postman or insomnia)



## How to run the app

1. Install the npm's.
```npm
npm i express body-parser mongoose
```

2. Start the server.
```start
node app.js
```

3. You can access the app at http://localhost:3000

4. Download,Install MongoDB and Start the Mongo server (It is hosted on port 27017).


5. Use the API client [postman](https://www.postman.com/downloads/) to generate the HTTP request verbs.



## API'S I have used in my App?

I have made use of the all the request verbs of HTTP(API's) to perform the CRUD operations for the main route and specific route .The list of all API's I have used are shown below.

### Get All Tshirts
```curl
curl http://localhost:3000/tshirts
```

```get
{
    "success": "true",
    "data": [
        {
            "_id": "60325d572d94ce1d5c7d0e2f",
            "tshirt": "us-polo",
            "size": "medium",
            "__v": 0
        },
        {
            "_id": "6032875e100e2c1a7ccd0783",
            "tshirt": "buffalo",
            "size": "medium",
            "__v": 0
        }
    ]
}

```
### Create Tshirt

```curl
curl -X POST -H "Content-Type : application/json" -H "accept : application/json" -d '{"tshirt" : "wrangler", "size": "medium" }' http://localhost:3000/tshirts
```

```post
{
    "success": "true",
    "data": {
        "tshirt": "wrangler",
        "size": "medium"
    }
}
```

### Get Specific Tshirt

```curl
curl http://localhost:3000/tshirts/us-polo
```

```getspeicfic
{
    "success": "true",
    "data": {
        "_id": "60325d572d94ce1d5c7d0e2f",
        "tshirt": "us-polo",
        "size": "medium",
        "__v": 0
    }
}
```


### Update Entire Tshirt

```curl
curl -X PUT -H "Content-Type : application/json" -H "accept : application/json" -d '{"tshirt" : "killer", "size": "small" }' http://localhost:3000/tshirts/buffalo
```

```put
Successfully updated the entire document
```

### Update part of Tshirt Document

```curl
curl -X PATCH -H "Content-Type : application/json" -H "accept : application/json" -d '{"tshirt" : "peter england", "size": "large" }' http://localhost:3000/tshirts/us-polo
```

```patch
{
    "success": "true",
    "message": "updated the part of document"
}
```

### Remove Tshirt

```curl
curl -X DELETE http://localhost:3000/tshirts/wrangler
```

```delete
removed the item
```

## Accessing the API's

I have accessed the API's such as Get,Post,Put,Patch,Delete by using the express application and used route and callback function in all API function calls.



<!-- ## Inspiration

I got inspired to  create this application after having an access to one of the useful resource on the [youtube](https://youtu.be/-MTSQjw5DrM). 
 -->






