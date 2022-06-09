require 'csv'

directions = CSV.parse(File.read("input.txt"), headers: false)

aim, depth, horizontal_position = 0, 0, 0

directions.map! { |command| command.join.split(' ') }

directions.each do |row|
  direction, distance = row.slice(0..1)

  case direction 
  when 'up'
    # depth -= distance.to_i
    aim -= distance.to_i
  when 'down'
    aim += distance.to_i
    # depth += distance.to_i
  when 'forward'
    horizontal_position += distance.to_i
    depth += aim * distance.to_i
    
  end
end

puts depth * horizontal_position
