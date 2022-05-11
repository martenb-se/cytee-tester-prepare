#!/bin/bash

docker exec -i mongoTest4 /usr/bin/mongodump --username "[Username-Placeholder]" --password "[Password-Placeholder]" --authenticationDatabase admin --db urangutest --out /dump && 
docker cp mongoTest4:/dump ./tempDump &&
mkdir ./databaseDumps
mv ./tempDump/urangutest ./databaseDumps/urangutest-"$(date +"%Y-%m-%d_%H-%M-%S")" && 
rm -rf ./tempDump &&
docker exec mongoTest4 rm -fr /dump
