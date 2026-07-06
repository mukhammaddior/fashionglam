import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  console.log(await prisma.user.count());
}
main().catch(console.error);
