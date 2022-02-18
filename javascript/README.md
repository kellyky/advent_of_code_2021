Advent of Code 2021!! 

## My Progress
Following along with Advent of Code exercises. https://adventofcode.com/2021. 

* Day 1: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day_1/sonarCount_pt1.js) | [Part 2](https://github.com/kellyky/advent_of_code_2021/blob/main/day_1/sonarCount_pt2.js)
* Day 2: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day02/part1.js) | [Part 2](https://github.com/kellyky/advent_of_code_2021/blob/main/day_2/part2.js)
* Day 3: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day_3/part1.js) | [Part 2](https://github.com/kellyky/advent_of_code_2021/blob/main/day_3/part2.js)
* Day 6: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day_6/part1.js)
* Day 7: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day_7/part1.js) | [Part 2](https://github.com/kellyky/advent_of_code_2021/blob/main/day_7/part2.js)

I'll probably stick to Javascript for the exercises. I may or may not continue to update the readme with day/day-part links. We'll see!

## Day-Creator
If you're interested in _one command to rule them all!!_ or... maybe one command to create that day's folder and skeleton files, you're in the right place.  

What it does:
  * Create a directory for that day's files 
  * Create empty/placeholder `input.txt` in that directory
  * Create part1.js and part2.js in that directory. 
      * These will have code from `skeleton-imports.js` -- some starter code to help with imports (see gotchas)   

### Setup
1. Copy/download/clone the file to the root of your directory
2. You also need to copy/clone `skeleton-imports.js` into that same directory
3. `chmod +x day-creator.sh` each of those files 

### How to Use 
Run `./day-creator.sh` from the root of your advent of code directory. That's it ;-P

### Gotchas & Notes
Note that directories are named for the date -- i.e. the day of the month they are created on. Change the name of the folder if you're working on a different day. 

Depending on the input provided by AOC, the skeleton code may need to be updated. That input is also declared as `input`. 
