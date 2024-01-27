import { connect } from "mongoose";
import { connectMongodb } from "../../../../lib/mongodb";
import AddItem from "../../../../models/items";
import { NextResponse } from 'next/server'
import path from "path";
import { writeFile } from "fs/promises";



export async function POST(request) {
    
    const { itemName, itemDesc, phone, itemPrice, image } = await request.json();
    await connectMongodb();
    await AddItem.create({ itemName, itemDesc, phone, itemPrice, image });

    return NextResponse.json({ message: 'Item Added' })
}

export async function GET() {
    await connectMongodb();
    const items = await AddItem.find();
    return NextResponse.json({ items });
}