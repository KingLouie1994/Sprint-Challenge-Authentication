const db = require("../database/dbConfig");

function find() {
  return db("users").select("id", "username", "password");
}

function findby(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

module.exports = {
  find,
  findby,
  add,
  findById
};
