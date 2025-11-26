/**
 * @file card.js
 */
// MIT License (c) 2018 Usagi

'use strict';

    /**
     * 左上のみ。カード描画したい
     * @param {HTMLCanvasElement} cv 
     */
var drawCard = (cv, side = 64) => {
        let x = 0;
        let y = 0;
        let q = 0;
        const w = side; // 1つのサイズ
        const h = side;
        cv.width = w * 8;
        cv.height = h * 8;
        const c = cv.getContext('2d');
        {
            let outw = 7 * side / 64;
            let inw = 4 * side / 64;
            c.lineCap = `round`;
            c.lineJoin = `round`;

            c.fillStyle = `rgb(0,102,0)`;
            //c.fillRect(0,0, 4096,4096);

            for (const k of [0,1,2,3,4,5,6,7,
                8,9,10,11,12,13,14,15]) {
                const ftx = w * (k % 4);
                const fty = h * Math.floor(k/4);
                x = ftx;
                y = fty;
                let l = ftx;
                let r = ftx;
                let t = fty;
                let b = fty;

                let margin = outw;
                x += w / 2;
                y += h / 2;
                l += margin;
                r += w - margin;
                t += margin;
                b += h - margin;

                c.beginPath();
                c.moveTo(x,t);
                c.arcTo(r,t, r,y, outw); // 右上
                c.arcTo(r,b, x,b, outw); // 右下
                c.arcTo(l,b, l,y, outw);
                c.arcTo(l,t, x,t, outw);
                c.closePath();

                if (k === 0) { // セレクト
                    c.lineWidth = outw + 2 * side / 64;
                    c.strokeStyle = `rgba(255,51,51,1)`;
                    c.stroke();
    
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    //c.stroke();
                } else if (k === 1) { // 文字面
                        c.lineWidth = outw;
                        c.strokeStyle = `rgba(255,255,255,1)`;
                        c.stroke();
    
                        c.lineWidth = inw;
                        c.strokeStyle = `rgba(0,0,0,1)`;
                        c.stroke();
        
                        c.fillStyle = `rgba(255,255,255, 1)`;
                        c.fill();    
    
                } else if (k === 2 || k === 3) {
if (k === 3) {
c.lineWidth = outw;
c.strokeStyle = `rgba(255,255,255,1)`;
c.stroke();

c.lineWidth = inw;
c.strokeStyle = `rgba(0,0,0,1)`;
c.stroke();
// 背景
c.fillStyle = `rgba(0,204,0, 1)`;
c.fill();
}
                    x = ftx + w / 4 + 4;
                    y = fty + w / 4 - 12;
                    q = w / 4 / 2;
                    c.beginPath();

                    { // s
                        c.moveTo(x+q*2,y+q*2);
                        c.lineTo(x+q,y+q*2);
                        c.lineTo(x+q,y+q*2.5);
                        c.lineTo(x+q*2,y+q*2.5);
                        c.lineTo(x+q*2,y+q*3);
                        c.lineTo(x+q,y+q*3);
                    }
                    const offset = 4;
                    for (let i = 0; i < 4; i+= 2) {
                        x = ftx + i * w / 4 + 4;
                        if (i === 0) {
                            x += offset;
                        } else {
                            x -= offset;
                        }
                        c.moveTo(x+q,y+q*1.25);
                        c.lineTo(x+q,y+q*3);
                        c.moveTo(x+q,y+q*2.5);
                        c.lineTo(x+q*2,y+q*2);
                        c.moveTo(x+q,y+q*2.5);
                        c.lineTo(x+q*2,y+q*3);
                    }

                    c.lineWidth = outw - 1;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
                    c.lineWidth = inw - 2;
                    c.strokeStyle = `rgba(255,255,255, 1)`;
                    c.stroke();

                } else if (k === 4) { // カバー
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();
    
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                    c.fillStyle = `rgba(51,51,255, 1)`;
                    c.fill();


                } else if (k === 5) { // カバー2
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();
    
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                    c.fillStyle = `rgba(255,153,0, 1)`;
                    c.fill();
                } else if (k === 6) { // カバーカバーカバー
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                    c.fillStyle = `rgba(0,0,0, 1)`;
                    c.fill();
                } else if (k === 7) { // カバー4
                    c.fillStyle = `rgba(255,255,255, 1)`;
                    c.fill();
                } else if (k === 8) { // セレクト短いの

                    let h3 = h * 3 / 4;
                    b = fty + h3 - margin;

                    c.beginPath();
                    c.moveTo(x, t);
                    c.arcTo(r,t, r,y, outw); // 右上
                    c.arcTo(r,b, x,b, outw); // 右下
                    c.arcTo(l,b, l,y, outw);
                    c.arcTo(l,t, x,t, outw);
                    c.closePath();

                    //c.lineWidth = outw + 2;
                    c.lineWidth = outw - 2;
                    c.lineWidth = inw + 1;
                    c.strokeStyle = `rgba(255,51,51,1)`;
                    c.stroke();

                } else if (k === 12) { // 時計
                    x = ftx;
                    y = fty;
                    let r2 = w / 2;
                    q = w / 4 + 8;
                    c.beginPath();
                    c.ellipse(x+r2,y+r2, q,q, 0, 0,Math.PI*2-0.1);
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
                    c.fillStyle = `rgba(255,255,255, 1)`;
                    c.fill();

                    q = w / 4;
                    c.beginPath();
                    c.moveTo(x+q*2,y+q*1);
                    c.lineTo(x+q*2,y+q*2);
                    c.lineTo(x+q*2.75,y+q*2);

                    c.lineWidth = outw + 2;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw + 2;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                } else if (k === 13) {
                    x = ftx;
                    y = fty;
                    let r2 = w / 2;
                    let r1 = w / 4 + 8;
                    q = w / 4;
                    c.beginPath();
                    let cx = x + w / 2;
                    let cy = y + w / 2;

                    c.moveTo(x+r2+r1,y+r2-r1);
//                    c.lineTo(x+r2+r1*0.5,y+r2);
                    c.bezierCurveTo(x+r2+r1,y+r2-q, x+r2+r1,y+r2-q, x+r2+r1*0.5,y+r2);
//                    c.lineTo(x+r2+r1,y+r2+r1);
//                    c.lineTo(x+r2-r1,y+r2+r1);
                    c.bezierCurveTo(cx+r1,y+r2+q, x+r2+r1,y+r2+q, x+r2+r1,y+r2+r1);
                    c.lineTo(cx-r1,cy+r1);
                    c.bezierCurveTo(cx - r1,cy + q, cx - r1,cy + q, cx - r1*0.5,cy);
                    c.bezierCurveTo(cx - r1, cy - q, cx - r1, cy - q, cx - r1, cy - r1);
//                    c.lineTo(x+r2-r1,y+r2-r1);
                    c.closePath();

                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
                    c.fillStyle = `rgba(255,255,255, 1)`;
                    c.fill();

                    q = w / 4;
                    c.beginPath();
                    c.moveTo(x+q*2,y+q*3)
                    c.lineTo(x+q*2,y+q*2);
                    c.lineTo(x+q*1.25,y+q*1.25);
                    c.lineTo(x+q*2.75,y+q*1.25);
                    c.lineTo(x+q*2,y+q*2);

                    c.lineWidth = outw + 2;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw + 2;
                    c.strokeStyle = `rgba(0,51,255,1)`;
                    c.stroke();
                    c.fillStyle = `rgba(0,51,255,1)`;
                    c.fill();
                } else if (k === 10 || k === 11 || k === 14 || k === 15) {
                    if (k === 10 || k === 11) {
                        c.lineWidth = outw;
                        c.strokeStyle = `rgba(255,255,255,1)`;
                        c.stroke();
        
                        c.lineWidth = inw;
                        c.strokeStyle = `rgba(0,0,0,1)`;
                        c.stroke();

                        c.fillStyle = `rgba(0,51,255, 1)`;
                        if (k === 11) {
                            c.fillStyle = `rgba(255,255,255, 1)`;
                        }
                        c.fill();
                    }

                    c.lineWidth = outw - 1;
                    let rr = 20;
                    let cx = ftx + 32;
                    let cy = fty + 32 + 1;
                    c.beginPath();
                    c.moveTo(cx, cy - rr);
                    for (let i = 1; i < 5; i++) {
                        let ang = Math.PI * 2 * i * 4 / 10;
                        c.lineTo(Math.sin(ang) * rr + cx,
                            cy - rr * Math.cos(ang));
                    }
                    c.closePath();

                    c.strokeStyle = `rgba(0,0,0,1)`; 
                    c.stroke();

                    c.fillStyle = `rgba(255,238,0, 1)`;
                    c.fill();
                }

            }
        }


    };


/**
 * 8x8 のアイコン集
 * @param {HTMLCanvasElement} cv 
 * @param {number} [side=64] 一辺のピクセル数
 */
    var drawCard2 = (cv, side = 64) => {
        console.log(`drawCard2 called`, side);

        let x = 0;
        let y = 0;
        const w = side; // 1つのサイズ
        const h = side;
        let q = w / 4;

        const c = cv.getContext('2d');
        {
            let outw = 7 * side / 64;
            let inw = 4 * side / 64;
            c.lineCap = `round`;
            c.lineJoin = `round`;

            [5,6,7, 12,13,14,15,
                20,21,22,23, 28,29,30,31].forEach(k=>{
                q = w / 4;

                const ftx = w * (k % 8);
                const fty = h * Math.floor(k/8);
                x = ftx;
                y = fty;
                let l = ftx;
                let r = ftx;
                let t = fty;
                let b = fty;

                let margin = outw;
                x += w / 2;
                y += h / 2;
                l += margin;
                r += w - margin;
                t += margin;
                b += h - margin;

                c.beginPath();
                c.moveTo(x,t);
                c.arcTo(r,t, r,y, outw); // 右上
                c.arcTo(r,b, x,b, outw); // 右下
                c.arcTo(l,b, l,y, outw);
                c.arcTo(l,t, x,t, outw);
                c.closePath();

                if (k === 12 || k === 20 || k === 28) { // セレクト
                    q = q * 0.75;

                    c.beginPath();
                    c.moveTo(x + q,t);
                    c.arcTo(r,t, r,y, outw); // 右上
                    c.lineTo(r,y-q);

                    c.moveTo(r,y+q);
                    c.arcTo(r,b, x,b, outw); // 右下
                    c.lineTo(x+q,b);

                    c.moveTo(x-q, b);
                    c.arcTo(l,b, l,y, outw);
                    c.lineTo(l,y+q);

                    c.moveTo(l,y - q);
                    c.arcTo(l,t, x,t, outw);
                    c.lineTo(x-q,t);

                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
    
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(255,51,51,1)`;
                    if (k === 20) {
                        c.strokeStyle = `rgb(51,51,255)`;
                    } else if (k == 28) {
                        c.strokeStyle = `rgb(255,238,0)`;
                    }
                    c.stroke();

                } else if (k === 5 || k === 6
                    || k == 13 || k === 14
                    || k == 21 || k === 22
                    || k === 29 || k === 30) {
                    c.beginPath();
                    c.ellipse(x,y, q*2 - inw, q*2 - inw, 0, 0, Math.PI * 2);

                    c.lineWidth = inw;
                    c.fillStyle = `rgb(0,0,0)`;
                    c.strokeStyle = `rgb(255,255,255)`;
                    if (k === 6 || k === 14 || k === 22 || k === 30) {
                        c.fillStyle = `rgb(255,255,255)`;
                        c.strokeStyle = `rgb(0,0,0)`;
                    }
                    if (k === 13 || k === 14) {
                        c.strokeStyle = `rgb(255,51,51)`;
                        c.lineWidth = inw;
                    } else if (k === 21 || k === 22) {
                        c.strokeStyle = `rgb(51,51,255)`;
                        c.lineWidth = inw;
                    } else if (k === 29 || k === 30) {
                        c.strokeStyle = `rgb(255,238,0)`;
                        c.lineWidth = inw;
                    }
                    c.fill();
                    c.stroke();

                } else if (k === 15 || k === 23 || k === 31) {

                    c.beginPath();
                    c.moveTo(l,t);
                    c.lineTo(x,t);
                    c.lineTo(r,y);
                    c.lineTo(x,b);
                    c.lineTo(l,b);
                    c.closePath();
 
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.fillStyle = `rgba(51,51,255, 1)`;
                    if (k === 15) {
                        c.fillStyle = `rgba(255,51,51, 1)`;
                    } else if (k === 31) {
                        c.fillStyle = `rgb(255,238,0)`;
                    }
                    c.fill();
                    c.stroke();

                } else if (k === 38) { // カバー2
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();
    
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                    c.fillStyle = `rgba(255,153,0, 1)`;
                    c.fill();
                } else if (k === 39) { // カバーカバーカバー
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                    c.fillStyle = `rgba(0,0,0, 1)`;
                    c.fill();
                } else if (k === 40) { // カバー4
                    c.fillStyle = `rgba(255,255,255, 1)`;
                    c.fill();
                } else if (k === 33 || k === 34) { // 丸
                    x = ftx;
                    y = fty;
                    let r2 = w / 2;
                    q = w / 4 + 8;
                    c.beginPath();
                    c.ellipse(x+r2,y+r2, q,q, 0, 0,Math.PI*2-0.1);
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
                    c.fillStyle = `rgba(255,255,255, 1)`;
                    c.fill();

                    q = w / 4;
                    c.beginPath();
                    c.moveTo(x+q*2,y+q*1);
                    c.lineTo(x+q*2,y+q*2);
                    c.lineTo(x+q*2.75,y+q*2);

                    c.lineWidth = outw + 2;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw + 2;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                } else if (k === 42) {
                    x = ftx;
                    y = fty;
                    let r2 = w / 2;
                    let r1 = w / 4 + 8 * side / 64;
                    q = w / 4;
                    c.beginPath();
                    let cx = x + w / 2;
                    let cy = y + w / 2;

                    c.moveTo(x+r2+r1,y+r2-r1);
//                    c.lineTo(x+r2+r1*0.5,y+r2);
                    c.bezierCurveTo(x+r2+r1,y+r2-q, x+r2+r1,y+r2-q, x+r2+r1*0.5,y+r2);
//                    c.lineTo(x+r2+r1,y+r2+r1);
//                    c.lineTo(x+r2-r1,y+r2+r1);
                    c.bezierCurveTo(cx+r1,y+r2+q, x+r2+r1,y+r2+q, x+r2+r1,y+r2+r1);
                    c.lineTo(cx-r1,cy+r1);
                    c.bezierCurveTo(cx - r1,cy + q, cx - r1,cy + q, cx - r1*0.5,cy);
                    c.bezierCurveTo(cx - r1, cy - q, cx - r1, cy - q, cx - r1, cy - r1);
//                    c.lineTo(x+r2-r1,y+r2-r1);
                    c.closePath();

                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
                    c.fillStyle = `rgba(255,255,255, 1)`;
                    c.fill();

                    q = w / 4;
                    c.beginPath();
                    c.moveTo(x+q*2,y+q*3)
                    c.lineTo(x+q*2,y+q*2);
                    c.lineTo(x+q*1.25,y+q*1.25);
                    c.lineTo(x+q*2.75,y+q*1.25);
                    c.lineTo(x+q*2,y+q*2);

                    c.lineWidth = outw + 2 * side / 64;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();

                    c.lineWidth = inw + 2 * side / 64;
                    c.strokeStyle = `rgba(0,51,255,1)`;
                    c.stroke();
                    c.fillStyle = `rgba(0,51,255,1)`;
                    c.fill();
                } else if (k === 43 || k === 44 || k === 45 || k === 46) {
                    if (k === 10 || k === 11) {
                        c.lineWidth = outw;
                        c.strokeStyle = `rgba(255,255,255,1)`;
                        c.stroke();
        
                        c.lineWidth = inw;
                        c.strokeStyle = `rgba(0,0,0,1)`;
                        c.stroke();

                        c.fillStyle = `rgba(0,51,255, 1)`;
                        if (k === 11) {
                            c.fillStyle = `rgba(255,255,255, 1)`;
                        }
                        c.fill();
                    }

                    c.lineWidth = outw - 1 * side / 64;
                    let rr = 20 * side / 64;
                    let cx = ftx + 32 * side / 64;
                    let cy = fty + (32 + 1) * side / 64;
                    c.beginPath();
                    c.moveTo(cx, cy - rr);
                    for (let i = 1; i < 5; i++) {
                        let ang = Math.PI * 2 * i * 4 / 10;
                        c.lineTo(Math.sin(ang) * rr + cx,
                            cy - rr * Math.cos(ang));
                    }
                    c.closePath();

                    c.strokeStyle = `rgba(0,0,0,1)`; 
                    c.stroke();

                    c.fillStyle = `rgba(255,238,0, 1)`;
                    c.fill();
                }

            });
        }


    };
