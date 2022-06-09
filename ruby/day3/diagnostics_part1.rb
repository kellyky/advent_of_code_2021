require 'csv'

# readings = CSV.parse(File.read("input.txt"), headers: false)

def get_readings
  CSV.parse(File.read("input.txt"), headers: false)
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

gamma_rate = []
epsilon_rate = []

readings = get_readings
flattened_readings = flatten_readings(readings)
bit_count = get_bit_count(readings)
the_bits = make_bit_skeleton(bit_count)
add_bit_data(readings, the_bits)
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
