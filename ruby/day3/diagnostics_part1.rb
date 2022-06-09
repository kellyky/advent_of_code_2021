require 'csv'

readings = CSV.parse(File.read("input.txt"), headers: false)

flattened_readings = readings.join.chars

bit_count = readings[0].join.chars.count
the_bits = []
(0...bit_count).each do |bit|
  the_bits.push([])
end

# make array of bits
readings.each.with_index do |reading|
  r_bits = reading.join.chars
  r_bits.each.with_index do |bit, i|
    the_bits[i].push(bit)
  end
end


gamma_rate = []
epsilon_rate = []

the_bits.map! do |bit|
  bit.map! do |s|
    s.to_i
  end
  if bit.sum > readings.count / 2  
    gamma_rate.push('1') 
    epsilon_rate.push('0')
  else
    gamma_rate.push('0')
    epsilon_rate.push('1')
  end
end

def power_consumption(gamma, epsilon)
  gamma.join.to_i(2) * epsilon.join.to_i(2)
end

puts power_consumption(gamma_rate, epsilon_rate)
