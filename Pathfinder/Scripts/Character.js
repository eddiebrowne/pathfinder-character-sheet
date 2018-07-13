var savedCharacters = new Object();

var character = new Object();
character.PlayerName = "";

// basic description
character.Description = Object();
character.Description.Name = "";
character.Description.Alignment = "";
character.Description.Race = "";
character.Description.Class = "";
character.Description.Level = 1;
character.Description.Deity = "";
character.Description.Homeland = "";
character.Description.Age = 0;
character.Description.Size = "";
character.Description.Gender = "";
character.Description.Height = "";
character.Description.Weight = 0;
character.Description.Hair = "";
character.Description.Eyes = "";

// abilities
character.Abilities = Object();
character.Abilities["previous"] = "str";
character.Abilities["str"] = 10;
character.Abilities["dex"] = 10;
character.Abilities["con"] = 10;
character.Abilities["int"] = 10;
character.Abilities["wis"] = 10;
character.Abilities["cha"] = 10;

// temp adjustment
character.Abilities.Temp = Object();
character.Abilities.Temp["str"] = 0;
character.Abilities.Temp["dex"] = 0;
character.Abilities.Temp["con"] = 0;
character.Abilities.Temp["int"] = 0;
character.Abilities.Temp["wis"] = 0;
character.Abilities.Temp["cha"] = 0;

// skill ranks
character.Skills = Object();
character.Skills["total"] = 0;
character.Skills["Acrobatics"] = 0;
character.Skills["Appraise"] = 0;
character.Skills["Bluff"] = 0;
character.Skills["Climb"] = 0;
character.Skills["Craft"] = 0;
character.Skills["Diplomacy"] = 0;
character.Skills["Disable Device"] = 0;
character.Skills["Disguise"] = 0;
character.Skills["Escape Artist"] = 0;
character.Skills["Fly"] = 0;
character.Skills["Handle Animal"] = 0;
character.Skills["Heal"] = 0;
character.Skills["Intimidate"] = 0;
character.Skills["Knowledge (arcana)"] = 0;
character.Skills["Knowledge (dungeoneering)"] = 0;
character.Skills["Knowledge (engineering)"] = 0;
character.Skills["Knowledge (geography)"] = 0;
character.Skills["Knowledge (history)"] = 0;
character.Skills["Knowledge (local)"] = 0;
character.Skills["Knowledge (nature)"] = 0;
character.Skills["Knowledge (nobility)"] = 0;
character.Skills["Knowledge (planes)"] = 0;
character.Skills["Knowledge (religion)"] = 0;
character.Skills["Linguistics"] = 0;
character.Skills["Perception"] = 0;
character.Skills["Perform"] = 0;
character.Skills["Profession"] = 0;
character.Skills["Ride"] = 0;
character.Skills["Sense Motive"] = 0;
character.Skills["Sleight of Hand"] = 0;
character.Skills["Spellcraft"] = 0;
character.Skills["Stealth"] = 0;
character.Skills["Survival"] = 0;
character.Skills["Swim"] = 0;
character.Skills["Use Magic Device"] = 0;

character.Equipment = new Object();
character.Equipment.Weapons = new Object();
character.Equipment.Weapons.Count = 0;

character.Equipment.Weapons.Melee = new Object();
character.Equipment.Weapons.Ranged = new Object();

character.Equipment.Weapons.Melee.Count = 0;
character.Equipment.Weapons.Ranged.Count = 0;

character.Equipment.Weapons.Add = function(weapon){
	if(weapon.Class == "ranged"){
		character.Equipment.Weapons.Ranged[character.Equipment.Weapons.Ranged.Count++] = weapon;
	}
	else{
		character.Equipment.Weapons.Melee[character.Equipment.Weapons.Count++] = weapon;
	}
}

character.Equipment.Ammo = new Object();

character.Equipment.Ammo.Add = function(ammoName, ammo){
	var weapons = character.Equipment.Weapons;
	var isFound = false;	
	for(var i = 0; i < weapons.Ranged.Count && !isFound; i++){
		if(weapons.Ranged[i].name = ammoName){
			var quantity = ammo[1];
			weapons.Ranged[i].ammo = quantity;
		}
	}
}

character.Equipment.Armor = new Array();
character.Equipment.Gear = new Array();



function UpdateName() {
    character.Description.Name = $(this).val();
    RemoveError($("#name"));
}

function RestoreCharacter()
{
	
}

function SaveCharacter() {
    ShowCharacterInformation();

    var json = JSON.stringify(character);
    var name = character.Description.Name;
    var saved = savedCharacters[name];
    if (!saved && name!="") 
    {
        savedCharacters[character.Description.Name] = json;
        var load = $("#loadCharacter");
        load.fadeIn('slow');
        var previousEntries = $("#loadList").html();
        $("#loadList").html(
			previousEntries +
            '<option value="' + name + '">' +
                name + ', Level ' +
                character.Description.Level + ' ' +
                character.Description.Race + ' ' +
                character.Description.Class +
            '</option>');
    }
}

function ShowCharacterInformation() {

    var skills = [];

    for (var skill in character.Skills) {

        if (skill != "total" && character.Skills[skill] > 0) {
            skills.push(skill + ": " + character.Skills[skill]);
        }
    }

    skills = skills.join("\n");
    var name = character.Description.Name;

    if (name == "") {
        $("#name").addClass("error");
        alert("Please enter a name");
    }
    else {
        alert(
            "You are " + character.Description.Name + ", a level " + character.Description.Level + " " + character.Description.Race + " " + character.Description.Class +
            "\nwith:\n" +
            character.Abilities["str"] + " strength,\n" +
            character.Abilities["dex"] + " dexterity,\n" +
            character.Abilities["con"] + " constitution,\n" +
            character.Abilities["int"] + " intelligence,\n" +
            character.Abilities["wis"] + " wisdom,\n" +
            character.Abilities["cha"] + " charisma\n" +
            "\nwith ranks in the following skills: \n" +
            skills
        );
    }

}
