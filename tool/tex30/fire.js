/**
 * @file chip.js
 */
// MIT License (c) 2018 Usagi

'use strict';

/**
 * 
 * @param {HTMLCanvasElement} cv 
 */
var drawFire = function() {
    console.log(`drawFire called`);

// コピーして拡大
    const orgw = window.imgfire.naturalWidth;
    const orgh = window.imgfire.naturalHeight;
    const corg = window.cvorg.getContext('2d');
    corg.drawImage(window.imgfire, 0,0);
    const data = corg.getImageData(0,0, orgw,orgh);

    const cv = window.cv256;

    let x = 0;
    let y = 0;
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 0;

    const c = cv.getContext('2d');
    for (let i = 0; i < orgh; ++i) {
        for (let j = 0; j < orgw; ++j) {
            let ft = (orgw * i + j) * 4;
            x = j * 8;
            y = i * 8;
            r = data.data[ft];
            g = data.data[ft+1];
            b = data.data[ft+2];
            a = 0.75;
            if (r === 0 && g === 0 && b === 0) {
                a = 0;
            }

            c.fillStyle = `rgba(${r},${g},${b},${a})`;
            c.fillRect(x,y, 8,8);
        }
    }


        const cmovie = cvmovie.getContext('2d');
        cmovie.fillStyle = 'rgba(153,153,153, 1)';
        cmovie.fillRect(0,0, 960,540);

        cmovie.fillStyle = 'rgba(204,204,204, 1)';
        cmovie.fillRect(0,150, 960,100);

        cmovie.drawImage(cv, 64,64);
};
