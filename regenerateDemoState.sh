#!/bin/bash

## Cleanup

docker cp ./scripts/dropTables.js mongoTest4:/ &&\
docker cp ./databaseInit.js mongoTest4:/ &&\
docker exec -i mongoTest4 mongosh dropTables.js;

rm -r ./tool/cytee/.analyze_cache;

rm ./tool/cytee/db.config.yml;
rm ./tool/cytee/urang.config.yml;

rm -r ./base_folder/cytee-demo-project/src;

## Regenerate

docker cp ./scripts/regenerateDatabase.js mongoTest4:/ &&\
docker exec -i mongoTest4 mongosh regenerateDatabase.js;

cp -r ./state_before_tester/cytee/.analyze_cache ./tool/cytee;

cp ./db.config.yml ./tool/cytee;
cp ./urang.config.yml ./tool/cytee;

cp -r ./state_before_tester/cytee-demo-project/src ./base_folder/cytee-demo-project;