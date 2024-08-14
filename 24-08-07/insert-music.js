// insert into 'users' ('name') VALUES
//('Fulano'),
//('beltrano').
// ('ciclano')

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = [
        {
            title: "musica boa",
            artists: "artistaa",
            album: "luxo",
            genres: "rock",
            single: false,
            release_year: 2012,
            duration: new Date('2024-01-01T00:04:07Z').toISOString()
        },
        {
            title: "hayloft",
            artists: "Mother Moyher",
            album: "galinha",
            genres: "indie",
            single: false,
            release_year: 2010,
            duration: new Date('2024-01-01T00:03:48Z').toISOString()
        },
        {
            title: "Formation",
            artists: "Beyonce",
            album: "delux",
            genres: "blue",
            single: false,
            release_year: 2017,
            duration: new Date('2024-01-01T00:03:23Z').toISOString()
        },
        {
            title: "Idol",
            artists: "The weekend",
            album: "Idol",
            genres: "pop",
            single: false,
            release_year: 2023,
            duration: new Date('2024-01-01T00:03:55Z').toISOString()
        },
        {
            title: "Once upon a dream",
            artists: "lana del rey",
            album: "mistic",
            genres: "indie",
            single: false,
            release_year: 2022,
            duration: new Date('2024-01-01T00:04:25Z').toISOString()
        }
    ];
    await prisma.Music.createMany({ data });
    console.log("cadastro music realizado com sucesso!");
}

main();