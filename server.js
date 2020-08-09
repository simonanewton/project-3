const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const url = "mongodb+srv://gtech_admin:<password>@gtechproject3.lp7z3.mongodb.net/<dbname>?retryWrites=true&w=majority";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()) 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//CHANGE TO URL WHEN READY
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/quizapp", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true},()=> console.log(`Connected to Database`));

app.use(require("./routes"));


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
