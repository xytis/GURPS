#!/usr/bin/env lua
--[[--
Time manipulation scripts.
Calendar can be represented via set of rules, which are stored and queried when conditions for that rule matches.

#Calendar minimum operating unit is second.

#Each operating unit has its predesesor and its successor.
# sec -> min -> hour -> day -> month -> year
#Unfortunatelly such representation gives unwanted limits, so another structure is set:
# Each operating unit is either atomic or complementary.
# sec (atomic)    day (atomic)    year (atomic)
# min (60 sec)    week (7 days)   decade (10 years)
# hour(60 min)    month(varying)  century (10 decades)

#now each entry may be named or not.
--]]--

-- Example for grigalian calendar



Time = {};
  -- Atomic timestamp. seconds in day, days in year, years in forewer =]
Time.atomic = { second = 0,
                day = 0,
                year = 0};

Time.operations = {
  "increase",
  "decrease",
  "get",
  "set",
  "valid",
  "name",
  };

Time.fields = {
  second = function(self, operation, arg) 
    local handler = {
      increase = function (self, arg)
        increment = 1;
        if (arg) then
          increment = arg;
        end
        self.atomic.second = self.atomic.second + increment;
        while (self.atomic.second >= 86400) do
          self.atomic.second = self.atomic.second - 86400;
          self.fields["day"](self, "increase" , 1);
        end
      end,
      decrease = function (self, arg)
        decrement = 1;
        if (arg) then
          decrement = arg;
        end
        self.atomic.second = self.atomic.second - decrement;
        while (self.atomic.second < 0) do
          self.atomic.second = self.atomic.second + 86400;
          self.fields.day(self, "decrease" , 1);
        end
      end,
      get = function (self, arg)
        return self.atomic.second % 60;
      end,
      set = function (self, arg)
        if (arg) then
          if arg >= 0 and arg < 60 then
            self.atomic.second = self.atomic.second - self.atomic.second % 60 + arg;
          end
        else
          return false;
        end
      end,
      valid = function (self, arg)
        if (arg) then
          return arg >= 0 and arg < 60;
        else
          return false;
        end
      end,
      name = function (self, arg)
        return "second"
      end,
    };
    return handler[operation](self, arg)
  
  end,
  minute = nil,
  hour   = nil,
  day    = function(self, operation, arg) 
    local handler = {
      increase = function (self, arg)
        increment = 1;
        if (arg) then
          increment = arg;
        end
        self.atomic.day = self.atomic.day + increment;
        while (self.atomic.day >= 86400) do
          self.atomic.day = self.atomic.day - 86400;
          self.fields.year(self, "increase" , 1);
        end
      end,
      decrease = function (self, arg)
        decrement = 1;
        if (arg) then
          decrement = arg;
        end
        self.atomic.day = self.atomic.day - decrement;
        while (self.atomic.day < 0) do
          self.atomic.day = self.atomic.day + 86400;
          self.fields.year(self, "decrease" , 1);
        end
      end,
      get = function (self, arg)
        return self.atomic.second % 60;
      end,
      set = function (self, arg)
        if (arg) then
          if arg >= 0 and arg < 60 then
            self.atomic.second = self.atomic.second - self.atomic.second % 60 + arg;
          end
        else
          return false;
        end
      end,
      valid = function (self, arg)
        if (arg) then
          return arg >= 0 and arg < 60;
        else
          return false;
        end
      end,
      name = function (self, arg)
        return "second"
      end,
    };
    return handler[operation](self, arg)
  
  end,
  week   = nil,
  month  = nil,
  year   = nil,
  };
  
Time.to_string = function(self)
  return "valid date";
end
  

  -- User defined values, which return their length in atomic units:
Time.second = function (self) 
  return 1; 
end

Time.minute = function (self)
  return 60 * self:second();
end

Time.hour   = function (self)
  return 60 * self:minute();
end

Time.day    = function (self)
  return 24 * self:hour();
end

Time.week   = function (self)
  return 7;
end

Time.month  = function (self)
  --Which month are we in now?
  --Return the length of this month
  local months = {
    [1] = 31 * self:day(),
    [2] = 28 * self:day(),
    [3] = 31 * self:day(),
    [4] = 30 * self:day(),
    [5] = 31 * self:day(),
    [6] = 30 * self:day(),
    [7] = 31 * self:day(),
    [8] = 31 * self:day(),
    [9] = 30 * self:day(),
    [10]= 31 * self:day(),
    [11]= 30 * self:day(),
    [12]= 31 * self:day(),
  };
  --Add leap year condition:
  if (self:leap_year()) then
    months[2] = 29 * self:day();
  end
  return months[self:month_index()];
end;

Time.year   = function (self)
  if (self:leap_year()) then
    return 366 * self:day();
  else
    return 365 * self.day();
  end
end

-- Special rules:
Time.leap_year = function (self)
  
end