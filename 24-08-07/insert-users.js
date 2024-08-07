// insert into 'users' ('name') VALUES
//('Fulano'),
//('beltrano').
// ('ciclano')

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = [
        {title: "musica boa"},
        {artists: "artistaa"},  
        {album: "rock" },
        genres:       String
        single:       Boolean
        release_year: DateTime @db.Date
        duration:    DateTime @db.Time
    ];
    await prisma.music.createMany({ data });
    console.log("cadastro realizado com sucesso!");
}

main();