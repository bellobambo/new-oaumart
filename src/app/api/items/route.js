import { connectMongodb } from "../../../../lib/mongodb";
import AddItem from "../../../../models/items";
import { NextResponse } from 'next/server'
import path from "path";
import { writeFile, copyFile } from "fs/promises";

export async function POST(request) {
    const formData = await request.formData();

    const file = formData.get("image");
    if (!file) {
        return NextResponse.json({ error: "No image received." }, { status: 400 });
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");

    try {

        const temporaryPath = path.join(`/tmp/${filename}`);
        const targetPath = path.join(`public/uploads/${filename}`);
        
        await writeFile(temporaryPath, buffer);


        await copyFile(temporaryPath, targetPath);

        const { itemName, itemDesc, phone, itemPrice, brandName } = Object.fromEntries(formData.entries());


        await connectMongodb();


        await AddItem.create({ itemName, itemDesc, phone, itemPrice, brandName, image: filename });

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