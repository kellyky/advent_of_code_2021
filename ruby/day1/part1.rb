arr = File.read("input.txt").split

# puts file_data
sum = 0
arr.each_with_index do |num, i|
  if arr[i] >= arr[i - 1]
    sum += 1
  end
end

puts sum
