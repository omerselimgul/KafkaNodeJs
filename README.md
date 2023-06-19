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

1) Using `docker-compose`, spin up all containers (Zookeeper, Kafka, Database, Producer and Consumer):
```shell
docker-compose up
```



