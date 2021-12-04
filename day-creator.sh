#!/bin/bash

# Variable for the day, e.g. '04'
DAY="$(date "+%d")"

# Create dir for following day #Later, can I find a way to fill in the day number as I go, rather than by changing the file?
mkdir day${DAY}

# Copy & Rename Skeleton File to that of the date
cp skeleton-imports.js day${DAY}-part1.js

# Move copy into newly created dir for that day
mv day${DAY}-part1.js day${DAY}

# Copy the file & rename to a part2
cp day${DAY}/day${DAY}-part1.js day${DAY}/day${DAY}-part2.js





