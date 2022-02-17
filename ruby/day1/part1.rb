entries = File.read("input.txt").split

sum = 0
entries.each_with_index do |current, i|
  previous = entries[i - 1]
  next if i == 0;  
  if current > previous
   sum += 1
  end
end

puts sum  # almost there? it computes the sample correctly. With real data I'm off by 1...

# input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]


# I don't have it working yet as a method
# def get_sum(input)
#   sum = 0
#   input.each_with_index do |current, i|
#     previous = input[i - 1]
#     next if i == 0;
#     if current > previous
#       sum += 1
#     end
#   end
#   sum
# end

# get_sum(entries)
