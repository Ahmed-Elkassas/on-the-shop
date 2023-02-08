const {ObjectId} = require('mongodb')

const { getDb } = require("../util/database");

class User {
    constructor(userName, email) {
        this.userName = userName;
        this.email = email;
    }

    save() {
        const db =  getDb();
        return db.collection('users').insertOne(this)
    }

    static findById(userId) {
        const db =  getDb();
        return db.collection('users').findOne({_id: new ObjectId(userId)})
    }
} 

module.exports = User;