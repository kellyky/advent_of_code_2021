#!/bin/bash

# Create dir for following day #Later, can I find a way to fill in the day number as I go, rather than by changing the file?

DAY="$(date "+%d")"

mkdir test

# # Copy & Rename Skeleton File
cp skeleton-imports.js day${DAY}-part1.js

mv day${DAY}-part1.js test



# mv ${DAY}_part1.js 
# mv day4_part1.js day3
# cp day4/day3_part1.js day3/day3_part2.js




