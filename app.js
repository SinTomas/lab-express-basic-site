let express = require("express");

let app = express();

app.use(express.static("public"));

app.get("/home", (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/views/about.html");
})

app.get("/achievements", (request, response) => {
    response.sendFile(__dirname + "/views/achievements.html");
})

app.get("/photos", (request, response) => {
    response.sendFile(__dirname + "/views/photos.html");
})

app.listen(3000, () => console.log("App is listening on PORT 3000"));