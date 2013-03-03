
def rolls (match)
  match =~ /(\d)+d([+-])(\d)*/
  dice = $1.to_i
  sign = $2
  mod = $3.to_i
  mod = 0.send sign, mod
  ans = {}
  many = 1000000
  many.times do
    cur = 0
    dice.times { cur = cur + rand(5)+1 }
    cur = cur + mod
    ans[cur] = 1 + (ans[cur] or 0)
  end
  File.open(match, 'w') do |f|
    ans.each do |key, value|
      f.puts "#{key} #{value}"
    end
  end
end
