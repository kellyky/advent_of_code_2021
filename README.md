Advent of Code 2021!! 

README is 100% still in progress, as I'm figuring it out as I go. But, here's where I am as of 12/5. 

## Advent of Code
Following along with Advent of Code exercises. https://adventofcode.com/2021. I'm here to learn and practice so I'll keep a file for each day's part. 

* Day 1: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day_1/sonarCount_pt1.js) | [Part 2](https://github.com/kellyky/advent_of_code_2021/blob/main/day_1/sonarCount_pt2.js)
* Day 2: [Part 1](https://github.com/kellyky/advent_of_code_2021/blob/main/day02/part1.js) | Part 2

I'll probably stick to Javascript for the exercises. I may or may not continue to update the readme with day/day-part links. We'll see!

## Day-Creator
If you're interested in _one command to rule them all!!_ or... maybe one command to create that day's folder and skeleton files, you're in the right place. 

What it does:
  * Create a directory for that day's files - e.g. `day05`
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
Note that directories are named for the date -- i.e. the day of the month they are created on. 

  * If I run `./day-creator.sh` on Dec 10, my directory for that day is called `day10`
  * If I run it on Feb 3, the directory would be called `day03`
If you're going to use this script, you need to run it on the day of the month that correlates to the day of the challenge. Or, you can edit the file before you run it and have it name things how you'd like.

This is nice for organizing each day's work, it's terrible for tab-completion. It also doesn't make for very fun names for files. Takes a little whimsy out of it. 

Otherwise, you may need to consider/change:
  * The skeleton code in part1.js and part2.js _assumes numerical input_ -- change as needed, depending on the input
  * The input is declared as a const `input` - accurate but boring 😆




