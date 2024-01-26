import { connect } from "mongoose";
import { connectMongodb } from "../../../../lib/mongodb";
import AddItem from "../../../../models/items";
import { NextResponse } from 'next/server'



export async function POST(request) {
    const { itemName, itemDesc, phone, itemPrice } = await request.json();
    await connectMongodb();
    await AddItem.create({ itemName, itemDesc, phone, itemPrice });

    return NextResponse.json({ message: 'Item Added' })
}

export async function GET() {
    await connectMongodb();
    const items = await AddItem.find();
    return NextResponse.json({ items });
}