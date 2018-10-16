# jsfour-idcard
This is an updated version of my <a href="https://github.com/jonassvensson4/jsfour-legitimation">jsfour-legitimation<a/>. It has and ID card and a driver license

## LICENSE
Please don't sell or reupload this resource

## INSTALLATION
Drag and drop. It's using the users table that comes with ESX so make sure you've that one installed.

## SCREENSHOTS
![screenshot](https://i.gyazo.com/645a490f474296a9c5ce2a05a16a33c9.png)
![screenshot](https://i.gyazo.com/eea6138be7a9d056acaf0177850ecdde.png)

## USAGE
```
-- Look at your own ID-card
TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(PlayerId()))

-- Show your ID-card to the closest person
local player, distance = ESX.Game.GetClosestPlayer()

if distance ~= -1 and distance <= 3.0 then
  TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(player))
else
  ESX.ShowNotification('Ingen i närheten')
end

-- Look at your own driver license
TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(PlayerId()), 'driver')

-- Show your driver license to the closest person
local player, distance = ESX.Game.GetClosestPlayer()

if distance ~= -1 and distance <= 3.0 then
  TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(player), 'driver')
else
  ESX.ShowNotification('Ingen i närheten')
end
```
