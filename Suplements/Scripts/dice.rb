#!/usr/bin/env ruby

def roll(match)
  match =~ /(\d+)d(\d*)([\-|\+]\d+)?/ # match _d[sides][+-value]
  dice = $1.to_i
  sides = $2.to_i
  value = $3.to_i

  #if sides are ommited -- set them to 6.
  sides = 6 if sides == 0
  
  dice.times { value = value + rand(sides-1)+1 }
  value
end

if __FILE__ == $0
  if ($1 != nil)
    print roll $1
  else
    print roll "3d"
  end
end