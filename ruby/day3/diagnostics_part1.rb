require 'csv'

def get_readings
  CSV.parse(File.read("input.txt"))
end

def flatten_readings(arr)
  arr.join.chars 
end

def build_empty_bit_container(arr)
  bit_count = arr[0].join.chars.count  
  (0...bit_count).to_a.map { |bit| [] }
end

def fill_bit_container(readings, bit_data)
  readings.each do |reading|
    reading.join.chars.each.with_index { |bit, i| bit_data[i].push(bit) }
  end
end

# getting gamma, epsilon, power consumption
def get_gamma(arr, readings)
  arr.map! do |bit|
    bit.map! { |str| str.to_i }
   bit.sum > readings.count / 2 ? '1' : '0'   
  end
end

def get_epsilon(gamma_rate)
  gamma_rate.map { |b| b == '1' ? '0' : '1' }
end

def calculate_power_consumption(gamma, epsilon)
  gamma.join.to_i(2) * epsilon.join.to_i(2)
end

readings = get_readings
flattened_readings = flatten_readings(readings)
bit_data = build_empty_bit_container(readings)
fill_bit_container(readings, bit_data)
gamma_rate = get_gamma(bit_data, readings)
epsilon_rate = get_epsilon(gamma_rate)

puts calculate_power_consumption(gamma_rate, epsilon_rate)
