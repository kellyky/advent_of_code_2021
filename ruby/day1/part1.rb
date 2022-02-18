readings = File.read("input.txt").split

# readings = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]   # Sample data

processed_readings = readings.map{ |el| el.to_i }

def get_sum(input)
 sum = 0
 input.each_with_index do |current, i|
   previous = input[i - 1]
   next if i == 0;
   if current > previous
     sum += 1
   end
 end
 sum
end

the_sum = get_sum(processed_readings)
puts the_sum



