readings = File.read("input.txt").split

# readings = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]   # Sample data

processed_readings = readings.map &:to_i

def moving_sum(readings)
  sum = 0

  loop_num = 0
  while (loop_num < readings.length - 3)

    # puts [readings[loop_num], readings[loop_num + 1], readings[loop_num + 2]].sum

    first_compare = [readings[loop_num], readings[loop_num + 1], readings[loop_num + 2]].sum
    second_compare = [readings[loop_num + 1], readings[loop_num + 2], readings[loop_num + 3]].sum

    puts "#{first_compare} vs #{second_compare}"
    if second_compare > first_compare
      sum += 1
    end
    loop_num += 1
  end
  sum
end

puts moving_sum(processed_readings)
