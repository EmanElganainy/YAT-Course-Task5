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
                            id: 'auburn-chair-h3189-display-n',
                            type: 'image',
                            tag: 'img',
                            rect: ['53px', '-277px', '255px', '255px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"auburn-chair-h3189-display-n.jpg",'0px','0px']
                        },
                        {
                            id: 'images_2',
                            type: 'image',
                            tag: 'img',
                            rect: ['362px', '50px', '194px', '255px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"images%20%282%29.jpg",'0px','0px']
                        },
                        {
                            id: 'ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room',
                            type: 'image',
                            tag: 'img',
                            rect: ['700px', '441px', '400px', '430px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room.jpg",'0px','0px']
                        },
                        {
                            id: 'f1bad7dd48620ae955dfed3e63067a98e1285bbb',
                            type: 'image',
                            tag: 'img',
                            rect: ['50px', '441px', '625px', '430px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"f1bad7dd48620ae955dfed3e63067a98e1285bbb.png",'0px','0px']
                        },
                        {
                            id: '_23',
                            type: 'image',
                            rect: ['898px', '-268px', '200px', '255px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"23.jpg",'0px','0px']
                        },
                        {
                            id: '_22',
                            type: 'image',
                            rect: ['629px', '-268px', '200px', '255px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"22.jpg",'0px','0px']
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['142px', '313px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">we provide best interior living rooms<span style=\"font-style: italic;\">​</span><span style=\"font-style: italic; font-size: 100px;\">​</span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [45, "px"], "rgba(43,63,71,1.00)", "800", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "capitalize"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1200px', '900px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(84,151,142,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid20",
                            "left",
                            5000,
                            1000,
                            "linear",
                            "${ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room}",
                            '1269px',
                            '700px'
                        ],
                        [
                            "eid24",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${images_2}",
                            '50px',
                            '-286px'
                        ],
                        [
                            "eid25",
                            "top",
                            6000,
                            1000,
                            "linear",
                            "${images_2}",
                            '-286px',
                            '50px'
                        ],
                        [
                            "eid16",
                            "top",
                            2000,
                            1000,
                            "linear",
                            "${_22}",
                            '-268px',
                            '50px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${auburn-chair-h3189-display-n}",
                            '-277px',
                            '50px'
                        ],
                        [
                            "eid18",
                            "left",
                            4000,
                            1000,
                            "linear",
                            "${f1bad7dd48620ae955dfed3e63067a98e1285bbb}",
                            '-683px',
                            '50px'
                        ],
                        [
                            "eid17",
                            "top",
                            2000,
                            2000,
                            "linear",
                            "${_23}",
                            '-268px',
                            '50px'
                        ],
                        [
                            "eid10",
                            "height",
                            0,
                            0,
                            "easeOutBounce",
                            "${images_2}",
                            '255px',
                            '255px'
                        ],
                        [
                            "eid15",
                            "left",
                            2000,
                            1000,
                            "linear",
                            "${_22}",
                            '629px',
                            '634px'
                        ],
                        [
                            "eid21",
                            "left",
                            0,
                            0,
                            "linear",
                            "${images_2}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid19",
                            "top",
                            4000,
                            1000,
                            "linear",
                            "${f1bad7dd48620ae955dfed3e63067a98e1285bbb}",
                            '441px',
                            '436px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ee_edgeActions.js");
})("EDGE-127518514");
