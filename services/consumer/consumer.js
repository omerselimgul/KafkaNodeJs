const { Kafka } = require("kafkajs");


const clientId = "mock-up-kafka-producer-client";
const brokers = ["kafka:9092"]  
const topic = "testtopic";
async function consume (){
  const groupId = process.argv[2] || "group1";
  const kafka = new Kafka({ clientId, brokers });
  const consumer = kafka.consumer({ groupId: groupId });
  let data = [];
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: ({ message }) => {
      console.log(`${groupId}.consumer received message: ${message.value.toString()}`);
      data.push(message);
    },
  });
  return data;
};
consume().then(() => {
    console.log("produced successfully");
  })
  .catch((err) => console.log(err));


