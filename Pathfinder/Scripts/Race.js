function UpdateRace() {
    ClearFocus();
    ClearRipple();

	AddFocus($(":focus"));
    var currentRace = $("#characterRace :selected").val();
    var sizeMod = $(".sizeMod");
    var size = $("#characterSize");

    AddRipple(sizeMod);
    AddRipple(size);
    
    var ac = $("#acSizeMod");
    var raceBonusDialog = $("#raceBonusDialog");

    ResetAbilityScores();

    var smallAcBonus = 1;
    var smallCmbBonus = -1;

    var mediumBonus = 0;

    character.Description.Race = currentRace;

    switch (currentRace) 
    {
        case "Dwarf":
            // con +2
            // wis +2
            // cha -2
            UpdateScore("con", 2);
            UpdateScore("wis", 2);
            UpdateScore("cha", -2);
            raceBonusDialog.fadeOut("slow");

            sizeMod.val(mediumBonus);
            size.val("Medium");
            break;
        case "Elf":
            // +2 dex
            // +2 int
            // -2 con
            UpdateScore("dex", 2);
            UpdateScore("int", 2);
            UpdateScore("con", -2);
            raceBonusDialog.fadeOut("slow");

            sizeMod.val(mediumBonus);
            size.val("Medium");
            break;
        case "Gnome":
            // -2 str
            // +2 cha
            // +2 con
            UpdateScore("str", -2);
            UpdateScore("cha", 2);
            UpdateScore("con", 2);
            raceBonusDialog.fadeOut("slow");

            // small creature
            sizeMod.val(smallCmbBonus);
            ac.val(smallAcBonus);
            size.val("Small");
            break;
        case "Half-Elf":
        case "Half-Orc":
        case "Human":
            // +2 to any ability
            raceBonusDialog.fadeIn("slow");

            var item = $("#raceBonusList :checked");
            var ability = item.val();

            UpdateScore(ability, 2);

            sizeMod.val(0);
            size.val("Medium");
            break;
        case "Halfling":
            // +2 dex
            // +2 cha
            // -2 str
            UpdateScore("dex", 2);
            UpdateScore("cha", 2);
            UpdateScore("str", -2);
            raceBonusDialog.fadeOut("slow");

            // small creature
            sizeMod.val(smallCmbBonus);
            ac.val(smallAcBonus);
            size.val("Small");
            break;
    }

    UpdateFlatFootedAc();    
}

function UpdateRaceBonus(item, i) {
    ClearFocus();
    ClearRipple();

    var previous = character.Abilities["previous"];
    var ability = $(item).val();
    var oldScore = $("#" + previous + "Score");

    AddRipple(oldScore);
    UpdateScore(previous, -2);
    character.Abilities["previous"] = ability;
    UpdateScore(ability, 2);
}
