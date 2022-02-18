
# sample data
# arr = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

# arr.each do |el|
#   puts "Something's happening here"
# end

sum = 0
arr.each_with_index do |num, i|
  if arr[i] >= arr[i - 1]
    sum += 1
  end
end

puts sum
