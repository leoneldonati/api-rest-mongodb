import { app } from "./app.js";
import { connectDB } from "./database.js";


// conection to database
connectDB()

app.listen(3000)
console.log('server started in port:', 3000)