/**
 * SPDX-License-Identifier: MIT
 * (c) 2026 hta393939
 */

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {number} size 
 */
var drawAdded = (canvas, size) => {
  console.log(`drawAdded called`);
  const suitRow = 4;
  const blockSize = 64;
  const q = blockSize * 0.25;

  let w = canvas.width;
  let h = canvas.height;
  const c = canvas.getContext('2d');
  const scale = size / blockSize;
  c.scale(scale, scale);
  c.lineCap = 'round';
  c.lineJoin = 'round';

  let x = 0;
  let y = 0;
  let hx = q * 13 / 32;
  let club = q - hx;

  const _joker = () => {
    c.beginPath();
    // 顔
    c.moveTo(x + q, y + q * 2);
    c.arcTo(x + q, y + q * 3, x + q * 2, y + q * 3, q);
    c.arcTo(x + q * 3, y + q * 3, x + q * 3, y + q * 2, q);
    c.arcTo(x + q * 3, y + q * 1, x + q * 2, y + q, q);
    c.arcTo(x + q, y + q, x + q, y + q * 2, q);
    c.closePath();

          c.fillStyle = 'rgb(255, 255, 255)';

          c.lineWidth = 8; // 外側
          c.strokeStyle = 'rgb(255,255,255)';
          c.stroke();
          c.fill();

    const leftCol = 'white';
    let faceCol = 'rgb(255, 128, 0)';
    faceCol = 'black';
      // 顔左半分
      c.beginPath();
      c.ellipse(x + q * 2, y + q * 2, q, q,
        0, -Math.PI * 0.5, Math.PI * 0.5,
      );
      c.fillStyle = faceCol;
      c.fill();

      c.beginPath();
      c.ellipse(x + q * 2, y + q * 2, q, q,
        0, 0, Math.PI * 2,
      );

          c.lineWidth = 4;
          c.strokeStyle = 'rgb(0,0,0)';
          c.stroke();

    c.beginPath();
    c.rect(x, y, q * 2, q * 4);
    c.save();
    c.clip();
    {
      c.beginPath();
      const noseR = q * 0.5;
      c.ellipse(x + q * 2, y + q * 2, noseR, noseR, 0,
        Math.PI * 0.5, Math.PI * 0.75);

      c.strokeStyle = 'rgb(255,0,0)';
      c.lineWidth = 4;
      c.stroke();
    }
    c.restore();

    c.beginPath();
    c.rect(x + q * 2, y, q * 2, q * 4);
    c.save();
    c.clip();
    { // 口左
      c.beginPath();
      c.moveTo(x + q * 2, y + q * 2.5);
      c.lineTo(x + q * 2.25, y + q * 2.5);

      c.strokeStyle = leftCol;
      c.lineWidth = 4;
      c.stroke();      
    }
    c.restore();

    let cy = y + q * 1.825;
    {
      const cx = x + q * 1.5;

      c.beginPath();
      c.moveTo(cx - q * 0.25, cy);
      c.lineTo(cx + q * 0.25, cy);
      c.moveTo(cx, cy - q * 0.25);
      c.lineTo(cx, cy + q * 0.25);
      c.lineWidth = 4;
      c.strokeStyle = 'rgb(0, 0, 0)';
      c.stroke();
    }
    { // 左目
      c.beginPath();
      c.ellipse(x + q * 2.5, cy,
        q * 0.25, q * 0.25, 0, 0, Math.PI * 2);

      c.fillStyle = leftCol;
      c.fill();    
    }
  };

  const _star = () => {
    let outw = 9;
    let inw = 5;
    if (false) {
      outw = 14;
      inw = 8;
    }
    let ftx = 64 * 7;
    let fty = 64 * 4;

          c.lineWidth = outw - 4; // NOTE: 星
          let rr = 20;
          let cx = ftx + 32;
          let cy = fty + 32 + 1;
          c.beginPath();
          c.moveTo(cx, cy - rr);
          for (let i = 1; i < 10; i++) {
            let ang = Math.PI * 2 * i * 1 / 10;
            let r = (((i & 1) === 0) ? 1 : 0.47) * rr;
            c.lineTo(Math.sin(ang) * r + cx,
              cy - r * Math.cos(ang));
          }
          c.closePath();

          c.strokeStyle = `rgba(0,0,0,1)`; 
          c.stroke();

          c.fillStyle = `rgba(255,238,0, 1)`;
          c.fill();
  };

  const _suit = (i) => {
    const sh = y + q * 2.75;
    //const sh = y + q * 3;
    switch (i) {
    case 0: // スペード

      c.moveTo(x + q * 2, y + q); // 上
      c.bezierCurveTo(x + q * 3, y + q * 1.5,
        x + q * 3, y + q * 1.75,
        x + q * 3, y + q * 2, // 右
      );
      c.bezierCurveTo(x + q * 3, sh, // D
        x + q * 2, sh, // D
        x + q * 2, y + q * (1.5 + 0.75), // 中
      );
      c.bezierCurveTo(x + q * 2, sh, // D
        x + q, sh, // D
        x + q, y + q * 2, // 左
      );
      c.bezierCurveTo(x + q * 1, y + q * 1.75,
        x + q * 1, y + q * 1.5,
        x + q * 2, y + q, // 上
      );

      
      c.moveTo(x + q * 1.5, y + q * 3); // 左
      c.bezierCurveTo(
        x + q * 1.75, y + q * 2.75, // 下
        x + q * 2, y + q * 2.25, // 上
        x + q * 2, y + q * (2 + 0.25),
      ); // 中上
      c.bezierCurveTo(
        x + q * 2, y + q * 2.25, // 上
        x + q * 2.25, y + q * 2.75, // 下
        x + q * 2.5, y + q * 3,
      ); // 右下
      c.closePath();
      
      c.fillStyle = 'rgb(0, 0, 0)';
      break;
    case 1: // ハート
      c.moveTo(x + q * 2, y + q * 1.75); // C
      c.bezierCurveTo( // 右
        x + q * 2, y + q * 1,
        x + q * 3, y + q * 1,
        x + q * 3, y + q * 2);
      c.bezierCurveTo( // 右下へ
        x + q * 3, y + q * 2.25, // B
        x + q * 3, y + q * 2.5, // A
        x + q * 2, y + q * 3);
      c.bezierCurveTo( // 中下の左
        x + q * 1, y + q * 2.5, // A
        x + q * 1, y + q * 2.25, // B
        x + q, y + q * 2,
      );
      c.bezierCurveTo(
        x + q, y + q * 1,
        x + q * 2, y + q * 1,
        x + q * 2, y + q * 1.75, // C
      );
      c.fillStyle = 'rgb(255, 0, 0)';
      break;
    case 2: // ダイヤ
      c.moveTo(x + q * 2, y + q);
      c.lineTo(x + q * 3, y + q * 2);
      c.lineTo(x + q * 2, y + q * 3);
      c.lineTo(x + q, y + q * 2);
      //c.fillStyle = 'rgb(0, 255, 255)';
      c.fillStyle = 'rgb(255, 255, 0)';
      break;
    case 3: // クラブ
      c.ellipse(x + q * 2, y + q * 2 - club,
        hx, hx, 0, 0, Math.PI * 2
      ); // 上

      c.moveTo(x + q * 2 + club + hx, y + q * 2);
      c.ellipse(x + q * 2 + club, y + q * 2,
        hx, hx, 0, 0, Math.PI * 2
      );

      c.moveTo(x + q * 2 - club + hx, y + q * 2);
      c.ellipse(x + q * 2 - club, y + q * 2,
        hx, hx, 0, 0, Math.PI * 2
      );

      c.moveTo(x + q * 1.5, y + q * 3); // 左
      c.bezierCurveTo(
        x + q * 1.75, y + q * 2.75, // 下
        x + q * 2, y + q * 2.25, // 上
        x + q * 2, y + q * 2,
      ); // 中上
      c.bezierCurveTo(
        x + q * 2, y + q * 2.25, // 上
        x + q * 2.25, y + q * 2.75, // 下
        x + q * 2.5, y + q * 3,
      ); // 右下
      c.closePath();

      c.fillStyle = 'rgb(0, 255, 0)';
      break;

    case 7:
      _star();
      break;

    default:
      c.moveTo(x + q, y + q);
      c.lineTo(x + q * 3, y + q);
      c.lineTo(x + q * 3, y + q * 3);
      c.lineTo(x + q, y + q * 3);
      c.fillStyle = 'rgb(0, 0, 255)';
      break;
    }
  };



  for (let i = 4; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      x = j * blockSize;
      y = i * blockSize;

      if (i === suitRow) {
        if (j === 4) {
          _joker();
          continue;
        }

        if (j === 0) {
          c.beginPath();
          _suit(0);

          c.fillStyle = 'rgb(96,96,96)';

          c.lineWidth = 8;
          c.strokeStyle = 'rgb(255,255,255)';
          c.stroke();
          c.fill();

          c.lineWidth = 4;
          c.strokeStyle = 'rgb(0,0,0)';
          //c.strokeStyle = 'white';
          c.stroke();
          continue;
        }
      }

      c.beginPath();
      if (i === suitRow) {
        _suit(j);
      }
      c.closePath();

      c.lineWidth = 8;
      c.strokeStyle = 'rgb(255,255,255)';
      c.stroke();
      //c.fillStyle = `rgb(255, 0, 0)`;
      c.fill();

      c.lineWidth = 4;
      c.strokeStyle = 'rgb(0,0,0)';
      c.stroke();
    }
  }

  c.resetTransform();
};
