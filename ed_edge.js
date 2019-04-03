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
                            rect: ['54px', '-268px', '255px', '255px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"auburn-chair-h3189-display-n.jpg",'0px','0px']
                        },
                        {
                            id: 'images_2',
                            type: 'image',
                            tag: 'img',
                            rect: ['363px', '-268px', '194px', '255px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"images%20%282%29.jpg",'0px','0px']
                        },
                        {
                            id: 'ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room',
                            type: 'image',
                            tag: 'img',
                            rect: ['1269px', '441px', '400px', '430px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ee01b1c40f88cb76_0780-w400-h430-b0-p0--traditional-living-room.jpg",'0px','0px']
                        },
                        {
                            id: 'f1bad7dd48620ae955dfed3e63067a98e1285bbb',
                            type: 'image',
                            tag: 'img',
                            rect: ['-683px', '441px', '625px', '430px', 'auto', 'auto'],
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
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['-800px', '114px', '729px', '229px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(210,142,138,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "height",
                            0,
                            0,
                            "easeOutBounce",
                            "${images_2}",
                            '255px',
                            '255px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("ed_edgeActions.js");
})("EDGE-127518514");
