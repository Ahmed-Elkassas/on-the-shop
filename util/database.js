const mongodb = require('mongodb');

let _db;

const MongoClient = mongodb.MongoClient;
// Mongoandnodecourse12
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://ahmedelkassas:Mongoandnodecourse12@cluster0.a8fviod.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
  });
};


const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No DB Found!!';
}


exports.mongoConnect = mongoConnect;

exports.getDb = getDb;