/**
 * Created by Ralf Enderle on 16.08.2014.
 */

(function () {
    console.log("started");

    var patterns = {
        pattern1: {
            "description": "60x30 \n45x15, 45x15, 30x15",
            "first": ["a_1"],
            "second": ["b_1", "b_1", "b_2"]
        },
        pattern2: {
            "description": "60x30 \n45x15, 45x15, 45x15, 30x15, 45x15, 45x15, 30x15",
            "first": ["a_1"],
            "second": ["b_1", "b_1", "b_1", "b_2", "b_1", "b_1", "b_2", "b_1", "b_1", "b_2", "b_1", "b_1", "b_2"]
        },

        pattern3: {
            "description": "60x30, 60x30, 30x30 \n45x15",
            "first": ["a_1", "a_1", "a_2"],
            "second": ["b_1"]
        }
    }

    var pfla = {
        "a_1": {
            "width": 60,
            "height": 30
        },
        "a_2": {
            "width": 30,
            "height": 30
        },
        "b_1": {
            "width": 45,
            "height": 15
        },
        "b_2": {
            "width": 30,
            "height": 15
        }
    }


    function createPfla(left, top, pfla) {
        return new fabric.Rect({
            left: left,
            top: top,
            fill: 'grey',
            strokeWidth: 1,
            stroke: 'black',
            width: pfla.width,
            height: pfla.height
        })
    }

// create a rectangle object
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'grey',
        borderColor: 'black',
        hasBorders: true,
        strokeWidth: 2,
        stroke: 'black',
        width: 20,
        height: 20
    });

    function drawPattern(pattern, canvas) {
        var offset = 0;
        for (var j = 0; j < 11; j++) {
            offset = 0;
            for (var i = 0; i < 11; i++) {
                var l = pattern.first.length;
                var currentPfla = pfla[pattern.first[i % l]];
                canvas.add(createPfla(offset, 0 + 45 * j, currentPfla));
                offset = offset + currentPfla.width;
            }
            offset = 0;
            for (var i = 0; i < 15; i++) {
                var l = pattern.second.length;
                var currentPfla = pfla[pattern.second[i % l]];
                canvas.add(createPfla(offset, 30 + 45 * j, currentPfla));
                offset = offset + currentPfla.width;
            }
        }
        var text = new fabric.Text(pattern.description, { left: 10, top: 400, fontSize: 30 });
        canvas.add(text);
    }




    for (var p = 1; p < 10; p++) {
        var _canvas = new fabric.Canvas('c_' + p, {
            backgroundColor: 'rgb(100,100,200)',
            selectionColor: 'blue',
            selectionLineWidth: 2
        });

        drawPattern(patterns["pattern" + p], _canvas);
    }

})();
