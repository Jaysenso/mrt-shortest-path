const Stations = [
    /**
     * Circle Line
     */
    { id: "ce1/dt16", cx: 887, cy: 871, r: 6 },
    { id: "ns27/ce2/te20", cx: 786, cy: 916, r: 6 },
    { id: "ns24/ne6/cc1", cx: 760.2, cy: 689, r: 6 },
    { id: "cc2", cx: 824, cy: 739, r: 3 },
    { id: "cc3", cx: 870, cy: 785, r: 3 },
    { id: "cc4/dt15", cx: 953.3, cy: 806, r: 6 },
    { id: "cc5", cx: 980, cy: 766, r: 3 },
    { id: "cc6", cx: 997, cy: 720, r: 3 },
    { id: "cc7", cx: 1002, cy: 695, r: 3 },
    { id: "cc8", cx: 1005, cy: 670, r: 3 },
    { id: "ew8/cc9", cx: 1005, cy: 639, r: 6 },
    { id: "cc10/dt26", cx: 995, cy: 580, r: 6 },
    { id: "cc11", cx: 984.5, cy: 552, r: 3 },
    { id: "cc12", cx: 964, cy: 514, r: 3 },
    { id: "ne12/cc13", cx: 923, cy: 463.2, r: 6 },
    { id: "cc14", cx: 859, cy: 418, r: 3 },
    { id: "cc15/ns17", cx: 786, cy: 394, r: 6 },
    { id: "cc16", cx: 721, cy: 390.8, r: 3 },
    { id: "cc17/te9", cx: 658, cy: 402.8, r: 6 },
    { id: "cc18", cx: 601, cy: 429, r: 3 },
    { id: "cc19/dt9", cx: 548, cy: 471.5, r: 6 },
    { id: "cc20", cx: 515.5, cy: 514, r: 3 },
    { id: "cc21", cx: 497, cy: 549, r: 3 },
    { id: "ew21/cc22", cx: 481, cy: 599, r: 6 },
    { id: "cc23", cx: 475.7, cy: 637, r: 3 },
    { id: "cc24", cx: 476, cy: 674, r: 3 },
    { id: "cc25", cx: 481, cy: 709, r: 3 },
    { id: "cc26", cx: 493.5, cy: 750, r: 3 },
    { id: "cc27", cx: 513.8, cy: 792, r: 3 },
    { id: "cc28", cx: 540, cy: 827.5, r: 3 },
    { id: "ne1/cc29", cx: 581, cy: 866, r: 6 },

    /**
     * East-West Line
     */
    { id: "cg1/dt35", cx: 1286, cy: 674, r: 6 },
    { id: "cg2", cx: 1334, cy: 674, r: 3 },
    { id: "ew1", cx: 1283, cy: 524.5, r: 3 },
    { id: "ew2/dt32", cx: 1245, cy: 580.5, r: 6 },
    { id: "ew3", cx: 1245, cy: 614, r: 3 },
    { id: "ew4/cg", cx: 1227, cy: 639, r: 6 },
    { id: "ew5", cx: 1186, cy: 639, r: 3 },
    { id: "ew6", cx: 1126, cy: 639, r: 3 },
    { id: "ew7", cx: 1066, cy: 639, r: 3 },
    // { id: "ew8/cc9", cx: 1005, cy: 639, r: 6 }, Paya Lebar (CCL)
    { id: "ew9", cx: 984, cy: 643, r: 3 },
    { id: "ew10", cx: 946, cy: 678, r: 3 },
    { id: "ew11", cx: 926, cy: 698, r: 3 },
    { id: "ew12/dt14", cx: 899, cy: 726, r: 6 },
    { id: "ns25/ew13", cx: 830.3, cy: 790, r: 6 },
    { id: "ns26/ew14", cx: 799, cy: 822, r: 6 },
    { id: "ew15", cx: 698.5, cy: 848, r: 3 },
    { id: "ew16/ne3/te17", cx: 657, cy: 790.5, r: 6 },
    { id: "ew17", cx: 630, cy: 748, r: 3 },
    { id: "ew18", cx: 595.5, cy: 714, r: 3 },
    { id: "ew19", cx: 554.7, cy: 673, r: 3 },
    { id: "ew20", cx: 519, cy: 637, r: 3 },
    // { id: "ew21/cc22", cx: 481, cy: 599, r: 6 }, Buona Vista (CCL)
    { id: "ew22", cx: 451, cy: 570, r: 3 },
    { id: "ew23", cx: 407, cy: 526, r: 3 },
    { id: "ns1/ew24", cx: 286, cy: 514, r: 6 },
    { id: "ew25", cx: 247, cy: 514, r: 3 },
    { id: "ew26", cx: 202, cy: 514, r: 3 },
    { id: "ew27", cx: 155, cy: 514, r: 3 },
    { id: "ew28", cx: 120, cy: 514, r: 3 },
    { id: "ew29", cx: 90, cy: 514, r: 3 },
    { id: "ew30", cx: 75, cy: 542, r: 3 },
    { id: "ew31", cx: 75, cy: 570, r: 3 },
    { id: "ew32", cx: 75, cy: 598, r: 3 },
    { id: "ew33", cx: 75, cy: 616, r: 3 },

    /**
     * North-South Line
     */
    //{ id: "ns1/ew24", cx: 286, cy: 514, r: 6 }, Jurong East (EW)
    { id: "ns2", cx: 286, cy: 413, r: 3 },
    { id: "ns3", cx: 286, cy: 351, r: 3 },
    { id: "ns3x", cx: 286, cy: 291, r: 3 }, //(Brickland under construction)
    { id: "ns4/bp1", cx: 286, cy: 225.5, r: 6 },
    { id: "ns5", cx: 286, cy: 173, r: 3 },
    { id: "ns6", cx: 286, cy: 123, r: 3 },
    { id: "ns7", cx: 352, cy: 87, r: 3 },
    { id: "ns8", cx: 435, cy: 87, r: 3 },
    { id: "ns9/te2", cx: 549, cy: 87, r: 6 },
    { id: "ns10", cx: 612, cy: 87, r: 3 },
    { id: "ns11", cx: 685, cy: 87, r: 3 },
    { id: "ns12", cx: 735, cy: 104, r: 3 },
    { id: "ns13", cx: 775, cy: 144, r: 3 },
    { id: "ns14", cx: 786, cy: 202, r: 3 },
    { id: "ns15", cx: 786, cy: 250, r: 3 },
    { id: "ns16", cx: 786, cy: 300, r: 3 },
    { id: "ns17/cc15", cx: 786, cy: 394, r: 6 },
    { id: "ns18", cx: 786, cy: 428, r: 3 },
    { id: "ns19", cx: 770, cy: 467, r: 3 },
    { id: "ns20", cx: 739, cy: 498, r: 3 },
    { id: "ns21/dt11", cx: 705, cy: 532, r: 6 },
    { id: "ns22/te14", cx: 660, cy: 586, r: 6 },
    { id: "ns23", cx: 702, cy: 632, r: 3 },
    { id: "ns24/ne6/cc1", cx: 760.2, cy: 689, r: 6 },
    { id: "ns25/ew13", cx: 830.3, cy: 790, r: 6 },
    { id: "ns26/ew14", cx: 799, cy: 822, r: 6 },
    { id: "ns27/ce2/te20", cx: 786, cy: 916, r: 6 },
    { id: "ns28", cx: 786, cy: 962, r: 3 },

    /**
     * Downtown Line
     */
    { id: "bp6/dt1", cx: 479, cy: 225.5, r: 6 },
    { id: "dt2", cx: 479, cy: 265, r: 3 },
    { id: "dt3", cx: 479, cy: 297, r: 3 },
    { id: "dt4", cx: 479, cy: 329, r: 3 },
    { id: "dt5", cx: 479, cy: 361, r: 3 },
    { id: "dt6", cx: 485, cy: 406, r: 3 },
    { id: "dt7", cx: 502, cy: 425, r: 3 },
    { id: "dt8", cx: 524, cy: 447.5, r: 3 },
    { id: "cc19/dt9", cx: 548, cy: 471.5, r: 6 },
    { id: "dt10/te11", cx: 658, cy: 486, r: 6 },
    // { id: "ns21/dt11", cx: 705, cy: 532, r: 6 }, Newton (NSL)
    // { id: "ne7/dt12", cx: 780, cy: 606.5, r: 6 }, Little India (NEL)
    { id: "dt13", cx: 818, cy: 645, r: 3 },
    // { id: "ew12/dt14", cx: 899, cy: 726, r: 6 }, Bugis (EWL)
    // { id: "cc4/dt15", cx: 953.3, cy: 806, r: 6 }, Promenade (CCL)
    // { id: "ce1/dt16", cx: 887, cy: 871, r: 6 }, Bayfront (CCL)
    { id: "dt17", cx: 804, cy: 866, r: 3 },
    { id: "dt18", cx: 742, cy: 803, r: 3 },
    { id: "ne4/dt19", cx: 693.5, cy: 754, r: 6 },
    { id: "dt20", cx: 703.5, cy: 727, r: 3 },
    { id: "dt21", cx: 832, cy: 693, r: 3 },
    { id: "dt22", cx: 865, cy: 659.8, r: 3 },
    { id: "dt23", cx: 896, cy: 629, r: 3 },
    { id: "dt24", cx: 927, cy: 598, r: 3 },
    { id: "dt25", cx: 965, cy: 580, r: 3 },
    // { id: "cc10/dt26", cx: 995, cy: 580, r: 6 }, MacPherson (CCL)
    { id: "dt27", cx: 1046, cy: 580, r: 3 },
    { id: "dt28", cx: 1089, cy: 580, r: 3 },
    { id: "dt29", cx: 1129, cy: 580, r: 3 },
    { id: "dt30", cx: 1172.5, cy: 580, r: 3 },
    { id: "dt31", cx: 1211, cy: 580, r: 3 },
    // { id: "ew2/dt32", cx: 1245, cy: 580.5, r: 6 }, Tampines (EWL)
    { id: "dt33", cx: 1286, cy: 612, r: 3 },
    { id: "dt34", cx: 1286, cy: 647, r: 3 },
    // { id: "cg1/dt35", cx: 1286, cy: 674, r: 6 }, Expo (EWL)
    // { id: "dt36", cx: 1286, cy: 726, r: 3 },
    // { id: "dt37", cx: 1286, cy: 766, r: 3 },

    /**
     * Thomson-East Line
     */
    { id: "te1", cx: 496, cy: 34, r: 3 },
    // { id: "ns9/te2", cx: 549, cy: 87, r: 6 }, Woodlands (NS)
    { id: "te3", cx: 589, cy: 127, r: 3 },
    { id: "te4", cx: 624, cy: 161.8, r: 3 },
    { id: "te5", cx: 658, cy: 208, r: 3 },
    { id: "te6", cx: 658, cy: 247, r: 3 },
    { id: "te7", cx: 658, cy: 309, r: 3 },
    { id: "te8", cx: 658, cy: 357, r: 3 },
    // { id: "cc17/te9", cx: 658, cy: 402.8, r: 6 }, Caldecott (CCL)
    { id: "te10", cx: 658, cy: 444, r: 3 },
    // { id: "dt10/te11", cx: 658, cy: 486, r: 6 }, Stevens (DTL)
    { id: "te12", cx: 658, cy: 517, r: 3 },
    { id: "te13", cx: 658, cy: 549, r: 3 },
    // { id: "ns22/te14", cx: 660, cy: 586, r: 6 }, Orchard (NS22)
    { id: "te15", cx: 658, cy: 648, r: 3 },
    { id: "te16", cx: 658, cy: 694, r: 3 },
    // { id: "ew16/ne3/te17", cx: 657, cy: 790.5, r: 6 },Outram Park (EWL)
    { id: "te18", cx: 690, cy: 825, r: 3 },
    { id: "te19", cx: 745, cy: 881, r: 3 },
    // { id: "ns27/ce2/te20", cx: 786, cy: 916, r: 6 }, Marina Bay (NSL)
    { id: "te21", cx: 836, cy: 953, r: 3 },
    { id: "te22", cx: 880, cy: 953, r: 3 },
    //Under construction
    // { id: "te22a", cx: 951, cy: 915, r: 3 },
    // { id: "te23", cx: 1001, cy: 865, r: 3 },
    // { id: "te24", cx: 1027, cy: 829, r: 3 },
    // { id: "te25", cx: 1044, cy: 797, r: 3 },
    // { id: "te26", cx: 1085, cy: 766, r: 3 },
    // { id: "te27", cx: 1124, cy: 766, r: 3 },
    // { id: "te28", cx: 1163, cy: 766, r: 3 },
    // { id: "te29", cx: 1202, cy: 766, r: 3 },
    // { id: "te30", cx: 1241, cy: 766, r: 3 },

    /**
     * North-East Line
     */
    // { id: "ne1/cc29", cx: 581, cy: 866, r: 6 }, Harbourfront (CCL)
    // { id: "ew16/ne3/te17", cx: 657, cy: 790.5, r: 6 }, Outram Park (EWL)
    // { id: "ne4/dt19", cx: 693.5, cy: 754, r: 6 }, Chinatown (DTL)
    { id: "ne5", cx: 723.5, cy: 724.5, r: 3 },
    // { id: "ns24/ne6/cc1", cx: 760.2, cy: 689, r: 6 }, Dhoby Ghaut (NSL)
    { id: "ne7/dt12", cx: 780, cy: 606.5, r: 6 },
    { id: "ne8", cx: 807.5, cy: 578.4, r: 3 },
    { id: "ne9", cx: 833, cy: 553, r: 3 },
    { id: "ne10", cx: 861, cy: 525, r: 3 },
    { id: "ne11", cx: 888, cy: 498, r: 3 },
    // { id: "ne12/cc13", cx: 923, cy: 463.2, r: 6 }, Serangoon (CCL)
    { id: "ne13", cx: 956, cy: 430, r: 3 },
    { id: "ne14", cx: 988, cy: 398.5, r: 3 },
    { id: "ne15", cx: 1018, cy: 368, r: 3 },
    { id: "ne16/stc", cx: 1080.7, cy: 305.3, r: 6 },
    { id: "ne17/ptc", cx: 1177, cy: 209.5, r: 6 },
    { id: "ne18", cx: 1254, cy: 132, r: 3 },

    /**
     * Bukit Panjang LRT
     */
    { id: "bp2", cx: 321, cy: 226, r: 2.6 },
    { id: "bp3", cx: 356, cy: 226, r: 2.6 },
    { id: "bp4", cx: 391, cy: 226, r: 2.6 },
    { id: "bp5", cx: 426, cy: 226, r: 2.6 },
    { id: "bp7", cx: 521, cy: 245, r: 2.6 },
    { id: "bp8", cx: 546, cy: 259, r: 2.6 },
    { id: "bp9", cx: 565, cy: 248, r: 2.6 },
    { id: "bp10", cx: 565, cy: 226, r: 2.6 },
    { id: "bp11", cx: 565, cy: 204, r: 2.6 },
    { id: "bp12", cx: 546, cy: 192, r: 2.6 },
    { id: "bp13", cx: 521, cy: 206, r: 2.6 },

    /**
     * Sengkang LRT
     */
    { id: "se1", cx: 1127, cy: 321, r: 2.6 },
    { id: "se2", cx: 1154, cy: 339, r: 2.6 },
    { id: "se3", cx: 1151, cy: 372, r: 2.6 },
    { id: "se4", cx: 1113, cy: 377.3, r: 2.6 },
    { id: "se5", cx: 1095.5, cy: 348.5, r: 2.6 },
    { id: "sw1", cx: 1066.5, cy: 273.5, r: 2.6 },
    { id: "sw2", cx: 1061.4, cy: 247, r: 2.6 },
    { id: "sw3", cx: 1044, cy: 229, r: 2.6 },
    { id: "sw4", cx: 1022, cy: 229, r: 2.6 },
    { id: "sw5", cx: 1002, cy: 249, r: 2.6 },
    { id: "sw6", cx: 1003.5, cy: 269.5, r: 2.6 },
    { id: "sw7", cx: 1018.7, cy: 284.5, r: 2.6 },
    { id: "sw8", cx: 1047, cy: 291.5, r: 2.6 },

    /**
     * Punggol LRT
     */
    { id: "pe1", cx: 1191.7, cy: 247.3, r: 2.6 },
    { id: "pe2", cx: 1198, cy: 270, r: 2.6 },
    { id: "pe3", cx: 1215, cy: 287, r: 2.6 },
    { id: "pe4", cx: 1245, cy: 277.7, r: 2.6 },
    { id: "pe5", cx: 1254, cy: 246.5, r: 2.6 },
    { id: "pe6", cx: 1238, cy: 230.5, r: 2.6 },
    { id: "pe7", cx: 1214, cy: 224, r: 2.6 },
    { id: "pw1", cx: 1161, cy: 177, r: 2.6 },
    { id: "pw2", cx: 1156, cy: 150, r: 2.6 },
    { id: "pw3", cx: 1139, cy: 132, r: 2.6 },
    { id: "pw4", cx: 1106, cy: 144, r: 2.6 },
    { id: "pw5", cx: 1098.5, cy: 173, r: 2.6 },
    { id: "pw6", cx: 1115.5, cy: 190, r: 2.6 },
    { id: "pw7", cx: 1141, cy: 194.5, r: 2.6 },
];

export default Stations;
