const Stations_adjList = {
    /**
     * East-west Line
     */
    cg2: ["ew1"],
    ew1: ["ew2"],
    ew2: ["ew1,ew3"],
    ew3: ["ew2", "ew4"],
    ew5: ["ew4", "ew6"],
    ew6: ["ew5", "ew7"],
    ew7: ["ew6", "ew8"],
    ew9: ["ew8", "ew10"],
    ew10: ["ew9", "ew11"],
    ew11: ["ew10", "ew12"],
    ew15: ["ew14", "ew16"],
    ew17: ["ew15", "ew18"],
    ew18: ["ew17", "ew19"],
    ew19: ["ew18", "ew20"],
    ew20: ["ew19", "ew21"],
    ew22: ["ew21", "ew23"],
    ew23: ["ew22", "ew24"],
    ew25: ["ew24", "ew26"],
    ew26: ["ew25", "ew27"],
    ew27: ["ew26", "ew28"],
    ew28: ["ew27", "ew29"],
    ew29: ["ew28", "ew30"],
    ew30: ["ew29", "ew31"],
    ew31: ["ew30", "ew32"],
    ew32: ["ew31", "ew33"],
    ew33: ["ew32"],

    /**
     * North-South Line
     */
    ns2: ["ns1", "ns3"],
    ns3: ["ns2", "ns3x"],
    ns3x: ["ns3", "ns5"],
    ns5: ["ns4", "ns7"],
    ns7: ["ns5", "ns8"],
    ns8: ["ns7", "ns9"],
    ns10: ["ns9", "ns11"],
    ns11: ["ns10", "ns12"],
    ns12: ["ns11", "ns13"],
    ns13: ["ns12", "ns14"],
    ns14: ["ns13", "ns15"],
    ns15: ["ns14", "ns16"],
    ns16: ["ns15", "ns17"],
    ns18: ["ns17", "ns19"],
    ns19: ["ns18", "ns20"],
    ns20: ["ns19", "ns21"],
    ns23: ["ns22", "ns24"],
    ns28: ["ns27"],

    /**
     * North-East Line
     */
    ne5: ["ne8"],
    ne8: ["ne5", "ne9"],
    ne9: ["ne8", "ne10"],
    ne10: ["ne9", "ne11"],
    ne11: ["ne10", "ne13"],
    ne13: ["ne11", "ne14"],
    ne14: ["ne13", "ne15"],
    ne15: ["ne14", "ne18"],
    ne18: ["ne15"],

    /**
     * Circle Line
     */
    cc2: ["cc1", "cc3"],
    cc3: ["cc2", "cc4"],
    cc5: ["cc4", "cc6"],
    cc6: ["cc5", "cc7"],
    cc7: ["cc6", "cc8"],
    cc8: ["cc7", "cc9"],
    cc11: ["cc10", "cc12"],
    cc12: ["cc11", "cc13"],
    cc14: ["cc13", "cc15"],
    cc16: ["cc15", "cc17"],
    //cc18: ["cc16", "cc20"], bukit brown
    cc20: ["cc19", "cc21"],
    cc21: ["cc20", "cc22"],
    cc23: ["cc22", "cc24"],
    cc24: ["cc23", "cc25"],
    cc25: ["cc24", "cc26"],
    cc26: ["cc25", "cc27"],
    cc27: ["cc26", "cc28"],
    cc28: ["cc27", "cc30"],
    // cc30: ["cc28", "cc31"], keppel
    // cc31: ["cc30", "cc32"], cantonment
    // cc32: ["cc31"], price edward
    /**
     * Downtown Line
     */

    dt2: ["dt3"],
    dt3: ["dt2", "dt4"],
    dt4: ["dt3", "dt5"],
    dt5: ["dt4", "dt6"],
    dt6: ["dt5", "dt7"],
    dt7: ["dt6", "dt8"],
    dt8: ["dt7", "dt9"],
    dt13: ["dt12", "dt14"],
    dt17: ["dt16", "dt18"],
    dt18: ["dt17", "dt19"],
    dt20: ["dt19", "dt21"],
    dt21: ["dt20", "dt22"],
    dt22: ["dt21", "dt23"],
    dt23: ["dt22", "dt24"],
    dt24: ["dt23", "dt25"],
    dt25: ["dt24", "dt26"],
    dt27: ["dt26", "dt28"],
    dt28: ["dt27", "dt29"],
    dt29: ["dt28", "dt30"],
    dt30: ["dt29", "dt31"],
    dt31: ["dt30", "dt32"],
    dt33: ["dt32", "dt34"],
    dt34: ["dt33", "dt35"],
    // dt36: ["dt34", "dt37"],
    // dt37: ["dt36"],

    /**
     * Thomson-EastCoast Line
     */

    te1: ["te2"],
    te3: ["te2", "te4"],
    te4: ["te3", "te5"],
    te5: ["te4", "te6"],
    te6: ["te5", "te7"],
    te7: ["te6", "te8"],
    te8: ["te7", "te9"],
    // te10: ["te8", "te12"],
    te12: ["te11", "te13"],
    te13: ["te12", "te14"],
    te15: ["te14", "te16"],
    te16: ["te15", "te17"],
    te18: ["te17", "te19"],
    te19: ["te18", "te20"],
    // te21: ["te19", "te22"],
    te22: ["te20"],
    // te22a: ["te22", "te23"],
    // te23: ["te22a", "te24"],
    // te24: ["te23", "te25"],
    // te25: ["te24", "te26"],
    // te26: ["te25", "te27"],
    // te27: ["te26", "te28"],
    // te28: ["te27", "te29"],
    // te29: ["te28", "te30"],
    // te30: ["te29"],

    /**
     * Jurong regional Line
     */
    // js2: ["js3"],
    // js3: ["js2", "js4"],
    // js4: ["js3", "js5"],
    // js5: ["js4", "js6"],
    // js6: ["js5", "js7"],
    // js7: ["js6", "js9"],
    // js9: ["js7", "js10"],
    // js10: ["js9", "js11"],
    // js11: ["js10", "js12"],
    // js12: ["js11"],
    // je1: ["je2"],
    // je2: ["je1", "je3"],
    // je3: ["je2", "je4"],
    // je4: ["je3", "je6"],
    // je6: ["je4", "je7"],
    // je7: ["je6"],
    // jw1: ["jw2"],
    // jw2: ["jw1", "jw3"],
    // jw3: ["jw2", "jw4"],
    // jw4: ["jw3", "jw5"],
    // jw5: ["jw4"],
    /**
     * Cross-Island Line
     */
};

export default Stations_adjList;
