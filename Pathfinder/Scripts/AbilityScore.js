var abilityScoreCosts = Array();
abilityScoreCosts[7] = -4;
abilityScoreCosts[8] = -2;
abilityScoreCosts[9] = -1;
abilityScoreCosts[10] =	0;
abilityScoreCosts[11] =	1;
abilityScoreCosts[12] =	2;
abilityScoreCosts[13] =	3;
abilityScoreCosts[14] =	5;
abilityScoreCosts[15] =	7;
abilityScoreCosts[16] =	10;
abilityScoreCosts[17] =	13;
abilityScoreCosts[18] =	17;


function ResetAbilityScores(){
    var abilities = 
    Array (
        "cha",  
        "con",  
        "dex",  
        "int",
        "str",
        "wis"
    );

    $(abilities).each(function (i) {
        character.Abilities[this] = 10;
        var value = character.Abilities[this];
        var score = $("#" + this + "Score");
        score.val(value);
        AddRipple(score);

        UpdateModifier(this, value);
    });
}

function UpdatePurchasePoints() {

	UpdateRace();

	RemoveRipple($("#characterSize"));
	ClearFocus();

	var selection = $(this).val();	
	var purchasePoints = $('#abilityPurchasePoints');
	switch(selection){

		case "low":
			purchasePoints.val(10+"");	
			break;
		case "standard":
			purchasePoints.val(15+"");	
			break;
		case "high":
			purchasePoints.val(20+"");	
			break;
		case "epic":
			purchasePoints.val(25+"");	
			break;
	}
	$(this).addClass('focus');
	AddRipple(purchasePoints);
}

function ComputeModifier(score) {
    var abilityModifier = Math.floor(score / 2) - 5;
    return abilityModifier;
};

function UpdateModifier(ability, currentVal) {
    
    var modifier = ComputeModifier(currentVal);
    var abilityModifier = $("#" + ability + "Mod");

    abilityModifier.val(modifier + "");
    AddRipple(abilityModifier);

	UpdateAbilityModifiers(ability, modifier)
    UpdateStats(ability);

    return modifier;
}

function UpdateAbilityModifiers(ability, value){
	var mods = $("." + ability + "Mod");
	mods.val(value);
	AddRipple(mods);
}

function UpdateScore(ability, change) {

    character.Abilities[ability]+=change;
    var value = character.Abilities[ability];
    var score = $("#"+ability+"Score");

    score.val(value);
    AddFocus(score);
    
    UpdateModifier(ability, value);
    
	var adjustment = $("#" + ability + "Adj");
    var adj = adjustment.val();

    if (adj != 0) {
        var adjMod = $("." + ability + "AdjMod");
        var adjValue = character.Abilities.Temp[ability];

        var adjustedTotal = ComputeModifier(adjValue + value);

		UpdateAbilityModifiers(ability, adjustedTotal);

        adjMod.val(adjustedTotal + "");
        AddRipple(adjMod);
    }

    UpdateStats(ability);
};

function GetAbilityName(score){
	return score.attr("id").slice(0, 3);
}

function ScoreUp(item) {

    ClearFocus();
    var score = $(item).siblings(":input");
    var ability = GetAbilityName(score);
    var currentVal = character.Abilities[ability];

	var purchasePoints = $('#abilityPurchasePoints');

	var purchasePointsRemaining = parseInt(purchasePoints.val());
	var cost = abilityScoreCosts[currentVal+1] - abilityScoreCosts[currentVal];

	var canBuy = cost <= purchasePointsRemaining;

    if (canBuy && currentVal < 18) {
        ClearRipple();

		purchasePoints.val((purchasePointsRemaining - cost) + "");
		AddRipple(purchasePoints);
        UpdateScore(ability, 1);
    }
};

function ScoreDown(item) {

    ClearFocus();
    var score = $(item).siblings(":input");
    var ability = GetAbilityName(score);
    var currentVal = character.Abilities[ability];

    if (currentVal > 7) {
        ClearRipple();
	
		var purchasePoints = $('#abilityPurchasePoints');
		var purchasePointsRemaining = parseInt(purchasePoints.val());
		var cost = abilityScoreCosts[currentVal] - abilityScoreCosts[currentVal-1];

		purchasePoints.val((purchasePointsRemaining + Math.abs(cost)) + "");
		AddRipple(purchasePoints);
        UpdateScore(ability, -1);
    }
};

function AdjUp(){
    ClearFocus();
    
    var score = $(this).siblings(":input");
    var ability = GetAbilityName(score);

    character.Abilities.Temp[ability]++;
    UpdateAdj(score, ability);
};

function AdjDown(){
    ClearFocus();
    
    var score = $(this).siblings(":input");
    var ability = GetAbilityName(score);

    character.Abilities.Temp[ability]--;
    UpdateAdj(score, ability);
};

function UpdateAdj(score, ability) {

    ClearRipple();

    var currentVal = character.Abilities.Temp[ability];

    var adjustment = $("." + ability + "AdjMod");
    var abilityModifier = $("#" + ability + "Mod");
    var mods = $("." + ability + "Mod");

    var abilityModScore = parseInt(abilityModifier.val());

    if (currentVal == 0) {
		adjustment.val(currentVal);
        mods.val(abilityModScore);
    }
    else {
        var total = ComputeModifier(character.Abilities.Temp[ability] + character.Abilities[ability]);
        adjustment.val(total);
        mods.val(total);
        abilityModifier.val(abilityModScore);
    }

    score.val(currentVal + "");
    AddFocus(score);

	AddRipple(adjustment);
    AddRipple(mods);

    UpdateStats(ability);
};
