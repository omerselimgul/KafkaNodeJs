const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://127.0.0.1:27017";

async function addData() {
    const client = await MongoClient.connect(URL);
    const db = client.db("test");
    var datetime = new Date();
    const collection = await db.collection("testcoll");
    let veriler = [{ adi: "Selim", soyadi: "Gul" }];
    const result = await collection.insertMany(veriler);
    console.log("%d kayıt eklendi.", result.insertedCount);
    client.close();
}
addData();