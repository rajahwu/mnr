import { MongoClient, Db } from "mongodb";
import { MONGODB_URL, DATABASE_NAME } from "./config";

// cache client db connection
let connectedClient: MongoClient;
let connectedDb: Db;

export const connectClient = async (): Promise<Db> => {
  if (connectedDb) {
    return connectedDb;
  }
  const client = new MongoClient(MONGODB_URL);
  await client.connect();
  await client.db(DATABASE_NAME).command({ ping: 1 });
  console.info("Connected to MongoDB");

  connectedClient = client;
  connectedDb = client.db(DATABASE_NAME);

  return connectedDb;
};

export const stopClient = async () => {
    if(connectedClient) {
        await connectedClient.close(); 
    }
};
