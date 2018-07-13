function AdjUp() {

    ClearFocus();
    
    var score = $(this).siblings(":input");
    var ability = score.attr("id").slice(0, 3);
    AddFocus(score);

    character.Abilities.Temp[ability]++;
    var currentVal = character.Abilities.Temp[ability];

    UpdateAdj(score, currentVal);
};

function AdjDown() {

    ClearFocus();
    
    var score = $(this).siblings(":input");
    var ability = score.attr("id").slice(0, 3);
    AddFocus(score);

    character.Abilities.Temp[ability]--;
    var currentVal = character.Abilities.Temp[ability];

    UpdateAdj(score, currentVal);
};

function UpdateAdj(score, currentVal) {

    ClearRipple();

    var ability = score.attr("id").slice(0, 3);
    var adjModifier = $("." + ability + "AdjMod");
    var abilityModifier = $("#" + ability + "Mod");
    var abilityModScore = parseInt(abilityModifier.val());

    var mods = $("." + ability + "Mod");

    score.val(currentVal + "");

    if (currentVal == 0) {
        adjModifier.val(currentVal);
        mods.val(abilityModScore);
    }
    else {
        var total = abilityModScore + currentVal;
        adjModifier.val(ComputeModifier(total));
        mods.val(total);
        abilityModifier.val(abilityModScore);
    }
    AddRipple(adjModifier);
    AddRipple(mods);
	RemoveRipple(abilityModifier);

    UpdateStats(ability);
};
