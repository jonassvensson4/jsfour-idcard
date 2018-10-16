# jsfour-idcard
This is an updated version of my <a href="https://github.com/jonassvensson4/jsfour-legitimation">jsfour-legitimation<a/>. It has and ID card and a driver license

## LICENSE
Please don't sell or reupload this resource

## INSTALLATION
Drag and drop. 
You also need to have <a href="https://github.com/ESX-Org/es_extended">es_extended</a> and <a href="https://github.com/ESX-Org/esx_license">esx_license</a> installed.


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
  ESX.ShowNotification('No players nearby')
end



-- Look at your own driver license
TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(PlayerId()), 'driver')

-- Show your driver license to the closest person
local player, distance = ESX.Game.GetClosestPlayer()

if distance ~= -1 and distance <= 3.0 then
  TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(player), 'driver')
else
  ESX.ShowNotification('No players nearby')
end





-- A menu (THIS IS AN EXAMPLE)
function openMenu()
  ESX.UI.Menu.Open(
	'default', GetCurrentResourceName(), 'id_card_menu',
	{
		title    = 'ID menu',
		elements = {
			{label = 'Check your ID', value = 'checkID'},
			{label = 'Show your ID', value = 'showID'},
      {label = 'Check your driver license', value = 'checkDriver'},
      {label = 'Show your driver license', value = 'showDriver'},
		}
	},
	function(data, menu)
		if data.current.value == 'checkID' then
			TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(PlayerId()))
    elseif data.current.value == 'showID' then
      local player, distance = ESX.Game.GetClosestPlayer()

      if distance ~= -1 and distance <= 3.0 then
        TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(player))
      else
        ESX.ShowNotification('No players nearby')
      end
    elseif data.current.value == 'checkDriver' then
      TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(PlayerId()), 'driver')
    elseif data.current.value == 'showDriver' then
      local player, distance = ESX.Game.GetClosestPlayer()

      if distance ~= -1 and distance <= 3.0 then
        TriggerServerEvent('jsfour-idcard:open', GetPlayerServerId(PlayerId()), GetPlayerServerId(player), 'driver')
      else
        ESX.ShowNotification('No players nearby')
      end
		end
	end,
	function(data, menu)
		menu.close()
	end
)
end
```

PSD file: https://www.dropbox.com/sh/ho6xq5cmk6sxz6x/AAB3aPJOylL7EWrU6BFb45-0a?dl=0
