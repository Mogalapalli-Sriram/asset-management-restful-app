# asset management restful app


## About the App
This application is about making CRUD operations for tshirts.

<br>

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
  * Download and Install MongoDB.
  * MongoDB starts listening on its default port 27017.
<br>

## Setup
1. Clone the repository 

```clone
git clone https://github.com/SRIRAM-MOGALAPALLI/asset-management-restful-app.git restfulApi
```
2. Change over to the restfulApi directory.

```cd
cd restfulApi
```

3. Install the npm.
```npm
npm i express body-parser mongoose
```
<br>

## How to run the app
1. Start the server.
```start
node app.js
```
2. You can access the app at http://localhost:3000

<br>

## API's  
### Get all the Tshirts
```curl
curl http://localhost:3000/tshirts
```

```get
{
    "success": "true",
    "data": [
        {
            "_id": "6032b0f87e44bd2544bd77a1",
            "tshirt": "peter england",
            "size": "large",
            "__v": 0,
            "price": 1000
        },
        {
            "_id": "603367d8110a10106475b640",
            "tshirt": "Scapes",
            "size": "medium",
            "price": 550,
            "__v": 0
        }
    ]
}

```
### Create a Tshirt

```curl
curl -X POST  http://localhost:3000/tshirts 
-H "Content-type : application/json" 
-H "accept : application/json" 
-d "{\"tshirt\" : \"us-polo\" , \"size\" : \"small\" , \"price\" : \"599 \" }"
```

```post
{
    "success": "true",
    "data": {
        "_id": "60336bd4110a10106475b642",
        "tshirt": "us-polo",
        "size": "small",
        "price": 599,
        "__v": 0
    }
}
```

### Get a Tshirt by Id

```curl
curl http://localhost:3000/tshirts/6032b0f87e44bd2544bd77a1
```

```getspeicfic
{
    "success": "true",
    "data": {
        "_id": "6032b0f87e44bd2544bd77a1",
        "tshirt": "peter england",
        "size": "large",
        "__v": 0,
        "price": 1000
    }
}
```


<!-- ### Update a Tshirt by Id

```curl
curl -X PUT -H "Content-Type : application/json" -H "accept : application/json" -d '{"tshirt" : "killer", "size": "small" }' http://localhost:3000/tshirts/buffalo
```

```put
Successfully updated the entire document
``` -->

### Update a Tshirt 

```curl
curl -X PATCH  http://localhost:3000/tshirts/6032b0f87e44bd2544bd77a1 
-H "Content-type : application/json" 
-H "accept : application/json" 
-d "{\"price\" : \"900\" }"
```

```patch
{
    {
    "success": "true",
    "data": {
        "_id": "6032b0f87e44bd2544bd77a1",
        "tshirt": "peter england",
        "size": "large",
        "__v": 0,
        "price": 900
    }
}
}
```

### Remove a Tshirt 

```curl
curl -X DELETE http://localhost:3000/tshirts/603367d8110a10106475b640
```

```delete
{
    "success":true,
    "message":"removed a tshirt with id: 603367d8110a10106475b640"
}
```

### Other tools used

* Used [Postman](https://www.postman.com/downloads/) with cURL operations for generating http requests to server.[Insomnia](https://insomnia.rest/download/) can also be used as an aleternative.



<br>

Courtesy and Followed this video tutorial on 
[Youtube](https://youtu.be/-MTSQjw5DrM).




<!-- ## Inspiration

I got inspired to  create this application after having an access to one of the useful resource on the [youtube](https://youtu.be/-MTSQjw5DrM). 
 -->



<!-- 
3. Use the API client [postman](https://www.postman.com/downloads/) to generate the HTTP request verbs. -->


