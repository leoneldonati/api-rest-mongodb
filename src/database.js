import { connect } from "mongoose"

export const connectDB = async () => {
    try {
        await connect('<Mongo database url',{
            // aditional configs to client mongo
        })
        console.log('Connected to MONGO DB!!')
    }
    catch (err) {console.error(err)}
}