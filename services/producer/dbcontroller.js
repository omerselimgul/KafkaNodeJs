// const { createProducer } = require("./producer");

const { createProducer } = require("./producer");

const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://mongo:27017";

async function createDb() {
  const client = await MongoClient.connect(URL);
  try{
    const db = client.db("test");
  
    const collection = await db.createCollection("testcoll");
    console.log("Koleksiyon oluşturuldu.");
  }catch(err){
    console.log(err)
  }finally{
    client.close();
  }
}

async function getData() {
  const client = await MongoClient.connect(URL);
  const db = client.db("test");
  const collection = await db.collection("testcoll");
  let sorgu = {};
  const result = await collection.find();
  const data = await result.toArray();
  await client.close();
  return data;

}
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
var beforeData = [{}];
async function main() {
  await createDb().catch(err=>console.log(err))

  while (true) {
    console.log("Yeni kayıt var mı kontrol ediliyor ...");
    let currentData = await getData();
    if (currentData) {
      let newData = [];
      currentData.map((cd) => {
        let data = beforeData.find((bd) => bd._id.toString() == cd._id.toString());
        if (!data) {
          newData.push(cd);
        }
        return null;
      });
      beforeData = currentData;
      if(newData.length>0){
        createProducer(newData)
      }
    }
    await delay(10000);
  }
}

main();
