var item = new Object();

function weapon(name, material, enhancement, dmgS, dmgM, critical, range, weight, type, special, ammo){
	var self = this;

	if(!ammo){
		ammo = '';
	}

	material = (material == "steel" || material == "wood") ? "" : material; // steel, wood, adamantine, etc
	self.material = material;
	self.name = material + " " + name;
	self.enhancement = enhancement; // +1, +2, ..., +5
	self.dmgS = dmgS;
	self.dmgM = dmgM;
	self.critical = critical;
	self.range = range;
	self.weight = weight;
	self.type = type; // P, S, or B
	self.special = special == '-' ? "" : special;
	self.ammo = ammo;

}

// on select material

function UpdateMaterial(element){
	var item = $(element);
	var costAndUnit = $(item.parent('td').parent('tr').children('td')[4]).html().split(' ');
	var cost = costAndUnit[0];
	var unit = costAndUnit[1];
	
}

//Cost	Dmg (S)	Dmg (M)	Critical	Range	Weight	Type	Special

function PurchaseItem()
{

	var element = $(this);
	var stats = element.parent().parent('tr').children('td');
	var itemType = $(stats[0]).children('span').hasClass('weapon') ? 'Weapon' : "";
	itemType = $(stats[0]).children('span').hasClass('armor') ? 'Armor' : itemType;
	itemType = $(stats[0]).children('span').hasClass('gear') ? 'Gear' : itemType;

	var id;	
	var row;
	switch(itemType){
		case 'Weapon':

			var material = $(stats[1]).children('select').val();
			var enhancement = parseInt($(stats[2]).children('select').val());
			var weaponName = $(stats[3]).html();
			var cost = $(stats[4]).html();
			var dmgS = $(stats[5]).html();
			var dmgM = $(stats[6]).html();
			var critical = $(stats[7]).html();
			var range = $(stats[8]).html();
			var weight = $(stats[9]).html();
			var type = $(stats[10]).html();
			var special = $(stats[11]).html();			
			var ammo = '';
			//name, material, enhancement, dmgS, dmgM, critical, range, weight, type, special, ammo

			material = !material ? '' : material;
			if(enhancement==0 && (material=="Adamantine" || material=="Darkwood" || material=="Mithral")){
				enhancement = 1;
			}

			var wpn = new weapon(weaponName, material, enhancement, dmgS, dmgM, critical, range, weight, type, special, ammo);

			character.Equipment.Weapons.Add(wpn);

			row = '<tr><td><span class="removeItem"></span></td><td>'+wpn.name+
				  '</td><td>'+wpn.dmgM+
				  '</td><td>'+wpn.enhancement+
				  '</td><td>'+wpn.critical+
				  '</td><td>'+wpn.range+
				  '</td><td>'+wpn.ammo+
				  '</td><td>'+wpn.type+"\t"+wpn.special+
				  '</td><td>'+wpn.weight+
				  '</td></tr>';
			break;
			
	}

	id = '#purchased' + itemType;
	$(id).after(row);

	$('.removeItem').bind({
    	mousedown:function () { $(this).addClass('removeItem-pressed'); },
	    mouseup:function () { $(this).removeClass('removeItem-pressed'); },
		click:function() {$(this).parent('td').parent('tr').remove();}

	});

}
