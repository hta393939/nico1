/**
 * @file chip.js
 */
// MIT License (c) 2018 Usagi

'use strict';

/**
 * 
 * @param {HTMLCanvasElement} cv 
 */
var drawColor = function(cv) {
    console.log(`drawColor called`);

    let x = 0;
    let y = 0;
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 1;

    const c = cv.getContext('2d');
    let index = 32;
    let ci = -4;
    for (let i = 2; i < 8; ++i) {
        for (let j = 0; j < 16; ++j) {
            if (index === 32 || index === 127) {
                index ++;
                ci ++;
                continue;
            }

            x = j * 8 + 1;
            y = i * 8 + 1;
            y += 8*8;
            r = Math.floor((ci / 20) % 4) * 85;
            g = Math.floor((ci / 4) % 5) * 64;
            b = Math.floor((ci / 1) % 4) * 85;
            a = 0.75;
            a = 1;
            if (g > 255) {
                g = 255;
            }

            if (index >= 32 && index < 32 + 4) {
                r = 0;
                g = 0;
                b = 0;
                a = (index - 32) * 0.25;
            } else if (index >= 0x74) {
                // 26
                let lv = Math.min(255, (index - 0x74 + 1) * 22);
                lv = Math.min(255, Math.floor((index - 0x74) * 255 / 10));
                r = lv;
                g = lv;
                b = lv;
                console.log(`lv`, lv);
            }

            c.fillStyle = `rgba(${r},${g},${b},${a})`;
            c.fillRect(x+1,y, 4,6);
            c.fillRect(x,y+1, 6,4);
//            c.fillRect(x,y, 6,6);

            index += 1;
            ci += 1;
        }
    }
};
