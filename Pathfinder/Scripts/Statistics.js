function UpdateStats(ability) {
    FindAndUpdateSkillScores(ability);

    switch (ability) {
        case "str":            
            UpdateStat("cmb", 0);
            UpdateStat("cmd", 10);
            break;
        case "cha":
            break;
        case "dex":
            UpdateStat("init", 0);
            UpdateStat("ac", 10);
            UpdateTouchAc();
            UpdateStat("ref", 0);
            UpdateStat("cmd", 10);
            break;
        case "con":
            UpdateStat("fort", 0);
            break;
        case "int":
            break;
        case "wis":
            UpdateStat("will", 0);
            break;
    } 
}

function UpdateTouchAc() {
    // exclude armor and shield
    var values = $(".ac");
    var sum = 10;
    values.each(function (i) {
        if (i > 1) {
            sum = sum + parseInt($(this).val());
        }
    });
    var touchAc = $("#touchAC");
    touchAc.val(sum);
	AddRipple(touchAc);
}

function UpdateFlatFootedAc() {
    // exclude dex
    var values = $(".ac");
    var sum = 10;
    values.each(function (i) {
        if (i != 2) {
            sum = sum + parseInt($(this).val());
        }
    });
    var ffAc = $("#ffAC");
    ffAc.val(sum);
	AddRipple(ffAc);
}

function SetScores(stats) {
    var baseAttack = $(".baseAttack");
    var fortBase = $("#fortBase");
    var refBase = $("#refBase");
    var willBase = $("#willBase");

    baseAttack.val(stats[0]);
    fortBase.val(stats[1]);
    refBase.val(stats[2]);
    willBase.val(stats[3]);

	AddRipple(baseAttack);
	AddRipple(fortBase);
	AddRipple(refBase);
	AddRipple(willBase);

    UpdateAttackBonuses();
    UpdateSavingThrows();
}

function UpdateAttackBonuses() {
    UpdateStat("cmb", 0);
    UpdateStat("cmd", 10);
}

function UpdateSavingThrows() {
    UpdateStat("ref", 0);
    UpdateStat("fort", 0);
    UpdateStat("will", 0);
}

function UpdateStat(className, base) {
    var values = $("." + className);        
    var sum = base;
    values.each(function (i) { sum = sum + parseInt($(this).val()); });
    var name = ("#" + className + "Total");
    $(name).val(sum);
    AddRipple($(name));
    UpdateStats(className);
};

