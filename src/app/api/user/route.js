import { connectMongodb } from "../../../../lib/mongodb";
import User from "../../../../models/users";
import { NextResponse } from 'next/server'

export async function POST(request) {
    const { name, email } = await request.json();
    await connectMongodb();
    await User.create({ name, email });
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 })
}