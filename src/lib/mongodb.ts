import { MongoClient } from "mongodb";

// ✅ Check for MongoDB URI
if (!process.env.MONGODB_URI) {
  throw new Error("⚠️ Please add your MongoDB URI to .env.local");
}

// ✅ Define types
const uri: string = process.env.MONGODB_URI;
const options = {};

// Declare typed variables
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// ✅ Type declaration for global variable (development only)
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ Use a global cached connection in development
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // ✅ In production, create a new client for every connection
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// ✅ Export the connection promise with proper type
export default clientPromise;
