#!/bin/bash

rm -r ./tool/cytee/.analyze_cache;

rm ./tool/cytee/db.config.yml;
rm ./tool/cytee/urang.config.yml;

cp ./scripts/original.urang.config.yml ./tool/cytee/urang.config.yml;

rm -r ./base_folder/cytee-demo-project/src;

cp -r ./state_before_tester/cytee-demo-project/src ./base_folder/cytee-demo-project;