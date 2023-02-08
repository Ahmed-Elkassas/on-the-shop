const mongodb = require('mongodb');

let _db;

const MongoClient = mongodb.MongoClient;
// MongNextjs123ahmed
const mongoConnect = (callback) => {
  MongoClient.connect('mongodb://ahmedelkassas:MongNextjs123ahmed@ac-w8xrvor-shard-00-00.n98lkzf.mongodb.net:27017,ac-w8xrvor-shard-00-01.n98lkzf.mongodb.net:27017,ac-w8xrvor-shard-00-02.n98lkzf.mongodb.net:27017/?ssl=true&replicaSet=atlas-mq7p1v-shard-0&authSource=admin&retryWrites=true&w=majority')
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