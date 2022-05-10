#!/bin/bash

docker exec -i mongoTest4 /usr/bin/mongodump --username "[Username-Placeholder]" --password "[Password-Placeholder]" --authenticationDatabase admin --db urangutest --out /dump &&\
docker cp mongoTest4:/dump ./databaseDumps &&\
mv './databaseDumps/urangutest' './databaseDumps/urangutest-'"$(date +"%Y-%m-%d_%H-%M-%S")"
docker exec mongoTest4 rm -fr /dump/urangutest

