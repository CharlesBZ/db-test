import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function Get() {
  try {
    const user = await prisma.person.findFirst()
    console.log(user)

    return new Response("User has been found!")
  } catch (error) {
    console.log(error)
    return new Response("User is not found!")
  }
}
