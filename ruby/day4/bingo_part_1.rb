# readings = File.read("sample_input.txt").split(' ')

# # CSV.parse(file.read, headers: true, header_converters: :symbol, skip_lines: /,,,,/).map(&hash_with_existent_keys)

# experiment = TXT.parse(file.read)
# # numbers called by bingo caller
# # puts readings[0]
# puts experiment

# # make boards

require 'csv'

CSV.read("sample_input.txt")

sample_input = CSV.parse(File.read("sample_input.txt"), headers: true)

puts sample_input[1][0..3]
