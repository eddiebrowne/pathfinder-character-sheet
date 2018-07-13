
var ClassSkills = Array();
ClassSkills["Alchemist"] = Array(
"Appraise",
"Craft",
"Disable Device",
"Fly",
"Heal",
"Knowledge (arcana)",
"Knowledge (nature)",
"Perception",
"Profession",
"Sleight of Hand",
"Spellcraft",
"Survival",
"Use Magic Device"
);

ClassSkills["Barbarian"] = Array(
"Acrobatics",
"Climb",
"Craft",
"Handle Animal",
"Intimidate",
"Knowledge (nature)",
"Perception",
"Ride",
"Survival",
"Swim"
);

ClassSkills["Bard"]= Array(
"Acrobatics",
"Appraise",
"Bluff",
"Climb",
"Craft",
"Diplomacy",
"Disguise",
"Escape Artist",
"Intimidate",
"Knowledge (arcana)",
"Knowledge (dungeoneering)",
"Knowledge (engineering)",
"Knowledge (geography)",
"Knowledge (history)",
"Knowledge (local)",
"Knowledge (nature)",
"Knowledge (nobility)",
"Knowledge (planes)",
"Knowledge (religion)",
"Linguistics",
"Perception",
"Perform",
"Profession",
"Sense Motive",
"Sleight of Hand",
"Spellcraft",
"Stealth",
"Use Magic Device"
);

ClassSkills["Cleric"] = Array(
"Appraise",
"Craft",
"Diplomacy",
"Heal",
"Knowledge (arcana)",
"Knowledge (history)",
"Knowledge (local)",
"Knowledge (nobility)",
"Knowledge (planes)",
"Knowledge (religion)",
"Linguistics",
"Profession",
"Sense Motive",
"Spellcraft"
);

ClassSkills["Druid"] = Array(
"Climb",
"Craft",
"Fly",
"Handle Animal",
"Heal",
"Intimidate",
"Knowledge (geography)",
"Knowledge (nature)",
"Perception",
"Profession",
"Ride",
"Spellcraft",
"Survival",
"Swim"
);

ClassSkills["Fighter"] = Array(
"Climb",
"Craft",
"Handle Animal",
"Intimidate",
"Knowledge (dungeoneering)",
"Knowledge (engineering)",
"Profession",
"Ride",
"Survival",
"Swim"
);

ClassSkills["Gunslinger"] = Array(
"Acrobatics",
"Bluff",
"Climb",
"Craft",
"Handle Animal",
"Heal",
"Intimidate",
"Knowledge (engineering)",
"Knowledge (local)",
"Perception",
"Profession",
"Ride",
"Sleight of Hand",
"Survival",
"Swim"
);

ClassSkills["Monk"] = Array(
"Acrobatics",
"Climb",
"Craft",
"Escape Artist",
"Knowledge (history)",
"Knowledge (religion)",
"Perception",
"Perform",
"Profession",
"Ride",
"Sense Motive",
"Stealth",
"Swim"
);

ClassSkills["Paladin"] = Array(
"Craft",
"Diplomacy",
"Handle Animal",
"Heal",
"Knowledge (nobility)",
"Knowledge (religion)",
"Profession",
"Ride",
"Sense Motive",
"Spellcraft"
);

ClassSkills["Ranger"] = Array(
"Climb",
"Craft",
"Handle Animal",
"Heal",
"Intimidate",
"Knowledge (dungeoneering)",
"Knowledge (geography)",
"Knowledge (nature)",
"Perception",
"Profession",
"Ride",
"Spellcraft",
"Stealth",
"Survival",
"Swim"
);

ClassSkills["Rogue"] = Array(
"Acrobatics",
"Appraise",
"Bluff",
"Climb",
"Craft",
"Diplomacy",
"Disable Device",
"Disguise",
"Escape Artist",
"Intimidate",
"Knowledge (dungeoneering)",
"Knowledge (local)",
"Linguistics",
"Perception",
"Perform",
"Profession",
"Sense Motive",
"Sleight of Hand",
"Stealth",
"Swim",
"Use Magic Device"
);

ClassSkills["Sorcerer"] = Array(
"Appraise",
"Bluff",
"Craft",
"Fly",
"Intimidate",
"Knowledge (arcana)",
"Profession",
"Spellcraft",
"Use Magic Device"
);

ClassSkills["Wizard"] = Array(
"Appraise",
"Craft",
"Fly",
"Knowledge (arcana)",
"Knowledge (dungeoneering)",
"Knowledge (engineering)",
"Knowledge (geography)",
"Knowledge (history)",
"Knowledge (local)",
"Knowledge (nature)",
"Knowledge (nobility)",
"Knowledge (planes)",
"Knowledge (religion)",
"Linguistics",
"Profession",
"Sleight of Hand"
);


// Skill    Untrained	Ability     ArmorCheck
var SkillsTable = Array();

SkillsTable["Acrobatics"] = Array(true, "dex", true);
SkillsTable["Appraise"] = Array(true, "int", false);
SkillsTable["Bluff"] = Array(true, "cha", false);
SkillsTable["Climb"] = Array(true, "str", true);
SkillsTable["Craft"] = Array(true, "int", false);
SkillsTable["Diplomacy"] = Array(true, "cha", false);
SkillsTable["Disable Device"] = Array(false, "dex", true);
SkillsTable["Disguise"] = Array(true, "cha", false);
SkillsTable["Escape Artist"] = Array(true, "dex", true);
SkillsTable["Fly"] = Array(true, "dex", true);
SkillsTable["Handle Animal"] = Array(false, "cha", false);
SkillsTable["Heal"] = Array(true, "wis", false);
SkillsTable["Intimidate"] = Array(true, "cha", false);
SkillsTable["Knowledge (arcana)"] = Array(false,	"int", false);
SkillsTable["Knowledge (dungeoneering)"] = Array(false,	"int", false);
SkillsTable["Knowledge (engineering)"] = Array(false, "int", false);
SkillsTable["Knowledge (geography)"] = Array(false, "int", false);
SkillsTable["Knowledge (history)"] = Array(false, "int", false);
SkillsTable["Knowledge (local)"] = Array(false, "int", false);
SkillsTable["Knowledge (nature)"] = Array(false, "int", false);
SkillsTable["Knowledge (nobility)"] = Array(false, "int", false);
SkillsTable["Knowledge (planes)"] = Array(false, "int", false);
SkillsTable["Knowledge (religion)"] = Array(false, "int", false);
SkillsTable["Linguistics"] = Array(false, "int", false);
SkillsTable["Perception"] = Array(true, "wis", false);
SkillsTable["Perform"] = Array(true, "cha", false);
SkillsTable["Profession"] = Array(false, "wis", false);
SkillsTable["Ride"] = Array(true, "dex", true);
SkillsTable["Sense Motive"] = Array(true, "wis", false);
SkillsTable["Sleight of Hand"] = Array(false, "dex", true);
SkillsTable["Spellcraft"] = Array(false, "int", false);
SkillsTable["Stealth"] = Array(true, "dex", true);
SkillsTable["Survival"] = Array(true, "wis", false);
SkillsTable["Swim"] = Array(true, "str", true);
SkillsTable["Use Magic Device"] = Array(false, "cha", false);

