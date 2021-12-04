#!/bin/bash

# Create dir for following day #Later, can I find a way to fill in the day number as I go, rather than by changing the file?
mkdir day_2

# Copy & Rename Skeleton File
cp skeleton-imports.js day2_part1.js
mv day2_part1.js day_2
cp day_2/day2_part1.js day_2/day2_part2.js

# Add new folder/files to git
git add -u
git commit -m "Add skeleton for new day"
git push




