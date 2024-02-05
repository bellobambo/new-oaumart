import { connectMongodb } from "../../../../lib/mongodb";
import AddItem from "../../../../models/items";
import { NextResponse } from 'next/server'

export async function POST(request) {
    const formData = await request.formData();

    try {


        const { itemName, itemDesc, phone, itemPrice, brandName, image } = Object.fromEntries(formData.entries());


        await connectMongodb();


        await AddItem.create({ itemName, itemDesc, phone, itemPrice, brandName, image });

        return NextResponse.json({ message: 'Item Added' });
    } catch (error) {
        console.error("Error occurred: ", error);
        return NextResponse.json({ message: "Failed", status: 500 });
    }
}

export async function GET() {
    await connectMongodb();
    const items = await AddItem.find();
    return NextResponse.json({ items });
}