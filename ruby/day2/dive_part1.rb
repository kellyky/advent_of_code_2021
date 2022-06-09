require 'csv'

directions = CSV.parse(File.read("sample_set.txt"), headers: false)

depth, horizontal_position = 0, 0

directions.map! { |command| command.join.split(' ') }

directions.each do |row|
  direction, distance = row.slice(0..1)

  case direction 
  when 'up'
    depth -= distance.to_i
  when 'down'
    depth += distance.to_i
  when 'forward'
    horizontal_position += distance.to_i
  end
end

puts depth * horizontal_position
