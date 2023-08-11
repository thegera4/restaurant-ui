import { prisma } from "@/utils/connect"
import { NextResponse } from "next/server"

//fetch all categories
export const GET = async () => {
  try{
    const categories = await prisma.category.findMany()
    return new NextResponse(
      JSON.stringify(categories),
      { status: 200 }
    ) 
  }catch(e){
    console.error(e)
    return new NextResponse( 
      JSON.stringify({ message: "something went wrong!" }),
      { status: 500 }
    ) 
  }
}
