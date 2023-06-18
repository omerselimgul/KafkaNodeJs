const { Kafka } = require("kafkajs");

const clientId = "mock-up-kafka-producer-client";
const brokers = ["kafka:9092"]  
const topic = "testtopic";
const kafka = new Kafka({ clientId, brokers });

async function createProducer(mess) {
    try {
        const producer = kafka.producer();
        await producer.connect();
        const messageResult = await producer.send({
            topic: topic,
            messages: [
                {
                    value:JSON.stringify(mess),
                    partition: 0
                }
            ]
        })
        await producer.disconnect();
        console.log("Gönderim işlemi başarılıdrır", JSON.stringify(messageResult));
    } catch (error) {
        console.log("haatta ", error)
    } finally {
    }


}

module.exports={
    createProducer,
}