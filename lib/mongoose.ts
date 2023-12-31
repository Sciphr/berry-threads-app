import mongoose from "mongoose";

let isConnected = false; //variable to check if connection is already established

export const connectToDB = async () => {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGODB_URL) {
		return console.log("MONGODB_URL not found in .env file");
	}

	if (isConnected) {
		return console.log("=> using existing database connection");
	}

	try {
		await mongoose.connect(process.env.MONGODB_URL);

		isConnected = true;
		console.log("Connected to DB");
	} catch (error) {
		console.log("Error connecting to DB", error);
	}
};
