#!/bin/bash

# Variable for the day, e.g. '04'
DAY="$(date "+%d")"

# Create dir for following day; If run on Dec 9, directory will be named `day09`
mkdir ${DAY}day

# Copies & Renames Skeleton File 
cp skeleton-imports.js part1.js

# Move copy into newly created dir for that day
mv part1.js ${DAY}day

# Copy the file & rename to a part2
cp ${DAY}day/part1.js ${DAY}day/part2.js

# Create empty input file in new dir
touch ${DAY}day/input.txt





