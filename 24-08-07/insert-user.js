// insert-user.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = [
        {
            name: "monitor",
        }
    ] 
    await prisma.user.create({ data });
    console.log("cadastro realizado com sucesso!");
}

main();