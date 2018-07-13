function ApplyAlignmentRestrictions(selectedClass) {
    // alignment restrictions
    switch (selectedClass) {
        case "Barbarian":
            SetAlignments(false, "Lawful");
            break;
        case "Druid":
            SetAlignments(true, "Neutral");
            break;
        case "Monk":
            SetAlignments(true, "Lawful");
            break;
        case "Paladin":
            SetAlignments(true, "Lawful Good");
            break;
        default:
            ResetAlignments();
    }
}

function UpdateAlignment() {
    ClearFocus();
	AddFocus($(":focus"));
}

function ResetAlignments() {
    // re-enable all items
    var listItems = $("#alignment option");
    listItems.each(function () { $(this).removeAttr("disabled"); });
}

function SetAlignments(isAllowed, keyword) {
    var alignmentList = $("#alignment");
    AddRipple(alignmentList);

    var listItems = $("#alignment option");
    var selector = '#alignment option[value*="' + keyword + '"]';

    // grab items
    var filteredItems = $(selector);

    ResetAlignments();

    if (isAllowed) {
        // disable everything
        listItems.each(function () { $(this).attr("disabled", "true"); });

        // re-enable allowed items
        filteredItems.each(function () { $(this).removeAttr("disabled"); });
    }
    else {
        $(listItems[0]).attr("disabled", "true");
        
        // disable disallowed items
        filteredItems.each(function () { $(this).attr("disabled", "true"); });
    }

    selector = $('#alignment :not(option[disabled])')[0];

    var current = $("#alignment :selected");

    if (current.attr("disabled") == "disabled") {
        $(selector).attr("selected", "true");
    }
};
