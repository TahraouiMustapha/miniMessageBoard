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


module.exports = {
    getMessageById,
    getAllMessages
}