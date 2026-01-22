
// MIT License (c) 2018 hta393939

/**
 * クラス
 */
class Misc {
  constructor() {
    this.texs = [];
  }

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
   * @param {boolean} outblack 外側が黒
   * @param {string} innerColor 塗り色
   */
  drawChar(cv, outblack, fillColor, inside = 64) {
    console.log('drawChar', inside);
    let w = inside * 8;
    let h = inside * 8;
    let scale = inside / 64;

    cv.width = w;
    cv.height = h;
    const c = cv.getContext('2d');
    c.scale(scale, scale);

    let x = 0;
    let y = 0;
    /** スケールで変更するのでここは64固定 */
    const side = 64;
    const q = side / 4;

    let out = 14;
    let outw = 14;
    let inw = 8;
    let outc = outblack ? 'black' : `rgba(255,255,255, 1)`;
    let inc = outblack ? 'white' : `rgba(0,0,0,0)`;
    //let fillc = fillColor;

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
      c.arcTo(x + q*3, y + q, x + q*3, y + q*2, q * 0.75); // 右上
      c.arcTo(x + q*3, y + q*3, x + q*2, y+q*3, q * 0.75); // 右下
      c.arcTo(x + q, y + q*3, x + q, y + q*2, q * 0.75); // 左下
      c.arcTo(x + q, y + q, x + q*2, y + q, q * 0.75);
      c.lineTo(x + q * 2, y + q);

      const ad1 = q * 0.5;
      c.moveTo(x + q * 3 - ad1, y + q * 1 + ad1);
      c.lineTo(x + q * 1 + ad1, y + q * 3 - ad1);

      //c.closePath();

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
      c.moveTo(x + q * 2.25, y + q * 2); // ここ 2.0
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
      //c.arcTo(x + q*2, y + q*2, x+q*2,y+q*2.5, q*0.5); // NOTE: 曲げ
      c.lineTo(x + q * 2, y + q * 2);

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
      const ad2 = 0.25 * q;

      c.beginPath();
      c.moveTo(x + q*3 - ad2, y + q); // 右上
      c.arcTo(x + q, y + q, x+q,y+q*2, q*0.5);
      c.arcTo(x + q, y + q * 2, x+q*2,y+q*2, q*0.5);
      c.arcTo(x + q*3, y + q*2, x+q*3,y+q*3, q*0.5);
      c.arcTo(x + q*3, y + q*3, x+q*2,y+q*3, q*0.5);
      c.lineTo(x + q + ad2, y + q* 3);
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

    c.resetTransform();
  } // drawChar


  /**
   * 初期化する
   */
  init() {
    console.log(`init called`);

    drawCard(cv01);
    drawCard2(cv01);

    this.drawChar(cv02, true, '');
    this.drawChar(cv03, false, '');

    this.drawChar(cv05, true, 'black', 64);
    this.drawIcon(cv06);

    {
      this.drawChar(cv23, true, 'black', 48);
    }

    {
      drawCard(window.cv11, 32);
      drawCard2(window.cv11, 32);
      this.drawChar(window.cv12, true, 'black', 32);
      this.drawChar(window.cv13, true, '#ff0000', 32);
    }
    
    {
      drawCard(window.cv22, 48);
      drawCard2(window.cv22, 48);
    }
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
