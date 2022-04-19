import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { users?: mongoDB.Collection } = {}



export async function connectToDatabase () {
    dotenv.config();
 
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost:27017`);
            
    await client.connect();

    const db : mongoDB.Db = new mongoDB.Db(client, "appDB");
        
    db.createCollection("users");
   
    const usersCollection: mongoDB.Collection = db.collection("users");
 
    collections.users = usersCollection;
       
         console.log(`Successfully connected to database: ${db.databaseName} and collection: ${usersCollection.collectionName}`);
 }