// MIT License (c) 2018 hta393939

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 */
var drawAdded = (canvas) => {
  console.log(`drawAdded called`);
  const blockSize = 64;
  const q = blockSize * 0.25;

  let w = canvas.width;
  let h = canvas.height;
  const c = canvas.getContext('2d');
  c.lineCap = 'round';
  c.lineJoin = 'round';

  let x = 0;
  let y = 0;
  let hx = q * 13 / 32;
  let club = q - hx;
  const _suit = (i) => {
    switch (i) {
    case 0: // スペード
      c.moveTo(x + q * 2, y + q); // 上
      c.bezierCurveTo(x + q * 3, y + q * 1.5,
        x + q * 3, y + q * 1.75,
        x + q * 3, y + q * 2, // 右
      );
      c.bezierCurveTo(x + q * 3, y + q * 2.75, // D
        x + q * 2, y + q * 2.75, // D
        x + q * 2, y + q * 1.5, // 中
      );
      c.bezierCurveTo(x + q * 2, y + q * 2.75, // D
        x + q, y + q * 2.75, // D
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
        x + q * 2, y + q * 2,
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
      c.fillStyle = 'rgb(0, 255, 255)';
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
    default:
      c.moveTo(x + q, y + q);
      c.lineTo(x + q * 3, y + q);
      c.lineTo(x + q * 3, y + q * 3);
      c.lineTo(x + q, y + q * 3);
      c.fillStyle = 'rgb(0, 0, 255)';
      break;
    }
  };

  for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      x = j * blockSize;
      y = i * blockSize;

      c.beginPath();
      if (i === 0) {
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
};
