const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')


const PORT = process.env.PORT || 5000; // this || 8000 will pe activate if there is no port in .env

const {errorHandler} = require('./middleware/errorMiddleware') 

const app = express();

// connect to db 
connectDB()


app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.get("/", (req, res) => {
  // in this () if  you write res than req it will not work (error)
  //   res.send("this is second example");
  res.status(201).json({ message: "Welcome to the support desk api" });
});

// Routes
app.use("/api/users", require("./routes/UserRoutes"));

app.use("/api/tickets", require('./routes/ticketRoutes'))



app.use(errorHandler)

app.listen(PORT, () => console.log(`Server Is Started ${PORT}`));
