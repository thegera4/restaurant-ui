import { getAuthSession } from "@/utils/auth"
import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

//fetch all orders

import { Prisma, PrismaClient } from '@prisma/client'

export const GET = async (req: NextRequest) => {
  const session = await getAuthSession()

  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = await prisma.order.findMany()
        return new NextResponse(JSON.stringify(orders), { status: 200 })
      }
      const orders = await prisma.order.findMany({
        where: {
          userEmail:session.user.email!
        }
      })
      return new NextResponse(JSON.stringify(orders), { status: 200 })
    } catch (e) {
      console.error(e)
      return new NextResponse(
        JSON.stringify({ message: 'something went wrong!' }),
        { status: 500 }
      )
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: 'you are not authenticated!' }),
      { status: 401 }
    )
  }
}

