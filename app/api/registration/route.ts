import clientPromise from "@/mondoDB/mongo/clientPromise";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data)
    const MongodbClient = await clientPromise;
    const db = MongodbClient.db("Hackathon");
    const collection = db.collection("registration");
    // const result = await collection.insertOne(data);
    try {
        const user = await collection.findOne({ email: data.email });
        if (user) {
            console.log("user already exists route")
            return NextResponse.json({ success: false, error: "User already exists", status: 409 });
        }
        const result = await collection.insertOne(data);
        return NextResponse.json({ success: true, result, status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error, status: 500 });
    }
}
