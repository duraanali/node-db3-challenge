const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
};

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
}

function insert(post) {
    return db('posts')
        .insert(post)
        .then(ids => {
            return getById(ids[0]);
        });
}

function update(id, changes) {
    return db('posts')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('posts')
        .where('id', id)
        .del();
}