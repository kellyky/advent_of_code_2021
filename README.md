Advent of Code 2021!! 

README is 100% still in progress, as I'm figuring it out as I go. But, here's where I am as of 12/4. 

* I've attempted Day 1 Part 1
* I've created a skeleton file that contains code that allows me to turn input file into an array each day
* day-creator.sh is a rough start at something to automate the skeleton folder/files for each day

## Advent of Code
Following along with Advent of Code exercises. https://adventofcode.com/2021

I'll probably stick to Javascript for the exercises. But we'll see!

## How to Use Day-Creator
As of 12/4 :-)

### Setup
1. Copy/download/clone the file to the root of your directory
2. `chmod +x day-creator.sh` so you can run it

### Running It
1. Edit the file to the current day (and beyond if you want more interesting file names)
1. From the root of your directory, run `./ day-creator.sh`
Viola! Hopefully you have a folder for the new day, with a file for part 1 and part 2. Inside those files, will exist the code you need to turn the input file into an arrayyou can use in your code for that day. 

It'll be a `const` called `input` so rename that if you'd like. 

### Gotchas
You definitley have to edit the daily directory name and file name before running `./day-creator.sh`. E.g., `day_2` to `day_3`.

For now. I have ideas to automate that (either make it take user input or something different), and I may move towards a framework of some sort in the future. I may also try to figure out how to set up some unit tests.  For now, it's all shell fun.  




