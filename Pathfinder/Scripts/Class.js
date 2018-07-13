function UpdateClass() {
    ClearFocus();
    ClearRipple();

	AddFocus($(":focus"));

    var selectedClass = $("#characterClassList :selected").attr("value");
    if (selectedClass != "") {
		character.Description.Class = selectedClass;
        
		var level = character.Description.Level;
        var levelIndex = level - 1;
        var arrayIndex = 0;

        var stats = ClassTable[selectedClass][arrayIndex][levelIndex];
        
        SetScores(stats);
        UpdateClassSkills();
        UpdateLevel();
        ApplyAlignmentRestrictions(selectedClass);
    }
    else {
        ResetAlignments();
        SetScores(Array(0, 0, 0, 0));
    }
};
