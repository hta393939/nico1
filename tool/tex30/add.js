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
  const _suit = (i) => {
    switch (i) {
    case 0:
      c.moveTo(x + q * 2, y + q);
      c.lineTo(x + q * 3, y + q);
      c.lineTo(x + q * 3, y + q * 3);
      c.lineTo(x + q, y + q * 3);
      c.fillStyle = 'rgb(0, 0, 0)';
      break;
    case 1:
      c.moveTo(x + q * 2, y + q * 2);
      c.bezierCurveTo(
        x + q * 2, y + q * 1,
        x + q * 3, y + q * 1,
        x + q * 3, y + q * 2);
      c.bezierCurveTo(
        x + q * 3, y + q * 2.5,
        x + q * 3, y + q * 2.5,
        x + q * 2, y + q * 3);
      c.lineTo(x + q, y + q * 2);
      c.bezierCurveTo(
        x + q, y + q * 1,
        x + q * 2, y + q * 1,
        x + q * 2, y + q * 2,
      );
      c.fillStyle = 'rgb(255, 0, 0)';
      break;
    case 2:
      c.moveTo(x + q * 2, y + q);
      c.lineTo(x + q * 3, y + q * 2);
      c.lineTo(x + q * 2, y + q * 3);
      c.lineTo(x + q, y + q * 2);
      c.fillStyle = 'rgb(255, 0, 0)';
      break;
    case 3:
      c.moveTo(x + q, y + q);
      c.lineTo(x + q * 3, y + q);
      c.lineTo(x + q * 3, y + q * 3);
      c.lineTo(x + q, y + q * 3);
      c.fillStyle = 'rgb(0, 0, 0)';
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
      _suit(i);
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
