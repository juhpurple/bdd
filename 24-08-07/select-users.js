// select-user.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const music = await prisma.Music.findMany();
    console.log(Music);
}

main();