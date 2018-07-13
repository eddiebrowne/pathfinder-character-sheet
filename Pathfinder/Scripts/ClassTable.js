//         (attack fort ref will), base skill points
var ClassTable = new Array();
ClassTable["Alchemist"] =
Array(
    Array(
        Array(0, 2, 2, 0),
        Array(1, 3, 3, 0),
        Array(2, 3, 3, 1),
        Array(3, 4, 4, 1),
        Array(3, 4, 4, 1),
        Array(4, 5, 5, 2),
        Array(5, 5, 5, 2),
        Array(6, 6, 6, 2),
        Array(6, 6, 6, 3),
        Array(7, 7, 7, 3),
        Array(8, 7, 7, 3),
        Array(9, 8, 8, 4),
        Array(9, 8, 8, 4),
        Array(10, 9, 9, 4),
        Array(11, 9, 9, 5),
        Array(12, 10, 10, 5),
        Array(12, 10, 10, 5),
        Array(13, 11, 11, 6),
        Array(14, 11, 11, 6),
        Array(15, 12, 12, 6)
    ),
    4
);

ClassTable["Barbarian"] =
Array(
    Array(
        Array(1, 2, 0, 0),
        Array(2, 3, 0, 0),
        Array(3, 3, 1, 1),
        Array(4, 4, 1, 1),
        Array(5, 4, 1, 1),
        Array(6, 5, 2, 2),
        Array(7, 5, 2, 2),
        Array(8, 6, 2, 2),
        Array(9, 6, 3, 3),
        Array(10, 7, 3, 3),
        Array(11, 7, 3, 3),
        Array(12, 8, 4, 4),
        Array(13, 8, 4, 4),
        Array(14, 9, 4, 4),
        Array(15, 9, 5, 5),
        Array(16, 10, 5, 5),
        Array(17, 10, 5, 5),
        Array(18, 11, 6, 6),
        Array(19, 11, 6, 6),
        Array(20, 12, 6, 6)
    ),4);

ClassTable["Bard"] =
Array(
    Array(
        Array(0, 0, 2, 2),
        Array(1, 0, 3, 3),
        Array(2, 1, 3, 3),
        Array(3, 1, 4, 4),
        Array(3, 1, 4, 4),
        Array(4, 2, 5, 5),
        Array(5, 2, 5, 5),
        Array(6, 2, 6, 6),
        Array(6, 3, 6, 6),
        Array(7, 3, 7, 7),
        Array(8, 3, 7, 7),
        Array(9, 4, 8, 8),
        Array(9, 4, 8, 8),
        Array(10, 4, 9, 9),
        Array(11, 5, 9, 9),
        Array(12, 5, 10, 10),
        Array(12, 5, 10, 10),
        Array(13, 6, 11, 11),
        Array(14, 6, 11, 11),
        Array(15, 6, 12, 12)
    ),6);

ClassTable["Cleric"] =
Array(
    Array(
        Array(0, 2, 0, 2),
        Array(1, 3, 0, 3),
        Array(2, 3, 1, 3),
        Array(3, 4, 1, 4),
        Array(3, 4, 1, 4),
        Array(4, 5, 2, 5),
        Array(5, 5, 2, 5),
        Array(6, 6, 2, 6),
        Array(6, 6, 3, 6),
        Array(7, 7, 3, 7),
        Array(8, 7, 3, 7),
        Array(9, 8, 4, 8),
        Array(9, 8, 4, 8),
        Array(10, 9, 4, 9),
        Array(11, 9, 5, 9),
        Array(12, 10, 5, 10),
        Array(12, 10, 5, 10),
        Array(13, 11, 6, 11),
        Array(14, 11, 6, 11),
        Array(15, 12, 6, 12)
    ),2);

ClassTable["Druid"] =
Array(
    Array(
        Array(0, 2, 0, 2),
        Array(1, 3, 0, 3),
        Array(2, 3, 1, 3),
        Array(3, 4, 1, 4),
        Array(3, 4, 1, 4),
        Array(4, 5, 2, 5),
        Array(5, 5, 2, 5),
        Array(6, 6, 2, 6),
        Array(6, 6, 3, 6),
        Array(7, 7, 3, 7),
        Array(8, 7, 3, 7),
        Array(9, 8, 4, 8),
        Array(9, 8, 4, 8),
        Array(10, 9, 4, 9),
        Array(11, 9, 5, 9),
        Array(12, 10, 5, 10),
        Array(12, 10, 5, 10),
        Array(13, 11, 6, 11),
        Array(14, 11, 6, 11),
        Array(15, 12, 6, 12)
    ),4);
ClassTable["Fighter"] =
Array(
    Array(
        Array(1, 2, 0, 0),
        Array(2, 3, 0, 0),
        Array(3, 3, 1, 1),
        Array(4, 4, 1, 1),
        Array(5, 4, 1, 1),
        Array(6, 5, 2, 2),
        Array(7, 5, 2, 2),
        Array(8, 6, 2, 2),
        Array(9, 6, 3, 3),
        Array(10, 7, 3, 3),
        Array(11, 7, 3, 3),
        Array(12, 8, 4, 4),
        Array(13, 8, 4, 4),
        Array(14, 9, 4, 4),
        Array(15, 9, 5, 5),
        Array(16, 10, 5, 5),
        Array(17, 10, 5, 5),
        Array(18, 11, 6, 6),
        Array(19, 11, 6, 6),
        Array(20, 12, 6, 6)
    ),2);
ClassTable["Gunslinger"] =
Array(
    Array(
        Array(1, 2, 2, 0),
        Array(2, 3, 3, 0),
        Array(3, 3, 3, 1),
        Array(4, 4, 4, 1),
        Array(5, 4, 4, 1),
        Array(6, 5, 5, 2),
        Array(7, 5, 5, 2),
        Array(8, 6, 6, 2),
        Array(9, 6, 6, 3),
        Array(10, 7, 7, 3),
        Array(11, 7, 7, 3),
        Array(12, 8, 8, 4),
        Array(13, 8, 8, 4),
        Array(14, 9, 9, 4),
        Array(15, 9, 9, 5),
        Array(16, 10, 10, 5),
        Array(17, 10, 10, 5),
        Array(18, 11, 11, 6),
        Array(19, 11, 11, 6),
        Array(20, 12, 12, 6)
    ), 4);

ClassTable["Monk"] =
Array(
    Array(
        Array(0, 2, 2, 2),
        Array(1, 3, 3, 3),
        Array(2, 3, 3, 3),
        Array(3, 4, 4, 4),
        Array(3, 4, 4, 4),
        Array(4, 5, 5, 5),
        Array(5, 5, 5, 5),
        Array(6, 6, 6, 6),
        Array(6, 6, 6, 6),
        Array(7, 7, 7, 7),
        Array(8, 7, 7, 7),
        Array(9, 8, 8, 8),
        Array(9, 8, 8, 8),
        Array(10, 9, 9, 9),
        Array(11, 9, 9, 9),
        Array(12, 10, 10, 10),
        Array(12, 10, 10, 10),
        Array(13, 11, 11, 11),
        Array(14, 11, 11, 11),
        Array(15, 12, 12, 12)
    ), 4);

ClassTable["Paladin"] =
Array(
    Array(
        Array(1, 2, 0, 2),
        Array(2, 3, 0, 3),
        Array(3, 3, 1, 3),
        Array(4, 4, 1, 4),
        Array(5, 4, 1, 4),
        Array(6, 5, 2, 5),
        Array(7, 5, 2, 5),
        Array(8, 6, 2, 6),
        Array(9, 6, 3, 6),
        Array(10, 7, 3, 7),
        Array(11, 7, 3, 7),
        Array(12, 8, 4, 8),
        Array(13, 8, 4, 8),
        Array(14, 9, 4, 9),
        Array(15, 9, 5, 9),
        Array(16, 10, 5, 10),
        Array(17, 10, 5, 10),
        Array(18, 11, 6, 11),
        Array(19, 11, 6, 11),
        Array(20, 12, 6, 12)
    ),2);

ClassTable["Ranger"] =
Array(
    Array(
        Array(1, 2, 2, 0),
        Array(2, 3, 3, 0),
        Array(3, 3, 3, 1),
        Array(4, 4, 4, 1),
        Array(5, 4, 4, 1),
        Array(6, 5, 5, 2),
        Array(7, 5, 5, 2),
        Array(8, 6, 6, 2),
        Array(9, 6, 6, 3),
        Array(10, 7, 7, 3),
        Array(11, 7, 7, 3),
        Array(12, 8, 8, 4),
        Array(13, 8, 8, 4),
        Array(14, 9, 9, 4),
        Array(15, 9, 9, 5),
        Array(16, 10, 10, 5),
        Array(17, 10, 10, 5),
        Array(18, 11, 11, 6),
        Array(19, 11, 11, 6),
        Array(20, 12, 12, 6)
    ), 6);

ClassTable["Rogue"] =
Array(
    Array(
        Array(0, 0, 2, 0),
        Array(1, 0, 3, 0),
        Array(2, 1, 3, 1),
        Array(3, 1, 4, 1),
        Array(3, 1, 4, 1),
        Array(4, 2, 5, 2),
        Array(5, 2, 5, 2),
        Array(6, 2, 6, 2),
        Array(6, 3, 6, 3),
        Array(7, 3, 7, 3),
        Array(8, 3, 7, 3),
        Array(9, 4, 8, 4),
        Array(9, 4, 8, 4),
        Array(10, 4, 9, 4),
        Array(11, 5, 9, 5),
        Array(12, 5, 10, 5),
        Array(12, 5, 10, 5),
        Array(13, 6, 11, 6),
        Array(14, 6, 11, 6),
        Array(15, 6, 12, 6)
    ),8);

ClassTable["Sorcerer"] =
Array(
    Array(
        Array(0, 0, 0, 2),
        Array(1, 0, 0, 3),
        Array(1, 1, 1, 3),
        Array(2, 1, 1, 4),
        Array(2, 1, 1, 4),
        Array(3, 2, 2, 5),
        Array(3, 2, 2, 5),
        Array(4, 2, 2, 6),
        Array(4, 3, 3, 6),
        Array(5, 3, 3, 7),
        Array(5, 3, 3, 7),
        Array(6, 4, 4, 8),
        Array(6, 4, 4, 8),
        Array(7, 4, 4, 9),
        Array(7, 5, 5, 9),
        Array(8, 5, 5, 10),
        Array(8, 5, 5, 10),
        Array(9, 6, 6, 11),
        Array(9, 6, 6, 11),
        Array(10, 6, 6, 12)
    ),2);

ClassTable["Wizard"] =
Array(
    Array(
        Array(0, 0, 0, 2),
        Array(1, 0, 0, 3),
        Array(1, 1, 1, 3),
        Array(2, 1, 1, 4),
        Array(2, 1, 1, 4),
        Array(3, 2, 2, 5),
        Array(3, 2, 2, 5),
        Array(4, 2, 2, 6),
        Array(4, 3, 3, 6),
        Array(5, 3, 3, 7),
        Array(5, 3, 3, 7),
        Array(6, 4, 4, 8),
        Array(6, 4, 4, 8),
        Array(7, 4, 4, 9),
        Array(7, 5, 5, 9),
        Array(8, 5, 5, 10),
        Array(8, 5, 5, 10),
        Array(9, 6, 6, 11),
        Array(9, 6, 6, 11),
        Array(10, 6, 6, 12)
    ),2);