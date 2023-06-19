# Kafka NodeJS Example

## Introduction

![Alt text](https://raw.githubusercontent.com/omerselimgul/KafkaNodeJs/main/images/consumernewrecord.jpeg
)
This repository showcases an example of using Kafka with NodeJS. In this example, we use Kafka as a messaging system for inserting data into a mongodb database. there is a one Producer. every 10 seconds it checks for any new records in mongodb . if there is a new record in db . it will send new record as message to kafka.
Also There are 3 Consumers.they are listen to kafka if kafka has any message,
these Consumer will print to console.
This app also have helper app for adding new record.if you run AddData.js that will insert a data into mongodb.but you must start docker-compose

## Instructions
This demonstration assumes you already have `docker` and `docker-compose` installed. The steps are as follows:
1) firstly using cd command locate to insede projecet folder  
```shell
cd KafkaNodeJs
```
2) Using `docker-compose`, build docker image from  dockerfiles of Producer and Consumer:
```shell
docker-compose build
```
3) Using `docker-compose`, spin up all containers (Zookeeper, Kafka, Database, Producer and Consumer):
```shell
docker-compose up
```
## Test
1) After docker compose up command project will be running,if you want to test to project you can run the AddData.js but before you locate to Service/producer on cmd:
```shell
cd /services/producer
```
2) After you can install dependencies of AddData.js
```shell
npm install 
```
After you can set to veriler variable in AddData.js :
![Alt text](https://raw.githubusercontent.com/omerselimgul/KafkaNodeJs/main/images/adddatajsfile.jpeg)
3) 

After you can sent veriler variable as new record to Mongodb for adding
```shell
node AddData.js
```
Procuder check to mongoDb.it find newdata which is added by you and will send newdata as message to kafka .Consumers take this message and write to console 