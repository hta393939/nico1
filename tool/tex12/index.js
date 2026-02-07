
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
   * @param {boolean} outwhite 外側が白
   * @param {string} innerColor 塗り色
   */
  drawChar(cv, outwhite, fillColor, inside = 64) {
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
    /** 元のサイズ */
    let outw = 14;
    /** 元のサイズ */
    let inw = 8;
    let fillw = 6;
    let outc = outwhite ? `rgba(255,255,255, 1)` : 'black';
    let inc = outwhite ? 'black' : 'white';
    //let fillc = fillColor;

    c.lineCap = 'round';
    c.lineJoin = 'round';

    out = 16;
    outw = 16;
    inw = 12;
    fillw = 8;
    if (inside === 48) {
      out = 16;
      outw = 16;
      inw = 12;
      fillw = 8;
    } else if (inside <= 32) {
      out = 22;
      outw = 22;
      inw = 14;
      fillw = 6;     
    }

    const _draw = () => {
      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();

      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke();

      c.lineWidth = fillw;
      c.strokeStyle = fillColor;
      c.stroke();

/*
      c.lineWidth = out;
      c.strokeStyle = outc;
      c.stroke();

      c.lineWidth = inw;
      c.strokeStyle = inc;
      c.stroke(); */
    };

    { // !
      x = side * 1;
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*2, y + q*3);
      c.lineTo(x + q*2, y + q*3);
      c.moveTo(x + q*2, y + q);
      c.lineTo(x + q*2, y + q*2);
      _draw();
    }
    { // "
      x = side * 2;
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*1.5, y + q*1);
      c.lineTo(x + q*1.5, y + q*1.5);
      c.moveTo(x + q*2.5, y + q);
      c.lineTo(x + q*2.5, y + q*1.5);
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
    }
    { // '
      x = side * 7;
      y = side * 0;

      c.beginPath();
      c.moveTo(x + q*2, y + q);
      c.lineTo(x + q*2, y + q*1.5);
      _draw();
    }

    { // (
      x = side * 0;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*2.5, y + q);
      c.bezierCurveTo(x + q*1.5, y + q*1.25, x+q*1.5,y+q*2.75, x+q*2.5,y+q*3);
      _draw();
    }
    { // )
      x = side * 1;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*1.5, y + q);
      c.bezierCurveTo(x + q*2.5, y + q*1.25, x+q*2.5,y+q*2.75, x+q*1.5,y+q*3);
      _draw();
    }
    { // *
      x = side * 2;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*1.5, y + q*1.5);
      c.lineTo(x + q*2.5, y + q*2.5);
      c.moveTo(x + q*2.5, y + q * 1.5);
      c.lineTo(x + q*1.5, y + q*2.5);
      _draw();
    }
    { // +
      x = side * 3;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*2, y + q);
      c.lineTo(x + q*2, y + q*3);
      c.moveTo(x + q, y + q * 2);
      c.lineTo(x + q*3, y + q*2);

      _draw();
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

      _draw();        
    }
    { // -
      x = side * 5;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q, y + q * 2);
      c.lineTo(x + q*3, y + q*2);

      _draw();
    }

    { // .
      x = side * 6;
      y = side * 1;

      c.beginPath();
      c.moveTo(x + q*2, y + q*3);
      c.lineTo(x + q*2, y + q*3);

      _draw();
    }
    { // /
      x = side * 7;
      y = side * 1;
  
      c.beginPath();
        c.moveTo(x + q*3, y + q);
        c.lineTo(x + q*1, y + q*3);
  
      _draw();
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

      _draw();
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

      _draw();
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

      _draw();
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

      _draw();
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

      _draw();
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

      _draw();
    }

    { // 7
      x = side * 7;
      y = side * 2;

      c.beginPath();
        c.moveTo(x + q, y + q*2);
        c.lineTo(x + q, y + q);
        c.lineTo(x + q * 3, y + q);
        c.lineTo(x + q * 3, y + q * 3);

      _draw();
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

      _draw();
    }

    { // 1
      x = side * 1;
      y = side * 2;

      c.beginPath();
      c.moveTo(x + q*2, y + q*3);
      c.lineTo(x + q*2, y + q);
      c.arcTo(x+q*2, y+q*1.5, x + q * 1.5, y + q * 1.5, q*0.5);

      _draw();
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

      _draw();
    } // here drawNum()

    { // 3
      x = side * 3;
      y = side * 2;
      // MARK: 3
      c.beginPath();
      let cx = 1.5;
      c.moveTo(x + q*(cx-0.866 * 0.5), y + q*(1.5-0.5*0.5));
      let ans = 0.5 / 0.866 * 0.5;
      //let ans = 0.3;
      c.arcTo(x + q * (cx-ans), y + q, x + q * 2 , y + q, q * 0.5);
      //c.lineTo(x + q * 2, y + q);
      c.arcTo(x + q*3, y + q*1, x+q*3,y+q*1.5, q*0.5);
      c.arcTo(x + q*3, y + q*2, x+q*2.5, y+q*2, q*0.5);
      c.arcTo(x+q*3,y+q*2, x+q*3,y+q*2.5, q*0.5);
      c.arcTo(x+q*3,y+q*3, x+q*2.5,y+q*3, q*0.5);

      c.moveTo(x + q*(cx-0.866*0.5), y + q*(2.5+0.5*0.5));
      c.arcTo(x + q * (cx - ans), y + q * 3, x + q * 2, y + q*3, q * 0.5);
      c.lineTo(x + q * 2.5, y + q * 3);

      c.moveTo(x + q * 2, y + q * 2); // ここ 2.0
      c.lineTo(x + q * 2.5, y + q * 2);

      _draw();
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

      _draw();
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

      _draw();
    }

    { // 6
      x = side * 6;
      y = side * 2;

      c.beginPath();
        c.moveTo(x + q* 3, y + q*1);
        //c.arcTo(x+q*3,y+q, x+q*2,y+q, q*0.5);
        c.arcTo(x + q, y + q*1, x+q,y+q*1.5, q*0.5);
        c.arcTo(x + q, y + q*3, x+q*2,y+q*3, q*0.5); // 左下
        c.arcTo(x + q * 3, y + q*3, x+q*3, y+q*2.5, q*0.5);
        c.arcTo(x + q * 3, y + q * 2, x+q*2,y+q*2, q*0.5);
        c.lineTo(x + q, y + q * 2);

      _draw();

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

      _draw();
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

      _draw();
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
      c.lineTo(x+q * 1, y+q*3);

      //c.moveTo(x + q, y + q * 3);
      //c.lineTo(x + q, y + q * 3);

      _draw();
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
      _draw();
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
      _draw();
    }
    { // <
      x = side * 4;
      y = side * 3;

      c.beginPath();
      c.moveTo(x + q*3, y + q*1);
      c.lineTo(x + q, y + q*2);
      c.lineTo(x + q*3, y + q*3);
      _draw();
    }
    { // =
      x = side * 5;
      y = side * 3;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1.5);
      c.lineTo(x + q*3, y + q*1.5);
      c.moveTo(x+q,y+q*2.5);
      c.lineTo(x + q*3, y + q*2.5);
      _draw();
    }
    { // >
      x = side * 6;
      y = side * 3;

      c.beginPath();
      c.moveTo(x + q*1, y + q*1);
      c.lineTo(x + q*3, y + q*2);
      c.lineTo(x + q*1, y + q*3);
      _draw();
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
      _draw();
    }

    { // @ 10
      x = side * 0;
      y = side * 4;
      const rten = q * 0.5;
      const cxten = x + q * 2 + rten;
      const cyten = y + q * 2;
      c.beginPath();
      c.moveTo(x + q, y + q);
      c.lineTo(x + q, y + q * 3);

      c.moveTo(cxten, y + q);
      c.arcTo(x + q * 3, y + q, x + q * 3, y + q + rten, rten); // 円弧開始点終了点
      c.arcTo(x + q * 3, y + q * 3, cxten, y + q * 3, rten);
      c.arcTo(x + q * 2, y + q * 3, x + q * 2, y + q * 3 - rten, rten);
      c.arcTo(x + q * 2, y + q, cxten, y + q, rten);
      c.closePath();

      _draw();
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
      _draw();
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
      _draw();
    }
    { // C
      x = side * 3;
      y = side * 4;

      c.beginPath();
      c.moveTo(x + q*3, y + q);
      c.arcTo(x + q, y + q, x+q, y+q*2, q);
      c.arcTo(x + q, y + q*3, x + q*2, y+q*3, q);
      c.lineTo(x + q * 3, y + q * 3);
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
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
      _draw();
    }
    { // J
      x = side * 2;
      y = side * 5;

      c.beginPath();
      c.moveTo(x + q * 3, y + q);
      c.lineTo(x + q * 2, y + q);

      c.moveTo(x + q * 2.5, y + q);
      //c.arcTo(x + q * 2.5, y + q * 3, x + q * 2, y + q*3, q * 0.5);
      //c.arcTo(x + q * 1.5, y + q * 3, x + q * 1.5, y + q * 2.5, q * 0.5);

      c.arcTo(x + q * 2.5, y + q * 3, x + q * 1.5, y + q * 3, q);
      // (0.5, 0.866) + rate * (0.866, 0.5) = (ans, 1)
      let rate = (1 - 0.866) / 0.5;
      let ans = 0.5 + rate * 0.866;
      console.log('ans', ans);
      c.arcTo(x + q * (0.5 + ans), y + q * 3,
        x + q * 1, y + q * (2 + 0.866), q);

      _draw();
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
      _draw();
    }
    { // L
      x = side * 4;
      y = side * 5;

      c.beginPath();
      c.moveTo(x + q * 1.5, y + q);
      c.lineTo(x + q*1.5, y + q*3);
      c.lineTo(x + q*3, y + q *3);
      _draw();
    }

    { // N
      x = side * 6;
      y = side * 5;

      c.beginPath();
      c.moveTo(x + q * 3, y + q);
      c.lineTo(x + q*3, y + q*3);
      c.lineTo(x + q*1, y + q *1);
      c.lineTo(x + q*1, y + q*3);
      _draw();
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

      _draw();
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
      _draw();
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

      _draw();
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
      _draw();
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
      _draw();
    }
    { // T
      x = side * 4;
      y = side * 6;

      c.beginPath();
      c.moveTo(x + q*1, y + q);
      c.lineTo(x+q*3,y+q*1);
      c.moveTo(x + q*2, y + q * 1);
      c.lineTo(x + q*2, y + q*3);
      _draw();
    }
    { // U
      x = side * 5;
      y = side * 6;

      c.beginPath();
      c.moveTo(x + q*1, y + q);
      c.arcTo(x + q, y + q*3, x+q*2,y+q*3, q*1);
      c.arcTo(x + q*3, y + q * 3, x+q*3,y+q*2, q*1);
      c.lineTo(x + q*3, y + q*1);
      _draw();
    }
    { // V
      x = side * 6;
      y = side * 6;

      c.beginPath();
      c.moveTo(x + q*1, y + q);
      c.lineTo(x+q*2,y+q*3);
      c.lineTo(x + q*3, y + q*1);
      _draw();
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
      _draw();
    }

    { // X
      x = side * 0;
      y = side * 7;

      c.beginPath();
      c.moveTo(x + q, y + q);
      c.lineTo(x + q*3, y + q*3);
      c.moveTo(x + q*3, y + q * 1);
      c.lineTo(x + q*1, y + q*3);

      _draw();
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

      _draw();
    }
    { // Z
      x = side * 2;
      y = side * 7;

      c.beginPath();
      c.moveTo(x + q, y + q);
      c.lineTo(x + q*3, y + q);
      c.lineTo(x + q, y + q * 3);
      c.lineTo(x + q*3, y + q*3);
      _draw();
    }

    { // [
      x = side * 3;
      y = side * 7;

      c.beginPath();
      c.moveTo(x + q*2.5, y + q);
      c.lineTo(x + q*1.5, y + q);
      c.lineTo(x + q*1.5, y + q * 3);
      c.lineTo(x + q*2.5, y + q*3);
      _draw();
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
      _draw();         
    }
    { // ]
      x = side * 5;
      y = side * 7;

      c.beginPath();
      c.moveTo(x + q*1.5, y + q);
      c.lineTo(x + q*2.5, y + q);
      c.lineTo(x + q*2.5, y + q * 3);
      c.lineTo(x + q*1.5, y + q*3);
      _draw();
    }
    { // ^
      if (false) { // 上ハット
        x = side * 6;
        y = side * 7;

        c.beginPath();
        c.moveTo(x + q*1.5, y + q*1.5);
        c.lineTo(x + q*2, y + q);
        c.lineTo(x + q*2.5, y + q * 1.5);
        _draw();
      } else {
        x = side * 6;
        y = side * 7;
        c.beginPath();
        c.moveTo(x + q*1, y + q * 3);
        c.lineTo(x+q*2,y+q* 1);
        c.lineTo(x + q*3, y + q*3);

        _draw();
      }
    }

    { // _
      x = side * 7;
      y = side * 7;

      c.beginPath();
      c.moveTo(x + q, y + q * 3);
      c.lineTo(x + q*3, y + q*3);

      _draw();
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

    this.drawChar(cv02, true, 'white');
    this.drawChar(cv03, true, 'red');

    this.drawChar(cv05, true, 'white', 64);
    this.drawIcon(cv06);

    {
      const target = window.cv11;
      drawCard(target, 32);
      drawCard2(target, 32);
      drawAdded(target, 32);
      this.drawChar(window.cv12, true, 'white', 32);
      this.drawChar(window.cv13, true, '#ff0000', 32);
      this.drawChar(window.cv14, true, '#3333ff', 32);
      this.drawChar(window.cv15, true, '#00ff00', 32);
      this.drawChar(window.cv16, false, '#000000', 32);
    }

    {
      const target = window.cv22;
      drawCard(target, 48);
      drawCard2(target, 48);
      drawAdded(target, 48);

      this.drawChar(cv23, true, 'white', 48);
      this.drawChar(cv24, true, 'red', 48);
      this.drawChar(cv25, true, '#3333ff', 48);
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
