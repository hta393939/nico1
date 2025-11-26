/**
 * @file index.js
 */
// MIT License (c) 2018 Usagi

'use strict';

/**
 * クラス
 */
class Pack {
/**
 * コンストラクタ
 */
    constructor() {
        this.cl = 'Pack';
    }

/**
 * カード描画したい 4つ
 * @param {HTMLCanvasElement} cv 
 */
    drawCard(cv) {
        let q = 0;
        const w = 128; // 1つのサイズ
        const h = 128;
        cv.width = w * 4;
        cv.height = h * 2;
        const c = cv.getContext('2d');
        {
            let outw = 14;
            let inw = 8;
            c.lineCap = `round`;
            c.lineJoin = `round`;

            c.fillStyle = `rgb(0,102,0)`;
            //c.fillRect(0,0, 4096,4096);

            [0,1,2,3,4,5,6,7].forEach(k=>{
                const ftx = w * (k & 1);
                const fty = h * Math.floor(k/2);
                let x = ftx;
                let y = fty;
                let l = ftx;
                let r = ftx;
                let t = fty;
                let b = fty;

                let margin = outw - 4;
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
                    c.lineWidth = outw + 2;
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
    
                } else if (k === 2) {
                    x = 128 * 2;
                    y = 128 / 4;
                    q = 128 / 4 / 4;
                    c.beginPath();

                    { // s
                        c.moveTo(x+q*3,y+q);
                        c.lineTo(x+q,y+q);
                        c.lineTo(x+q,y+q*2);
                        c.lineTo(x+q*3,y+q*2);
                        c.lineTo(x+q*3,y+q*3);
                        c.lineTo(x+q,y+q*3);
                    }

                    for (let i = 0; i < 2; i+= 2) {
                        x = 128 * 2 + i * q;
                        c.moveTo(x+q,y+q);
                        c.lineTo(x+q,y+q*3);
                        c.moveTo(x+q,y+q*2.5);
                        c.lineTo(x+q*3,y+q*2);
                        c.moveTo(x+q,y+q*2.5);
                        c.lineTo(x+q*3,y+q*3);
                    }

                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();
                    c.lineWidth = inw;
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


                } else if (k === 5) { // カバーカバー
                    c.lineWidth = outw;
                    c.strokeStyle = `rgba(255,255,255,1)`;
                    c.stroke();
    
                    c.lineWidth = inw;
                    c.strokeStyle = `rgba(0,0,0,1)`;
                    c.stroke();

                    c.fillStyle = `rgba(255,153,51, 1)`;
                    c.fill();
                }

            });
        }


    }

/**
 * アルファベットつき
 * @param {HTMLCanvasElement} cv 
 * @param {boolean} isouter 外側
 * @param {boolean} isinner 内側
 */
    drawCr(cv, isouter, isinner) {
        const c = cv.getContext('2d');

        let x = 0;
        let y = 0;
        const side = 16;
        const q = side / 4;
        if (false) {
            for (let i = 0; i < 16; ++i) {
                for (let j = 0; j < 16; ++j) {
                    x = j * side;
                    y = i * side;
                    c.fillStyle = ((i+j)&1) ? `rgb(0,51,0)` : `rgb(0,204,0)`;
                    //c.fillStyle = `rgba(51,102,51,1)`;
                    c.fillStyle = ((i+j)&1) ? `rgb(255,204,51)` : `rgb(255,255,102)`;
                    c.fillRect(x,y, side,side);
                }
            }
        }

        let out = 4;
        let outw = 4;
        let inw = 2;
        let outc = isouter ? `rgba(255,255,255, 1)`: `rgba(0,0,0,0)`;
        let inc = `rgba(0,0,0,1)`;
        //inc = isinner ? `rgba(255,51,51, 1)` : `rgba(0,0,0,0)`;
        if (isouter === false) {
            inc = `rgba(255,255,255, 1)`;
        }

        c.lineCap = 'round';
        c.lineJoin = 'round';

        { // !
            x = side * 1;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2, y + q*3);
            c.lineTo(x + q*2, y + q*3);
            c.moveTo(x + q*2, y + q);
            c.lineTo(x + q*2, y + q*2);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // "
            x = side * 2;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*1.5, y + q*1);
            c.lineTo(x + q*1.5, y + q*1.5);
            c.moveTo(x + q*2.5, y + q);
            c.lineTo(x + q*2.5, y + q*1.5);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // #
            x = side * 3;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*1, y + q*1.5);
            c.lineTo(x + q*3, y + q*1.5);
            c.moveTo(x + q*1, y + q*2.5);
            c.lineTo(x + q*3, y + q*2.5);
            c.moveTo(x + q*1.5, y + q*1);
            c.lineTo(x + q*1.5, y + q*3);
            c.moveTo(x + q*2.5, y + q*1);
            c.lineTo(x + q*2.5, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // $
            x = side * 4;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2.75, y + q); // 右上
            c.arcTo(x + q, y + q, x+q,y+q*2, q*0.5);
            c.arcTo(x + q, y + q * 2, x+q*2,y+q*2, q*0.5);
            c.arcTo(x + q*3, y + q*2, x+q*3,y+q*3, q*0.5);
            c.arcTo(x + q*3, y + q*3, x+q*2,y+q*3, q*0.5);
            c.lineTo(x + q*1.25, y + q* 3);

            //c.moveTo(x+q*1.5,y+q);
            //c.lineTo(x+q*1.5,y+q*3);
            c.moveTo(x+q*2.0,y+q);
            c.lineTo(x+q*2.0,y+q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // %
            x = side * 5;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*3, y + q*1);
            c.lineTo(x + q*1, y + q*3);
            c.moveTo(x + q*1, y + q*1);
            c.lineTo(x + q*1.5, y + q*1);
            c.lineTo(x+q*1.5,y+q*1.5);
            c.lineTo(x+q,y+q*1.5);
            c.lineTo(x+q,y+q);
            c.moveTo(x + q*2.5, y + q*2.5);
            c.lineTo(x + q*3, y + q*2.5);
            c.lineTo(x+q*3,y+q*3);
            c.lineTo(x+q*2.5,y+q*3);
            c.lineTo(x+q*2.5,y+q*2.5);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // &
            x = side * 6;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2, y + q*1);
            c.arcTo(x + q*1.5, y + q*1, x+q*1.5, y+q*2, q*0.5);
            c.bezierCurveTo(x+q*1.5,y+q*2, x+q*2,y+q*2, x+q*3,y+q*3);
            c.moveTo(x + q*2, y + q*1);
            c.arcTo(x + q*2.5, y + q*1, x+q*2.5,y+q*2, q*0.5);
            c.arcTo(x+q*2.5,y+q*2, x+q*2,y+q*2, q*0.5);
            c.arcTo(x+q*1.5,y+q*2, x+q*1.5,y+q*3, q*0.5);
            c.arcTo(x+q*1.5,y+q*3, x+q*2,y+q*3, q*0.5);
            c.arcTo(x+q*3,y+q*3, x+q*3,y+q*2, q);
            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // '
            x = side * 7;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2, y + q);
            c.lineTo(x + q*2, y + q*1.5);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // (
            x = side * 8;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2.5, y + q);
            c.bezierCurveTo(x + q*1.5, y + q*1.25, x+q*1.5,y+q*2.75, x+q*2.5,y+q*3);
            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // )
            x = side * 9;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*1.5, y + q);
            c.bezierCurveTo(x + q*2.5, y + q*1.25, x+q*2.5,y+q*2.75, x+q*1.5,y+q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // *
            x = side * 10;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*1.5, y + q*1.5);
            c.lineTo(x + q*2.5, y + q*2.5);
            c.moveTo(x + q*2.5, y + q * 1.5);
            c.lineTo(x + q*1.5, y + q*2.5);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // +
            x = side * 11;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2, y + q);
            c.lineTo(x + q*2, y + q*3);
            c.moveTo(x + q, y + q * 2);
            c.lineTo(x + q*3, y + q*2);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        if (false) { // ,
            x = side * 12;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2, y + q*2.5);
            c.lineTo(x + q*2, y + q*3);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        } else {
            x = side * 12;
            y = side * 2;
            let m = x + q * 1.5;
            c.beginPath();
            c.moveTo(m-q*0.5, y + q*2.5);
            c.lineTo(m, y+q*2.5);
            c.lineTo(m, y + q*3);

            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();         
        }
        { // -
            x = side * 13;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q, y + q * 2);
            c.lineTo(x + q*3, y + q*2);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // .
            x = side * 14;
            y = side * 2;

            c.beginPath();
            c.moveTo(x + q*2, y + q*3);
            c.lineTo(x + q*2, y + q*3);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // /
            x = side * 15;
            y = side * 2;
    
            c.beginPath();
                c.moveTo(x + q*3, y + q);
                c.lineTo(x + q*1, y + q*3);
    
                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 0
            x = side * 0;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q, y + q);
            c.lineTo(x + q*3, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.lineTo(x + q, y + q*3);
            c.closePath();

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 1
            x = side * 1;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*2, y + q*3);
            c.lineTo(x + q*2, y + q);

//            c.moveTo(x + q * 2, y + q * 1.5);
            c.lineTo(x + q * 1.5, y + q * 1.5);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 2
            x = side * 2;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q*1, y + q*1);
                c.lineTo(x + q*3, y + q*1);
                c.lineTo(x + q*3, y + q*2);
                c.lineTo(x + q * 1, y + q*2);
                c.lineTo(x + q * 1, y + q * 3);
                c.lineTo(x + q*3, y + q * 3);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 3
            x = side * 3;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q*1, y + q*1);
                c.lineTo(x + q*3, y + q*1);
                c.lineTo(x + q*3, y + q*3);
                c.lineTo(x + q * 1, y + q*3);
            c.moveTo(x + q * 1, y + q * 2);
                c.lineTo(x + q * 3, y + q * 2);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // 4
            x = side * 4;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q*1, y + q*1);
                c.lineTo(x + q*1, y + q*2);
                c.lineTo(x + q*3, y + q*2);
                c.moveTo(x + q * 3, y + q);
                c.lineTo(x + q * 3, y + q * 3);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 5
            x = side * 5;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q*3, y + q*1);
                c.lineTo(x + q, y + q*1);
                c.lineTo(x + q, y + q*2);
                c.lineTo(x + q * 3, y + q*2);
                c.lineTo(x + q * 3, y + q * 3);
                c.lineTo(x + q, y + q * 3);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        } // here drawChar()

        { // 6
            x = side * 6;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q*3, y + q*1);
                c.lineTo(x + q, y + q*1);
                c.lineTo(x + q, y + q*3);
                c.lineTo(x + q * 3, y + q*3);
                c.lineTo(x + q * 3, y + q * 2);
                c.lineTo(x + q, y + q * 2);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 7
            x = side * 7;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q, y + q*2);
                c.lineTo(x + q, y + q);
                c.lineTo(x + q * 3, y + q);
                c.lineTo(x + q * 3, y + q * 3);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 8
            x = side * 8;
            y = side * 3;

            c.beginPath();
                c.moveTo(x + q*3, y + q*2);
                c.lineTo(x + q, y + q*2);

                c.moveTo(x + q, y + q);
                c.lineTo(x + q * 3, y + q);
                c.lineTo(x + q * 3, y + q * 3);
                c.lineTo(x + q, y + q * 3);
                c.lineTo(x + q, y + q);

                c.lineWidth = out;
                c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // 9
            x = side * 9;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*3, y + q*2);
            c.lineTo(x + q, y + q*2);
            c.lineTo(x + q, y + q);
            c.lineTo(x + q * 3, y + q);
            c.lineTo(x + q * 3, y + q * 3);
            c.lineTo(x + q, y + q * 3);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // :
            x = side * 10;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*2, y + q*1.5);
            c.lineTo(x + q*2, y + q*1.5);
            c.moveTo(x+q*2,y+q*2.5);
            c.lineTo(x + q*2, y + q*2.5);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        if (false) { // ;
            x = side * 11;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*2, y + q*1.5);
            c.lineTo(x + q*2, y + q*1.5);
            c.moveTo(x+q*2,y+q*2.5);
            c.lineTo(x + q*2, y + q*3);
            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        } else {
            x = side * 11;
            y = side * 3;
            c.beginPath();
            c.moveTo(x + q*2, y + q*1);
            c.lineTo(x + q*2, y + q*3);
            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // <
            x = side * 12;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*3, y + q*1);
            c.lineTo(x + q, y + q*2);
            c.lineTo(x + q*3, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // =
            x = side * 13;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*1, y + q*1.5);
            c.lineTo(x + q*3, y + q*1.5);
            c.moveTo(x+q,y+q*2.5);
            c.lineTo(x + q*3, y + q*2.5);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // >
            x = side * 14;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*1, y + q*1);
            c.lineTo(x + q*3, y + q*2);
            c.lineTo(x + q*1, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // ?
            x = side * 15;
            y = side * 3;

            c.beginPath();
            c.moveTo(x + q*1, y + q*1.5);
            c.arcTo(x + q, y + q, x+q*2,y+q*1, q*0.5);
            c.arcTo(x + q*3, y + q * 1, x+q*3,y+q*2, q*0.5);
            c.arcTo(x + q*3, y + q*2, x+q*2,y+q*2, q*0.5);
            c.arcTo(x + q*2, y + q*2, x+q*2,y+q*2.5, q*0.5);

            c.moveTo(x+q*2.0,y+q*3);
            c.lineTo(x+q*2.0,y+q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // @ ●
                x = side * 0;
                y = side * 4;
                c.beginPath();
                c.moveTo(x + q*2, y + q);
                c.arcTo(x + q*3, y + q, x + q*3, y + q*2, q); // 右上
                c.arcTo(x + q*3, y + q*3, x + q*2, y+q*3, q); // 右下
                c.arcTo(x + q, y + q*3, x + q, y + q*2, q); // 左下
                c.arcTo(x + q, y + q, x + q*2, y + q, q);
                c.closePath();
                c.lineWidth = outw;
                c.strokeStyle = outc;
                c.stroke();
                c.fillStyle = outc;
                c.fill();

                c.lineWidth = inw;
                c.strokeStyle = inc;
                c.stroke();
                c.fillStyle = inc;
                c.fill();
        }
        { // A
            x = side * 1;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q*1, y + q*3);
            c.arcTo(x + q, y + q, x+q*2, y+q*1, q*0.5);
            c.arcTo(x + q*3, y + q*1, x + q*3, y+q*3, q*0.5);
            c.lineTo(x + q * 3, y + q * 3);
            c.moveTo(x+q,y+q*2.25);
            c.lineTo(x+q*3,y+q*2.25);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // B
            x = side * 2;
            y = side * 4;

            c.beginPath();
            c.moveTo(x+q,y+q*3);
            c.lineTo(x + q, y + q);
            c.arcTo(x + q*3, y + q, x+q*3,y+q*1.5, q*0.5);
            c.arcTo(x + q*3, y + q*2, x+q*2.5, y+q*2, q*0.5);
            c.arcTo(x + q*3,y+q*2, x+q*3,y+q*2.5, q*0.5);
            c.arcTo(x+q*3,y+q*3, x+q*2.5,y+q*3, q*0.5);
            c.lineTo(x+q,y+q*3);

            c.moveTo(x + q, y + q * 2);
            c.lineTo(x + q * 2.5, y + q * 2);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // C
            x = side * 3;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q*3, y + q);
            c.arcTo(x + q, y + q, x+q, y+q*2, q);
            c.arcTo(x + q, y + q*3, x + q*2, y+q*3, q);
            c.lineTo(x + q * 3, y + q * 3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // D
            x = side * 4;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q*1, y + q);
            c.arcTo(x + q*3, y + q*1, x+q*3, y+q*2, q);
            c.arcTo(x + q*3, y + q*3, x + q*2, y+q*3, q);
            c.lineTo(x + q * 1, y + q * 3);
            c.lineTo(x+q,y+q);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // E
            x = side * 5;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q*3, y + q);
            c.lineTo(x + q, y + q*1);
            c.lineTo(x + q, y + q*3);
            c.lineTo(x+q*3,y+q*3);
            c.moveTo(x + q * 1, y + q * 2);
            c.lineTo(x+q*2.75,y+q*2);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // F
            x = side * 6;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q*3, y + q);
            c.lineTo(x + q, y + q*1);
            c.lineTo(x + q, y + q*3);
            c.moveTo(x + q * 1, y + q * 2);
            c.lineTo(x+q*2.75,y+q*2);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // G
            x = side * 7;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q*2.75, y + q);
            c.arcTo(x + q, y + q, x+q, y+q*2, q);
            c.arcTo(x + q, y + q*3, x + q*2, y+q*3, q);
            c.arcTo(x + q * 3, y + q * 3, x+q*3,y+q*2, q);
            c.lineTo(x+q*2.25, y+q*2);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // M
            x = side * 13;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 1, y + q*3);
            c.lineTo(x + q, y + q);
            c.lineTo(x + q*2, y + q *3);
            c.lineTo(x + q*3, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // H
            x = side * 8;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 1, y + q);
            c.lineTo(x + q*1, y + q*3);
            c.moveTo(x + q*1, y + q *2);
            c.lineTo(x + q*3, y + q*2);
            c.moveTo(x + q*3, y + q*1);
            c.lineTo(x + q*3, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // I
            x = side * 9;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 2, y + q);
            c.lineTo(x + q*2, y + q*3);
            c.moveTo(x + q*1.5, y + q *1);
            c.lineTo(x + q*2.5, y + q*1);
            c.moveTo(x + q*1.5, y + q*3);
            c.lineTo(x + q*2.5, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // J
            x = side * 10;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 3, y + q);
            c.arcTo(x + q*3, y + q*3, x+q*2,y+q*3, q);
            c.arcTo(x + q*1, y + q *3, x+q,y+q*2, q);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // K
            x = side * 11;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 1.5, y + q);
            c.lineTo(x + q*1.5, y + q*3);
            c.moveTo(x + q*3, y + q *1);
            c.lineTo(x + q*1.5, y + q*2);
            c.moveTo(x + q*1.5, y + q*2);
            c.lineTo(x + q*3, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // L
            x = side * 12;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 1.5, y + q);
            c.lineTo(x + q*1.5, y + q*3);
            c.lineTo(x + q*3, y + q *3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // N
            x = side * 14;
            y = side * 4;

            c.beginPath();
            c.moveTo(x + q * 3, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.lineTo(x + q*1, y + q *1);
            c.lineTo(x + q*1, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // O
            x = side * 15;
            y = side * 4;

            c.beginPath();
            /*
            c.moveTo(x + q, y + q);
            c.lineTo(x + q*3, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.lineTo(x + q, y + q*3);
*/
            c.moveTo(x + q*2, y + q);
            c.arcTo(x + q*3, y + q, x + q*3, y + q*2, q); // 右上
            c.arcTo(x + q*3, y + q*3, x + q*2, y+q*3, q); // 右下
            c.arcTo(x + q, y + q*3, x + q, y + q*2, q); // 左下
            c.arcTo(x + q, y + q, x + q*2, y + q, q);

            c.closePath();

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // P
            x = side * 0;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q*3);
            c.lineTo(x + q, y + q); // |
            c.arcTo(x + q*3, y + q, x+q*3, y+q*2, q*0.5);
            c.arcTo(x + q*3, y + q*2, x+q*2,y+q*2, q*0.5);
            c.lineTo(x + q*1, y + q*2);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // Q
            x = side * 1;
            y = side * 5;

            c.beginPath();
            /*
            c.moveTo(x + q, y + q);
            c.lineTo(x + q*3, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.lineTo(x + q, y + q*3);
*/
            c.moveTo(x + q*2, y + q);
            c.arcTo(x + q*3, y + q, x + q*3, y + q*2, q); // 右上
            c.arcTo(x + q*3, y + q*3, x + q*2, y+q*3, q); // 右下
            c.arcTo(x + q, y + q*3, x + q, y + q*2, q); // 左下
            c.arcTo(x + q, y + q, x + q*2, y + q, q);

            c.closePath();
            c.moveTo(x+q*3,y+q*3);
            c.lineTo(x+q*2.25,y+q*2.25);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // R
            x = side * 2;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q*3);
            c.lineTo(x + q, y + q); // |
            c.arcTo(x + q*3, y + q, x+q*3, y+q*2, q*0.5);
            c.arcTo(x + q*3, y + q*2, x+q*2,y+q*2, q*0.5);
            c.lineTo(x + q*1, y + q*2);
            c.moveTo(x+q*2,y+q*2);
            c.lineTo(x + q*3, y + q* 3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // S
            x = side * 3;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*3, y + q); // 右上
            c.arcTo(x + q, y + q, x+q,y+q*2, q*0.5);
            c.arcTo(x + q, y + q * 2, x+q*2,y+q*2, q*0.5);
            c.arcTo(x + q*3, y + q*2, x+q*3,y+q*3, q*0.5);
            c.arcTo(x + q*3, y + q*3, x+q*2,y+q*3, q*0.5);
            c.lineTo(x + q, y + q* 3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // T
            x = side * 4;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q);
            c.lineTo(x+q*3,y+q*1);
            c.moveTo(x + q*2, y + q * 1);
            c.lineTo(x + q*2, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // U
            x = side * 5;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q);
            c.arcTo(x + q, y + q*3, x+q*2,y+q*3, q*1);
            c.arcTo(x + q*3, y + q * 3, x+q*3,y+q*2, q*1);
            c.lineTo(x + q*3, y + q*1);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // V
            x = side * 6;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q);
            c.lineTo(x+q*2,y+q*3);
            c.lineTo(x + q*3, y + q*1);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // W
            x = side * 7;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q);
            c.lineTo(x+q*1.5,y+q*3);
            c.lineTo(x + q*2, y + q*1);
            c.lineTo(x+q*2.5,y+q*3);
            c.lineTo(x+q*3,y+q);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // X
            x = side * 8;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.moveTo(x + q*3, y + q * 1);
            c.lineTo(x + q*1, y + q*3);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // Y
            x = side * 9;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q, y + q);
            c.lineTo(x + q*2, y + q*2);
            c.lineTo(x + q*2, y+q*3);
            c.moveTo(x + q*3, y + q * 1);
            c.lineTo(x + q*2, y + q*2);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // Z
            x = side * 10;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q, y + q);
            c.lineTo(x + q*3, y + q);
            c.lineTo(x + q, y + q * 3);
            c.lineTo(x + q*3, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // [
            x = side * 11;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*2.5, y + q);
            c.lineTo(x + q*1.5, y + q);
            c.lineTo(x + q*1.5, y + q * 3);
            c.lineTo(x + q*2.5, y + q*3);
            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        if (false) { // \ 円
            x = side * 12;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1.25, y + q);
            c.lineTo(x + q*2, y + q*1.5);
            c.lineTo(x+q*2.75,y+q*1);
            c.moveTo(x+q*2,y+q*1.5);
            c.lineTo(x + q*2, y + q * 3);
            c.moveTo(x+q*1.5,y+q*2);
            c.lineTo(x + q*2.5, y + q*2);
            c.moveTo(x+q*1.5,y+q*2.75);
            c.lineTo(x+q*2.5,y+q*2.75);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        } else {
            x = side * 12;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1, y + q);
            c.lineTo(x + q*3, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();         
        }
        { // ]
            x = side * 13;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1.5, y + q);
            c.lineTo(x + q*2.5, y + q);
            c.lineTo(x + q*2.5, y + q * 3);
            c.lineTo(x + q*1.5, y + q*3);
            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
        { // ^
            x = side * 14;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q*1.5, y + q*1.5);
            c.lineTo(x + q*2, y + q);
            c.lineTo(x + q*2.5, y + q * 1.5);
            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }

        { // _
            x = side * 15;
            y = side * 5;

            c.beginPath();
            c.moveTo(x + q, y + q * 3);
            c.lineTo(x + q*3, y + q*3);

            c.lineWidth = out;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
// ここから


    } // drawCr

/**
 * 初期化
 */
    init() {
        console.log(this.cl, `init called`);

        this.drawCr(cv04, true,true);

        this.drawCard(cv01);
        this.drawIcon(cv06);

        drawDot(window.cv00);
        drawColor(window.cv02);
        drawColor(window.cv00);

        drawFire();
    }

/**
 * 320x320以下のアイコン
 * @param {HTMLCanvasElement} cv 
 */
    drawIcon(cv) {
        const w = cv.width;
        const h = cv.height;
        const c = cv.getContext('2d');
        {
            let outw = 14;
            let inw = 8;
            let outc = `rgba(255,255,255,1)`;
            let inc = `rgba(153,153,153,1)`;

            let ft = 10;
            let rr = 20;
            let l = 0 + ft;
            let r = w - ft;
            let t = 0 + ft;
            let b = h - ft;
            c.moveTo(w*0.5,t);
            c.arcTo(r,t, r,h*0.5, rr);
            c.arcTo(r,b, w*0.5,b, rr);
            c.arcTo(l,b, l,h*0.5, rr);
            c.arcTo(l,t, w*0.5,t, rr);
            c.closePath();

            c.lineWidth = outw;
            c.strokeStyle = outc;
            c.stroke();
            c.lineWidth = inw;
            c.strokeStyle = inc;
            c.stroke();
        }
    }

} // class Pack

const pack = new Pack();

window.addEventListener('load', () => {
    pack.init();
});

