const pool = require('./pool')


async function getAllMessages() {
    const {rows} = await pool.query(
        "SELECT * FROM messages"
    );
    return rows;
}

async function getMessageById(msgId) {
    const { rows } = await pool.query(
        'SELECT * FROM messages WHERE id = $1',
        [msgId]
    )
    return rows;
}

async function createMsg(msgObj) {
    await pool.query(`
        INSERT INTO messages (username, text, added)
        VALUES ($1, $2, $3)`, 
        [msgObj.username, msgObj.text, msgObj.added]
    )
}


module.exports = {
    getMessageById,
    getAllMessages,
    createMsg
}