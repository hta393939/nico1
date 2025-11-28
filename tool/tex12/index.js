
// MIT License (c) 2018 hta393939

/**
 * クラス
 */
class Misc {
  constructor() {
    this.texs = [];
  }

  /**
   * カード描画したい 4つ
   * @param {HTMLCanvasElement} cv 
   */
  /*
  drawCard(cv) {
    const _this = this;
    let x = 0;
    let y = 0;
    let q = 0;
    const w = 64; // 1つのサイズ
    const h = 64;
    cv.width = w * 4;
    cv.height = h * 4;
    const c = cv.getContext('2d');
    {
      let outw = 7;
      let inw = 4;
      c.lineCap = `round`;
      c.lineJoin = `round`;

      c.fillStyle = `rgb(0,102,0)`;
      //c.fillRect(0,0, 4096,4096);

      [0,1,2,3,4,5,6,7,
        8,9,10,11,12,13,14,15].forEach(k=>{
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

      });
    }


  }
*/

  /**
   * 
   * @param {HTMLCanvasElement} cv 
   * @param {{side: number, out: number, inw: number}} inopt 
   */
  drawNum(cv, inopt) {
    const c = cv.getContext('2d');
    cv.width = inopt.width;
    cv.height = inopt.height;

    let x = 0;
    let y = 0;
    const side = inopt.side;
    const q = side / 4;
    if (false) {
      for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
          x = j * side;
          y = i * side;
          c.fillStyle = ((i+j)&1) ? `rgb(0,51,0)` : `rgb(0,204,0)`;
          c.fillRect(x,y, side,side);
        }
      }
    }

    let out = inopt.out;
    let inw = inopt.inw;
    let outc = `rgba(255,255,255, 1)`;
    let inc = `rgba(0,0,0, 1)`;
    c.lineCap = 'round';
    c.lineJoin = 'round';
    { // 0
      x = side * 0;
      y = 0;

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

    { // 1
      x = side * 1;
      y = 0;

      c.beginPath();
      c.moveTo(x + q*2, y + q*3);
      c.lineTo(x + q*2, y + q);
      c.arcTo(x+q*2, y+q*1.5, x + q * 1.5, y + q * 1.5, q*0.5);

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 2
      x = side * 2;
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1.5);
      c.arcTo(x+q,y+q, x+q*2,y+q, q*0.5);
      c.arcTo(x + q*3, y + q*1, x + q*3, y + q*2.5, q*0.5); // -

      c.bezierCurveTo(x+q*3,y+q*2.25, x+q,y+q*2, x+q,y+q*3);
/*
      c.arcTo(x+q*3,y+q*1.75, x+q*2.75,y+q*1.875, q*0.5);
      c.lineTo(x+q, y+q*2.625);
      */

//            c.lineTo(x+q,y+q*3);
      c.lineTo(x + q*3, y + q * 3); // _

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      //c.strokeStyle = 'green';
      c.stroke();
    } // here drawNum()

    { // 3
      x = side * 3;
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1.5);
      c.arcTo(x+q,y+q, x+q*2,y+q, q*0.5);
      c.arcTo(x + q*3, y + q*1, x+q*3,y+q*1.5, q*0.5);
      c.arcTo(x + q*3, y + q*2, x+q*2.5, y+q*2, q*0.5);
      c.arcTo(x+q*3,y+q*2, x+q*3,y+q*2.5, q*0.5);
      c.arcTo(x+q*3,y+q*3, x+q*2.5,y+q*3, q*0.5);
      c.arcTo(x + q * 1, y + q*3, x+q,y+q*2.5, q*0.5);
      c.moveTo(x + q * 2, y + q * 2); // ここ
      c.lineTo(x + q * 2.5, y + q * 2);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 4
      x = side * 0;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*3, y + q*2.5);
      c.lineTo(x + q*1, y + q*2.5);
      c.lineTo(x + q, y + q*2);
      c.lineTo(x+q*2, y+q);
      c.lineTo(x + q*2.5, y + q*1);
      c.lineTo(x + q * 2.5, y + q * 3);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 5
      x = side * 1;
      y = side * 1;

      c.beginPath();
        c.moveTo(x + q*3, y + q*1);
        c.lineTo(x + q, y + q*1);
        c.lineTo(x + q, y + q*2);
        c.arcTo(x + q * 3, y + q*2, x + q * 3, y + q * 2.5, q * 0.5);
        c.arcTo(x + q * 3, y + q * 3, x + q*2.5, y + q*3, q * 0.5);
        c.lineTo(x + q, y + q * 3);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 6
      x = side * 2;
      y = side * 1;

      c.beginPath();
        c.moveTo(x + q*3, y + q*1);
        //c.arcTo(x+q*3,y+q, x+q*2,y+q, q*0.5);
        c.arcTo(x + q, y + q*1, x+q,y+q*1.5, q*0.5);
        c.arcTo(x + q, y + q*3, x+q*2,y+q*3, q*0.5); // 左下
        c.arcTo(x + q * 3, y + q*3, x+q*3, y+q*2.5, q*0.5);
        c.arcTo(x + q * 3, y + q * 2, x+q*2,y+q*2, q*0.5);
        c.lineTo(x + q, y + q * 2);

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();

      if (false) {
      c.beginPath();
      c.moveTo(x+q*2,y+q*3);
      c.lineTo(x+q*2,y+q*3);
      c.strokeStyle = `red`;
      c.stroke();
      }
    } // here drawNum()

    { // 7
      x = side * 3;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q, y + q*1.5);
      c.lineTo(x + q, y + q);
      c.lineTo(x + q * 3, y + q);
      c.lineTo(x + q * 2, y + q * 3);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 8
      x = side * 0;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*2, y + q*1);
      c.arcTo(x + q*3, y + q*1, x+q*3, y+q*1.5, q*0.5);
      c.arcTo(x + q*3, y+q*2, x+q*2, y+q*2, q*0.5); // ・
      c.arcTo(x + q, y + q*2, x+q, y+q*2.5, q*0.5);
      c.arcTo(x+q,y+q*3, x+q*2, y+q*3, q*0.5); // .
      c.arcTo(x+q*3,y+q*3, x+q*3,y+q*2.5, q*0.5);
      c.arcTo(x+q*3,y+q*2, x+q*2,y+q*2, q*0.5); // ・
      c.arcTo(x+q, y+q*2, x+q, y+q*1.5, q*0.5);
      c.arcTo(x+q,y+q, x+q*2,y+q, q*0.5);

      c.closePath();
      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 9 here drawNum()
      x = side * 1;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*3, y + q*2);
      //c.arcTo(x+q*3,y+q*2, x+q*2,y+q*2, q*0.5);
      c.arcTo(x + q, y + q*2, x+q, y+q, q*0.5);
      c.arcTo(x + q, y + q, x+q*2,y+q, q*0.5);
      c.arcTo(x + q * 3, y + q, x+q*3,y+q*2, q*0.5);
      c.arcTo(x + q * 3, y + q * 3, x + q*2.5, y + q * 3, q*0.5);
      c.lineTo(x+q, y+q*3);

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();

      if (false) {
      c.beginPath();
      c.moveTo(x+q*2,y+q*3);
      c.lineTo(x+q*2,y+q*3);
      c.strokeStyle = `red`;
      c.stroke();
      }
    }

    { // .
      x = side * 2;
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

    { // +
        x = side * 0;
        y = side * 3;

        c.beginPath();
          c.moveTo(x + q*2, y + q*1.5);
          c.lineTo(x + q*2, y + q*2.5);
          c.moveTo(x + q*1.5, y + q * 2);
          c.lineTo(x + q*2.5, y + q*2);

          c.lineWidth = out;
          c.strokeStyle = outc;
        c.stroke();
        c.lineWidth = inw;
        c.strokeStyle = inc;
        c.stroke();
    }

    { // -
      x = side * 1;
      y = side * 3;

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

  { // x
    x = side * 2;
    y = side * 3;

    c.beginPath();
    if (false) {
      c.moveTo(x + q, y + q);
      c.lineTo(x + q*3, y + q*3);
      c.moveTo(x + q*3, y + q * 1);
      c.lineTo(x + q*1, y + q*3);
    } else {
      y += q*0.5;
      c.moveTo(x + q*1.5, y + q*1.5);
      c.lineTo(x + q*2.5, y + q*2.5);
      c.moveTo(x + q*2.5, y + q * 1.5);
      c.lineTo(x + q*1.5, y + q*2.5);
      y -= q*0.5;
    }
      c.lineWidth = out;
      c.strokeStyle = outc;
    c.stroke();
    c.lineWidth = inw;
    c.strokeStyle = inc;
    c.stroke();
}

{ // /
  x = side * 3;
  y = side * 3;

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

  }

  /**
   * アルファベットつき
   * @param {HTMLCanvasElement} cv 
   * @param {boolean} isouter 外側
   * @param {boolean} isinner 内側
   */
  drawChar(cv, isouter, isinner) {
    const c = cv.getContext('2d');
    cv.width = 512;
    cv.height = 512;

    let x = 0;
    let y = 0;
    const side = 64;
    const q = side / 4;

    let out = 14;
    let outw = 14;
    let inw = 8;
    let outc = isouter ? `rgba(255,255,255, 1)`: `rgba(0,0,0,0)`;
    let inc = isinner ? `rgba(255,51,51, 1)` : `rgba(0,0,0,0)`;
    if (isouter === false) {
      inc = `rgba(255,255,255, 1)`;
    }

    if (isouter === true && isinner === true) {
      inc = `rgba(0,0,0, 1)`;
    }

    c.lineCap = 'round';
    c.lineJoin = 'round';

    { // !
      x = side * 1;
      y = side * 0;

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
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*1.5, y + q*1);
      c.lineTo(x + q*1.5, y + q*1.5);
      c.moveTo(x + q*2.5, y + q);
      c.lineTo(x + q*2.5, y + q*1.5);
      c.lineWidth = outw;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // #
      x = side * 3;
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1.5);
      c.lineTo(x + q*3, y + q*1.5);
      c.moveTo(x + q*1, y + q*2.5);
      c.lineTo(x + q*3, y + q*2.5);
      c.moveTo(x + q*1.5, y + q*1);
      c.lineTo(x + q*1.5, y + q*3);
      c.moveTo(x + q*2.5, y + q*1);
      c.lineTo(x + q*2.5, y + q*3);
      c.lineWidth = outw;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // $
      x = side * 4;
      y = side * 0;

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
      c.lineWidth = outw;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // %
      x = side * 5;
      y = side * 0;

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
      c.lineWidth = outw;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // &
      x = side * 6;
      y = side * 0;

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
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*2, y + q);
      c.lineTo(x + q*2, y + q*1.5);
      c.lineWidth = outw;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // (
      x = side * 0;
      y = side * 1;

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
      x = side * 1;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*1.5, y + q);
      c.bezierCurveTo(x + q*2.5, y + q*1.25, x+q*2.5,y+q*2.75, x+q*1.5,y+q*3);
      c.lineWidth = outw;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // *
      x = side * 2;
      y = side * 1;

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
      x = side * 3;
      y = side * 1;

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
      x = side * 4;
      y = side * 1;

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
      x = side * 4;
      y = side * 1;
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
      x = side * 5;
      y = side * 1;

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
      x = side * 6;
      y = side * 1;

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
      x = side * 7;
      y = side * 1;
  
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

    if (false) {
    { // 0 ブロック
      x = side * 0;
      y = side * 2;

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
      y = side * 2;

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
      y = side * 2;

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
      y = side * 2;

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
      y = side * 2;

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
      y = side * 2;

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
      y = side * 2;

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
      y = side * 2;

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
      x = side * 0;
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
      x = side * 1;
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
    } // ブロック
  } else { // プロポ
    { // 0
      x = side * 0;
      y = side * 2;

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

    { // 1
      x = side * 1;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*2, y + q*3);
      c.lineTo(x + q*2, y + q);
      c.arcTo(x+q*2, y+q*1.5, x + q * 1.5, y + q * 1.5, q*0.5);

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 2
      x = side * 2;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1.5);
      c.arcTo(x+q,y+q, x+q*2,y+q, q*0.5);
      c.arcTo(x + q*3, y + q*1, x + q*3, y + q*2.5, q*0.5); // -

      c.bezierCurveTo(x+q*3,y+q*2.25, x+q,y+q*2, x+q,y+q*3);
/*
      c.arcTo(x+q*3,y+q*1.75, x+q*2.75,y+q*1.875, q*0.5);
      c.lineTo(x+q, y+q*2.625);
      */

//            c.lineTo(x+q,y+q*3);
      c.lineTo(x + q*3, y + q * 3); // _

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      //c.strokeStyle = 'green';
      c.stroke();
    } // here drawNum()

    { // 3
      x = side * 3;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1.5);
      c.arcTo(x+q,y+q, x+q*2,y+q, q*0.5);
      c.arcTo(x + q*3, y + q*1, x+q*3,y+q*1.5, q*0.5);
      c.arcTo(x + q*3, y + q*2, x+q*2.5, y+q*2, q*0.5);
      c.arcTo(x+q*3,y+q*2, x+q*3,y+q*2.5, q*0.5);
      c.arcTo(x+q*3,y+q*3, x+q*2.5,y+q*3, q*0.5);
      c.arcTo(x + q * 1, y + q*3, x+q,y+q*2.5, q*0.5);
      c.moveTo(x + q * 2, y + q * 2); // ここ
      c.lineTo(x + q * 2.5, y + q * 2);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 4
      x = side * 4;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*3, y + q*2.5);
      c.lineTo(x + q*1, y + q*2.5);
      c.lineTo(x + q, y + q*2);
      c.lineTo(x+q*2, y+q);
      c.lineTo(x + q*2.5, y + q*1);
      c.lineTo(x + q * 2.5, y + q * 3);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 5
      x = side * 5;
      y = side * 2;

      c.beginPath();
        c.moveTo(x + q*3, y + q*1);
        c.lineTo(x + q, y + q*1);
        c.lineTo(x + q, y + q*2);
        c.arcTo(x + q * 3, y + q*2, x + q * 3, y + q * 2.5, q * 0.5);
        c.arcTo(x + q * 3, y + q * 3, x + q*2.5, y + q*3, q * 0.5);
        c.lineTo(x + q, y + q * 3);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 6
      x = side * 6;
      y = side * 2;

      c.beginPath();
        c.moveTo(x + q*3, y + q*1);
        //c.arcTo(x+q*3,y+q, x+q*2,y+q, q*0.5);
        c.arcTo(x + q, y + q*1, x+q,y+q*1.5, q*0.5);
        c.arcTo(x + q, y + q*3, x+q*2,y+q*3, q*0.5); // 左下
        c.arcTo(x + q * 3, y + q*3, x+q*3, y+q*2.5, q*0.5);
        c.arcTo(x + q * 3, y + q * 2, x+q*2,y+q*2, q*0.5);
        c.lineTo(x + q, y + q * 2);

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();

      if (false) {
      c.beginPath();
      c.moveTo(x+q*2,y+q*3);
      c.lineTo(x+q*2,y+q*3);
      c.strokeStyle = `red`;
      c.stroke();
      }
    } // here drawNum()

    { // 7
      x = side * 7;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q, y + q*1.5);
      c.lineTo(x + q, y + q);
      c.lineTo(x + q * 3, y + q);
      c.lineTo(x + q * 2, y + q * 3);

        c.lineWidth = out;
        c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }

    { // 8
      x = side * 0;
      y = side * 3;

      c.beginPath();
      c.moveTo(x + q*2, y + q*1);
      c.arcTo(x + q*3, y + q*1, x+q*3, y+q*1.5, q*0.5);
      c.arcTo(x + q*3, y+q*2, x+q*2, y+q*2, q*0.5); // ・
      c.arcTo(x + q, y + q*2, x+q, y+q*2.5, q*0.5);
      c.arcTo(x+q,y+q*3, x+q*2, y+q*3, q*0.5); // .
      c.arcTo(x+q*3,y+q*3, x+q*3,y+q*2.5, q*0.5);
      c.arcTo(x+q*3,y+q*2, x+q*2,y+q*2, q*0.5); // ・
      c.arcTo(x+q, y+q*2, x+q, y+q*1.5, q*0.5);
      c.arcTo(x+q,y+q, x+q*2,y+q, q*0.5);

      c.closePath();
      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // 9 here drawNum()
      x = side * 1;
      y = side * 3;

      c.beginPath();
      c.moveTo(x + q*3, y + q*2);
      //c.arcTo(x+q*3,y+q*2, x+q*2,y+q*2, q*0.5);
      c.arcTo(x + q, y + q*2, x+q, y+q, q*0.5);
      c.arcTo(x + q, y + q, x+q*2,y+q, q*0.5);
      c.arcTo(x + q * 3, y + q, x+q*3,y+q*2, q*0.5);
      c.arcTo(x + q * 3, y + q * 3, x + q*2.5, y + q * 3, q*0.5);
      c.lineTo(x+q, y+q*3);

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();

      if (false) {
      c.beginPath();
      c.moveTo(x+q*2,y+q*3);
      c.lineTo(x+q*2,y+q*3);
      c.strokeStyle = `red`;
      c.stroke();
      }
    }
  } // プロポ

    { // :
      x = side * 2;
      y = side * 3;

      c.beginPath();
      c.moveTo(x + q*2, y + q*1.25);
      c.lineTo(x + q*2, y + q*1.25);
      c.moveTo(x+q*2,y+q*2.75);
      c.lineTo(x + q*2, y + q*2.75);
      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    if (false) { // ;
      x = side * 3;
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
      x = side * 3;
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
      x = side * 4;
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
      x = side * 5;
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
      x = side * 6;
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
      x = side * 7;
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

    { // I
      x = side * 5;
      y = side * 5;

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
      x = side * 0;
      y = side * 5;

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
      x = side * 1;
      y = side * 5;

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
      x = side * 2;
      y = side * 5;

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
      x = side * 3;
      y = side * 5;

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
      x = side * 4;
      y = side * 5;

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
      x = side * 6;
      y = side * 5;

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
      x = side * 7;
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

      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();
      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();
    }
    { // P
      x = side * 0;
      y = side * 6;

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
      y = side * 6;

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
      y = side * 6;

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
      y = side * 6;

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
      y = side * 6;

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
      y = side * 6;

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
      y = side * 6;

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
      y = side * 6;

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
      x = side * 0;
      y = side * 7;

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
      x = side * 1;
      y = side * 7;

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
      x = side * 2;
      y = side * 7;

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
      x = side * 3;
      y = side * 7;

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
      x = side * 4;
      y = side * 7;

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
      x = side * 4;
      y = side * 7;

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
      x = side * 5;
      y = side * 7;

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
      x = side * 6;
      y = side * 7;

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
      x = side * 7;
      y = side * 7;

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

  } // drawChar


  /**
   * 初期化する
   */
  init() {
    console.log(`init called`);
    this.drawNum(cv00, { width: 256, height: 256,
      side: 64, out: 14, inw: 8
    });

    drawCard(cv01);
    drawCard2(cv01);

    this.drawChar(cv02, true, false);
    this.drawChar(cv03, false, true);

    this.drawChar(cv05, true, true);
    this.drawIcon(cv06);

    this.drawNum(cv07, { width: 128, height: 128,
      side: 32, out: 7, inw: 4
    });

    drawCard(window.cv11, 32);
    drawCard2(window.cv11, 32);
  }

  /**
   * 320x320以下のアイコン
   * @param {HTMLCanvasElement} cv 
   */
  drawIcon(cv) {
    console.log('drawIcon');
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

const misc = new Misc();
misc.init();
