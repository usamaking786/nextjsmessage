import mongoose from "mongoose";

type connectionObject = {
    isConnected? : number
}

const connection : connectionObject = {};

async function dbConnect() : Promise<void> {
    if (connection.isConnected){
        console.log("Already connected to the database")
        return;
    }

    try {
        const db = await mongoose.connect(process.env.Mongodb_URI || "");
        connection.isConnected = db.connections[0].readyState;
        console.log("database Connected Successfully");

    } catch (error) {

        console.log("Database Connection Failed:", error);

        process.exit(1);
        
    }
}

export default dbConnect;
