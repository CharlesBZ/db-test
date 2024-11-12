import { redis } from "@/app/lib/redis"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function Get() {
  try {
    const user = await prisma.person.findFirst()
    console.log(user)

    await redis.set("hello", "world")

    return new Response("User has been found")
  } catch (error) {
    console.log(error)
    return new Response("User is not found!")
  }
}
