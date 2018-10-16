local ESX = nil
-- ESX
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

-- Open ID card
RegisterServerEvent('jsfour-idcard:open')
AddEventHandler('jsfour-idcard:open', function(ID, targetID, type)
	local identifier = ESX.GetPlayerFromId(ID).identifier
	local _source 	 = ESX.GetPlayerFromId(targetID).source

	MySQL.Async.fetchAll('SELECT firstname, lastname, dateofbirth, sex, height FROM users WHERE identifier = @identifier', {['@identifier'] = identifier},
	function (result)
		if (result[1] ~= nil) then
		  TriggerClientEvent('jsfour-idcard:open', _source, result, type)
		end
	end)
end)
