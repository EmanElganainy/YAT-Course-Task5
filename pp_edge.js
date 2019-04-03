/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'images_22',
                            type: 'image',
                            rect: ['215px', '-226px', '150px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"images%20%282%292.jpg",'0px','0px']
                        },
                        {
                            id: '_232',
                            type: 'image',
                            rect: ['650px', '-226px', '150px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"232.jpg",'0px','0px']
                        },
                        {
                            id: '_222',
                            type: 'image',
                            rect: ['432px', '-226px', '150px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"222.jpg",'0px','0px']
                        },
                        {
                            id: 'HK_FurnitureMattressesv2_CB488441738_',
                            type: 'image',
                            rect: ['15px', '-232px', '150px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HK_FurnitureMattressesv2._CB488441738_.jpg",'0px','0px']
                        },
                        {
                            id: 'f1bad7dd48620ae955dfed3e63067a98e1285bbb2',
                            type: 'image',
                            rect: ['427px', '889px', '350px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"f1bad7dd48620ae955dfed3e63067a98e1285bbb2.png",'0px','0px']
                        },
                        {
                            id: 'ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room2',
                            type: 'image',
                            rect: ['-406px', '889px', '350px', '400px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room2.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '800px', '1300px'],
                            overflow: 'hidden',
                            fill: ["rgba(84,151,142,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid54",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${images_22}",
                            '-226px',
                            '50px'
                        ],
                        [
                            "eid55",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${_222}",
                            '-226px',
                            '50px'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${_232}",
                            '-226px',
                            '50px'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            2000,
                            "easeOutBounce",
                            "${_232}",
                            '650px',
                            '633px'
                        ],
                        [
                            "eid51",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${_222}",
                            '432px',
                            '438px'
                        ],
                        [
                            "eid60",
                            "background-color",
                            2000,
                            0,
                            "easeOutBounce",
                            "${Stage}",
                            'rgba(84,151,142,1.00)',
                            'rgba(84,151,142,1.00)'
                        ],
                        [
                            "eid29",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid50",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${images_22}",
                            '215px',
                            '221px'
                        ],
                        [
                            "eid49",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${HK_FurnitureMattressesv2_CB488441738_}",
                            '6px',
                            '15px'
                        ],
                        [
                            "eid48",
                            "top",
                            0,
                            0,
                            "linear",
                            "${ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room2}",
                            '889px',
                            '889px'
                        ],
                        [
                            "eid47",
                            "left",
                            0,
                            0,
                            "linear",
                            "${ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room2}",
                            '-406px',
                            '-406px'
                        ],
                        [
                            "eid57",
                            "left",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room2}",
                            '-406px',
                            '50px'
                        ],
                        [
                            "eid45",
                            "left",
                            0,
                            0,
                            "linear",
                            "${f1bad7dd48620ae955dfed3e63067a98e1285bbb2}",
                            '-406px',
                            '-406px'
                        ],
                        [
                            "eid58",
                            "left",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${f1bad7dd48620ae955dfed3e63067a98e1285bbb2}",
                            '-406px',
                            '427px'
                        ],
                        [
                            "eid44",
                            "top",
                            0,
                            0,
                            "linear",
                            "${f1bad7dd48620ae955dfed3e63067a98e1285bbb2}",
                            '889px',
                            '889px'
                        ],
                        [
                            "eid52",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${HK_FurnitureMattressesv2_CB488441738_}",
                            '-232px',
                            '50px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pp_edgeActions.js");
})("EDGE-135708208");
