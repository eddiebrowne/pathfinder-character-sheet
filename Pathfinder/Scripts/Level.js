function UpdateLevel() {
    ClearFocus();
    ClearRipple();

    var prevLevel = character.Description.Level;

	AddFocus($(":focus"));

    var selectedClass = character.Description.Class;
    
    if (selectedClass != "") {
        var level = $("#level :selected").attr("value");
		var levelIndex = level - 1;

        var stats = ClassTable[selectedClass][0][levelIndex];
        SetScores(stats);

        var classSkillPointsIndex = 1;

        var skillPoints = (ClassTable[selectedClass][classSkillPointsIndex] * level) - character.Skills["total"];

        var skillPointsBox = $("#skillPoints");

        if (skillPoints < 0) {
            AddError(skillPointsBox);
        }
        else {
            RemoveError(skillPointsBox);
            AddRipple(skillPointsBox);
        }

        var skills = $("#skillList :checkbox");
        skills.each(
            function () {
                var skill = $($(this).parent("td").parent("tr").children("td")[6]).children("input");
                if (skill.val() > level) {
                    AddError(skill);
                }
                else {
                    RemoveError(skill);
                }
            }
        );

        character.Description.Level = level;
        skillPointsBox.val(skillPoints + parseInt($("#intMod").val()) + "");
    }
}
