import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

//fetch all products
export const GET = async (req:NextRequest) => {

  const { searchParams } = new URL(req.url)
  const cat = searchParams.get('cat')

  try{
    const products = await prisma.product.findMany({
      where: {
        ...( cat ? { catSlug: cat } : { isFeatured: true } )
      },
    })
    return new NextResponse(
      JSON.stringify(products),
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

