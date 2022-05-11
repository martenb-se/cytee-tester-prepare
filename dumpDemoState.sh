#!/bin/bash

docker exec -i mongoTest4 /usr/bin/mongodump --username "root" --password "root" --authenticationDatabase admin --db urangutest --out /dump &&\
docker cp mongoTest4:/dump ./databaseDumps &&\
mv './databaseDumps/dump' './databaseDumps/urangutest-'"$(date +"%Y-%m-%d_%H-%M-%S")"
docker exec mongoTest4 rm -fr /dump/urangutest

