# Generasi GIGIH 3.0 MidTerm Project "Tokopedia Play Clone"

This repository contain a code for tokopedia play clone (only backend) for **GenerasiGIGIH 3.0** Mid Term assignment.

The project using technologies such as **express** for backend and **mongoose** for database.

## Feature

Here is some feature of the project:
* API
    1. `POST` /api/videos
       - Create video.
    1. `GET` /api/videos
       - Get list of videos collections.
    1. `GET` /api/videos/:id
       - Get a video by Id.
    1. `POST` /api/products
       - Create a product and associate it with a video.
    1. `GET` /api/products/:videoId
       - Get list products of a video using video id as params.
    1. `POST` /api/comments
       - Create a comment for a video.
    1. `POST` /api/comments/:videoId
       - Get list comments of a video using video id as params.

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
If you have trouble with database connection make sure that your mongodb is running. First, try run this command on your terminal:

```bash
mongod
```

If it still doesn't work, open Service.msc from your computer search box, and find a MonngoDB then run the server.
