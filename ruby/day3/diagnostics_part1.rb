require 'csv'

def get_readings
  CSV.parse(File.read("input.txt"))
end

def flatten_readings(arr)
  arr.join.chars 
end

def get_bit_count(arr)
  arr[0].join.chars.count  
end

def make_bit_skeleton(num)
  (0...num).to_a.map { |bit| [] }
end

def add_bit_data(readings, the_bits)
  readings.each do |reading|
    reading.join.chars.each.with_index { |bit, i| the_bits[i].push(bit) }
  end
end

def get_gamma(arr, readings)
  arr.map! do |bit|
    bit.map! { |str| str.to_i }
   bit.sum > readings.count / 2 ? '1' : '0'   
  end
end

def get_epsilon(gamma_rate)
  gamma_rate.map { |b| b == '1' ? '0' : '1' }
end

def power_consumption(gamma, epsilon)
  gamma.join.to_i(2) * epsilon.join.to_i(2)
end

readings = get_readings
flattened_readings = flatten_readings(readings)
bit_count = get_bit_count(readings)
the_bits = make_bit_skeleton(bit_count)
add_bit_data(readings, the_bits)
gamma_rate = get_gamma(the_bits, readings)
epsilon_rate = get_epsilon(gamma_rate)

puts power_consumption(gamma_rate, epsilon_rate)
