function ClearRipple() {
    $(".ripple").removeClass("ripple");
}

function ClearFocus() {
    $(".focus").removeClass("focus");
}

﻿function AddRipple(element){
    $(element).addClass("ripple");
}

function RemoveRipple(element) {
    $(element).removeClass("ripple");
}

function AddFocus(element) {
    $(element).addClass("focus");
}

function AddError(element) {
    $(element).addClass("error");
}

function RemoveError(element) {
    $(element).removeClass("error");
}

function SetToZero() {
    var elements = $(".smallBox");
    elements.each(function () { 
		$(this).val(""+0); 
	});
	$('#abilityPurchasePoints').val(10+"");
}

$(document).ready(function () {
    // do stuff when DOM is ready   

	$('#characterSheet').tabs({selected:0});
	$('.accordion-widget').accordion({collapsible:true, autoHeight:false, active:false});

	$('.expandable').click(function() {
		var self = $(this);
		var buttonIcon = self.children('span');
		if(buttonIcon.hasClass('ui-icon-triangle-1-e'))
		{
			buttonIcon.removeClass('ui-icon-triangle-1-e');
			buttonIcon.addClass('ui-icon-triangle-1-s');
		}
		else
		{
			buttonIcon.removeClass('ui-icon-triangle-1-s');
			buttonIcon.addClass('ui-icon-triangle-1-e');			
		}
		self.next().slideToggle('slow');
		return false;
	});

    // zero scores
    SetToZero();
    ResetAbilityScores();
    ClearRipple();

    // attach ability score up/down buttons
    $(".upScoreBttn").each(function (i) { $(this).click(function () { ScoreUp(this); }); });
    $(".downScoreBttn").each(function (i) { $(this).click(function () { ScoreDown(this); }); });

    // attach adjustment score up/down buttons
    $(".upAdjBttn").click(AdjUp);
    $(".downAdjBttn").click(AdjDown);

    // attach skill rank up/down buttons
    $(".upRankBttn").click(RankUp);
    $(".downRankBttn").click(RankDown);

    // attach class and level
    $("#characterClassList").change(UpdateClass);
    $("#level").change(UpdateLevel);

    // attach race
    $("#characterRace").change(UpdateRace);
    $("#raceBonusList :radio").each(function (i) { $(this).click(function () { UpdateRaceBonus(this, i); }); });

    // attach alignment
    $("#alignment").click(UpdateAlignment);

    // attach item material update
    $(".itemMaterial").change(function (){UpdateMaterial(this);});
    
    // set readonly
    $('.readonly').attr("readonly", "true");

    // attach hover
    $(".section, #skillList tr, .itemsTable tr").hover(
        function () { $(this).addClass("sectionHighlight"); },
        function () { $(this).removeClass("sectionHighlight"); }
    );
	$(".nohighlight").unbind('mouseenter mouseleave');

    // nifty buttons
    $(".downBttn").mousedown(function () { $(this).attr("src", "../Images/downButton-pressed.jpg"); });
    $(".downBttn").mouseup(function () { $(this).attr("src", "../Images/downButton.jpg"); });
    $(".upBttn").mousedown(function () { $(this).attr("src", "../Images/upButton-pressed.jpg"); });
    $(".upBttn").mouseup(function () { $(this).attr("src", "../Images/upButton.jpg"); });
    $(".addItem").mousedown(function () { $(this).addClass('addItem-pressed'); });
    $(".addItem").mouseup(function () { $(this).removeClass('addItem-pressed'); });

    // attach name
    $("#name").change(UpdateName);

	// attach campaign type
	$('#campaignType').change(UpdatePurchasePoints);


	// attach buy buttons
	$('.addItem').click(PurchaseItem);

    // create character button
    $("#createCharacterBttn").click(SaveCharacter);
});

