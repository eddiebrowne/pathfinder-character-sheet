function RankUp() {
    ClearFocus();
    ClearRipple();

    var element = $(this).parent("td").children("input");
    var value = parseInt(element.val());

    var cells = $(this).parent("td").parent("tr").children("td").children("input");

    var skillPointsBox = $("#skillPoints");
    var skillPoints = parseInt(skillPointsBox.val());
    AddRipple(skillPointsBox);

    var level = character.Description.Level;

	var skillNameIndex = 2;
    var skill = $($(cells[0]).parent("td").parent("tr").children("td")[skillNameIndex]).html();

    var isChecked = cells.filter(":checked").val() == "on";
	
    // check if untrained
    var untrainedIndex = 0;
    var isTrained = SkillsTable[skill][untrainedIndex] || isChecked;

    if (isTrained && skillPoints > 0 && value < level) {
        element.val(++value);
        skillPointsBox.val(skillPoints - 1 + "");
        AddFocus(element);
        
        if (isChecked) {
            var miscMod = $(cells[4]);
            miscMod.val(3);
            AddRipple(miscMod);
        }
        UpdateSkillScores(cells);
        character.Skills["total"]++;
        
        character.Skills[skill]++;
    }
}

function RankDown() {

    ClearFocus();
    ClearRipple();

    var element = $(this).parent("td").children("input");
    var value = parseInt(element.val());

    var skillPointsBox = $("#skillPoints");
    var skillPoints = parseInt(skillPointsBox.val());
    AddRipple(skillPointsBox);

    var cells = $(this).parent("td").parent("tr").children("td").children("input");

    if (value > 0) {
        element.val(--value);
        skillPointsBox.val(skillPoints + 1 + "");
        AddFocus(element);

        if (value == 0 && cells.filter(":checked").val() == "on") {
            var miscMod = $(cells[4]);
            miscMod.val(0);
            AddRipple(miscMod);
        }
        var level = character.Description.Level;

        if (value <= level) {
            RemoveError(element);
        }
        else {
            AddError(element);
        }

        UpdateSkillScores(cells);
        character.Skills["total"]--;

		var skillNameIndex = 2;
	    var skill = $($(cells[0]).parent("td").parent("tr").children("td")[skillNameIndex]).html();

        character.Skills[skill]--;
    }
}

function FindAndUpdateSkillScores(ability) {

    var modBoxes = $("#skillList ." + ability + "Mod");
    
    modBoxes.each(function (i) {
        var cells = $(this).parent("td").parent("tr").children("td").children("input");
        UpdateSkillScores(cells);
    });
}

function UpdateClassSkills() {
    var selectedClass = character.Description.Class;
    
    if (selectedClass != "") {
		var skills = ClassSkills[selectedClass];
		var skillIndex = 0;

		// grab skill table skills
		var rows = $("#skillList tr");
		var skillBoxIndex = 1;

		rows.each(
		    function (i) {
		        if (i != skillBoxIndex) {
		            var currentRow = $(this);
		            var cells = currentRow.children("td");
		            var input = $(cells[0]).children("input");
					var nameIndex = 2;
		            if (skills[skillIndex] == $(cells[nameIndex]).text()) {
		                input.removeAttr("disabled");
		                input.attr("checked", true);
		                input.attr("disabled", true);
						input.css("background-color","white");
		                skillIndex++;
		            }
		            else {
		                input.removeAttr("disabled");
		                input.attr("checked", false);
		                input.attr("disabled", true);
						input.css("background-color","white");
		            }
		        }
		    }
		);
    }
}

function UpdateSkillScores(cells) {   
    var totalIndex = 1;
    var totalCell = $(cells[totalIndex]);
    var sum = 0;
    cells.each(
        function (i) {
            if (i > 1) {
                sum+= parseInt($(this).val());
            } 
        });
    totalCell.val(sum + "");
    AddRipple(totalCell);
}
