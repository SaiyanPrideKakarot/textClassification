# textClassification

Note: To start server use command 'node src/index.js' or 'npx nodemon src/index.js' or 'nodemon src/index.js'.

After starting the server we have to use Postman to get output.

To get category of any input goto link '127.0.0.1:3000/?productName=inputText' or Postman collection will be provided, in Postman we have to make a GET request with link '127.0.0.1:3000' and inside params key will be "productName" and value will be whatever the input we have to give, example: Onion, I Phone, Refrigerator, Guava, etc.

If any product is not added in database we can add that product or text with the appropriate category in POST request of Postman by going to link '127.0.0.1:3000/add'. And by going into body section -> select raw -> select JSON from dropdown. Inside this we have to enter name and category that we have to add.

For example: {
    "name": "apple",
    "category": "fruit"
}
