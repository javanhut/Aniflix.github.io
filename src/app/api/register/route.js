import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("Method:", request.method);
    const { email, name, password } = await request.json();

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 422 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prismadb.user.create({
      data: {
        name,
        email,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json({ message: "User created", user: newUser }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Couldn't connect to server" }, { status: 500 });
  }
};

export async function GET(request) {
  try{
    const {email, password} = await request.json();
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });
    if(!existingUser){
      return NextResponse.json({ message: "User does not exist" }, { status: 422 });
    }
    else{
      const isCorrectPassword = await bcrypt.compare(password, existingUser.hashedPassword);
      if(!isCorrectPassword){
        return NextResponse.json({ message: "Incorrect password" }, { status: 422 });
      }
      return NextResponse.json({ message: "User logged in", user: existingUser }, { status: 200 });
    }
  } catch(error){
    console.log(error);
    return NextResponse.json({ message: "Couldn't connect to server" }, { status: 500 });
  }

};