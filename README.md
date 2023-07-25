# Generasi GIGIH 3.0 MidTerm Project "Tokopedia Play Clone"

This repository contain a code for tokopedia play clone (only backend) for **GenerasiGIGIH 3.0** Mid Term assignment.

The project using technologies such as **express** for backend and **mongoose** for database.

## Feature

Here is some feature of the project:
* API
    1. `POST` /api/videos
       - This API endpoint is use to create a video. 
       - Url params : `None`
       - Headers : `Content-Type: application/json`
       - Data params : 
            ```javascript
               {
                  imageUrl: string,
               }
            ```            
       - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
                  {<video_object>}
               ```            
    2. `GET` /api/videos
         - This API endpoint is use to get a list of videos. 
         - Url params : `None`
         - Headers : `Content-Type: application/json`
         - Data params : `None`    
         - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
                  [...<video_object>]
               ```      
    3. `GET` /api/videos/:id
         - This API endpoint is use to get a video base on its ID. 
         - Url params : `videoId`
         - Headers : `Content-Type: application/json`
         - Data params : `None`   
         - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
                  {<video_object>}
               ```    
    4. `POST` /api/products
         - This API endpoint is use to create a products for of a single video. 
         - Url params : `None`
         - Headers : `Content-Type: application/json`
         - Data params : 
            ```javascript
               {
                  title: string,
                  price: Number,
                  link: string,
                  videoId: string,
               }
            ```    
         - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
               {<product_object>}
               ```    
    5. `GET` /api/products/:videoId
         - This API endpoint is get list of products base on videoId. 
         - Url params : `videoId`
         - Headers : `Content-Type: application/json`
         - Data params : `None`     
         - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
                  [...<products_object>]
               ```    
    6. `POST` /api/comments
         - This API endpoint is use to create a comment of a video. 
         - Url params : `None`
         - Headers : `Content-Type: application/json`
         - Data params : 
            ```javascript
               {
                  username: string,
                  content: string,
                  videoId: string,
               }
            ```    
         - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
                  {
                     success: true,
                     message: string
                  }
               ```    
    7. `POST` /api/comments/:videoId
         - This API endpoint is use to get list of comments of a video base on videoId. 
         - Url params : `videoId`
         - Headers : `Content-Type: application/json`
         - Data params : `None`     
         - Response : 
            - Status Code : `200`       
            - content 
               ```javascript
                  [...<comment_object>]
               ```    

## Installation

To be able to run this project, first you need  to have Node.js, MongoDB and MongoDB Shell installed on your computer.

Clone this repository to your computer, and then you need to install some dependencies in the package.json with NPM. Run this command on your terminal.

```bash
npm install
```

After you installed all of the dependencies then you can just start the server with this command:
```bash
npm start
````

You can use [postman](https://www.postman.com/) to test all the API endpoint.

## Note
If you have trouble with database connection like this,

```bash
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
```

 make sure that your mongodb is running. First, try run this command on your terminal:

```bash
mongod
```

If it still doesn't work, open Service.msc from your computer search box, and find a MonngoDB then run the server.

<img src="/assets/images/run-mongodb-server.png" width="600px" height="auto" margin="auto">