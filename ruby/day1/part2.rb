readings = File.read("input.txt").split

# r = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]   # Sample data

processed_readings = readings.map &:to_i

def sonar_count(r)
  sum = 0
  lap = 0
  while (lap < r.length - 3)
    if [r[lap], r[lap + 1], r[lap + 2]].sum < [r[lap + 1], r[lap + 2], r[lap + 3]].sum
      sum += 1
    end
    lap += 1
  end
  sum
end

puts sonar_count(processed_readings)
