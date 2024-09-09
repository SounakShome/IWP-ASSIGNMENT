import { NextResponse } from "next/server";
import Order from "../../../models/order";
import connectDB from "../../../middleware/mongoose";

export async function GET(req) {
    await connectDB();
    let orders = await Order.find();
    return new NextResponse(JSON.stringify(orders), { status: 200 });
}
