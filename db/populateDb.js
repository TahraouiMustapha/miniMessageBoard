const { Client } = require('pg');
require('dotenv').config();


const currentDate = new Date().toISOString().split('T')[0];

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR(255),
        username VARCHAR(30),
        added DATE
    );

    INSERT INTO messages (text, username, added) 
    VALUES 
        ('Hi there!', 'amando', '${currentDate}'),
        ('Hi!', 'kamal', '${currentDate}');
`;

async function main() {
    console.log("seeding ...");
    const client = new Client({
        connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOSTNAME}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("done")

}

main();