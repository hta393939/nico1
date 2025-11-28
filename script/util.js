
class Util {
  constructor() {
  }

  initialize() {

  }

  /**
   * 1文字作る
   * @param scene 
   * @param code 
   * @param width 
   * @param height 
   * @returns {g.Sprite}
   */
  static char(scene, isRed, code,
    width, height) {
    const blockSize = 64;
    const id = isRed ? 'assets/fontred64.png' : 'assets/font64.png';
    const fontAsset = scene.asset.getImageById(id);
    const index = code - 0x20;
    /** @type {SpriteParameterObject} */
    const opt = {
        scene,
        src: fontAsset,
        x: 0, y: 0, width, height,
        srcX: blockSize * (index & 7), srcY: blockSize * Math.floor(index / 8),
        srcWidth: blockSize, srcHeight: blockSize,
    };
    const sp = new g.Sprite(opt);
    return sp;
  }

  /**
   * ステップ固定の画像フォントペイン
   * @param scene 
   * @param inx 
   * @param iny 
   * @param dw 
   * @param dh 
   * @param step 
   * @returns {g.Pane}
   */
  static multi(scene,
    isRed,
    inx, iny,
    dw = 64, dh = 64, step = 64) {
    /** @type {PaneParameterObject} */
    const paneopt = {
        scene,
        x: inx, y: iny,
        width: dw, height: dh,
        tag: {},
    };
    const pane = new g.Pane(paneopt);
    pane.tag.update = function(intext) {
        const cnum = pane.children?.length || 0;
        for (let i = cnum - 1; i >= 0; --i) {
            const ch = pane.children[i];
            ch.destroy(); // removeもしてくれる
        }
        let _len = intext.length;
        let x = 0;
        for (let i = 0; i < _len; ++i) {
            const code = intext.charCodeAt(i);
            const sp = Util.char(scene, isRed, code, dw, dh);
            sp.x = x;
            pane.append(sp);
            x += step;
        }
        pane.width = step * (_len - 1) + dw;
        pane.height = dh;
        pane.invalidate();
    };
    return pane;
  }

  /**
   * フォントの生成
   * @param {g.Scene} scene 
   * @param {number} advance 元サイズでのadvance
   * @returns 
   */
  static font(scene, advance, isRed) {
    const id = isRed ? 'assets/fontred64.png' : 'assets/font64.png';
    const fontAsset = scene.asset.getImageById(id);
    const map = {};
    const blockSize = 64;
    const pa = 4; // 6pxは削りすぎ
    const padding = {
      left: pa, top: pa, right: pa, bottom: pa,
    };
    const useWidth = blockSize - padding.left - padding.right;
    const useHeight = blockSize - padding.top - padding.bottom;
    for (let i = 0; i < 64; ++i) {
      const code = i + 0x20;
      const one = {
        x: (i & 7) * blockSize,
        y: Math.floor(i / 8) * blockSize,
        offsetX: padding.left, offsetY: padding.top,
        width: useWidth, height: useHeight,
        advance: advance || useWidth,
      };
      map[code] = one;
    }
    const font = new g.BitmapFont({
      src: fontAsset,
      //width: fontAsset.width, height: fontAsset.height,
      glyphInfo: {
        map,
        width: useWidth, height: useHeight,
        missingGlyph: map[0x40],
      },
    });
    return font;
  }

  static card(scene) {
    const fontAsset = scene.asset.getImageById('assets/card64.png');
    const map = {};
    const blockSize = 64;
    const pa = 0;
    const padding = {
      left: pa, top: pa, right: pa, bottom: pa,
    };
    const useWidth = blockSize - padding.left - padding.right;
    const useHeight = blockSize - padding.top - padding.bottom;
    for (let i = 0; i < 64; ++i) {
      const code = i + 0x40;
      const one = {
        x: (i & 7) * blockSize,
        y: Math.floor(i / 8) * blockSize,
        offsetX: padding.left, offsetY: padding.top,
        width: useWidth, height: useHeight,
        advance: useWidth,
      };
      map[code] = one;
    }
    const font = new g.BitmapFont({
      src: fontAsset,
      glyphInfo: {
        map,
        width: useWidth, height: useHeight,
        missingGlyph: map[0x40 + 2 + 8 * 3],
      },
    });
    return font;
  }

  /** @param {g.Scene} scene */
  static emptytouch(scene, inx, iny) {
    const fontAsset = scene.asset.getImageById('assets/card64.png');
    const blockSize = 64;
    const param = {
      scene,
      src: fontAsset,
      srcWidth: blockSize,
      srcHeight: blockSize,
      anchorX: 0.5, anchorY: 0.5,
      width: blockSize, height: blockSize,
      x: inx, y: iny,
      frames: [],
    };
    for (let i = 0; i < 8; ++i) {
      param.frames.push(i + 32);
    }
    const obj = new g.FrameSprite(param);

    obj.tag = {count: 0};
    obj.onUpdate.add(() => {
      if (obj.tag.count >= 15) {
        obj.destroy();
        return;
      }
      obj.tag.count += 1;
    });
    obj.start();
    return obj; 
  }

  /**
   * 上に上がって消えるエフェクト
   * @param {g.E} obj 
   * @returns 
   */
  static upeff(obj) {
    if (!obj.tag) {
      obj.tag = {};
    }
    obj.tag.count = 0;
    obj.onUpdate.add(() => {
      if (obj.tag.count >= 30) {
        obj.destroy();
        return;
      }
      obj.tag.count += 1;
      obj.y -= 1;
      obj.modified();
    });
    return obj;
  }

  /**
   * 
   * @param {number[]} pts 
   * @returns 
   */
  static infer(pts) {
    const ret = {circle: null, line: null};
    const num = pts.length;
    if (num === 0) {
      return ret;
    }
    if (num === 1) {
      ret.circle = {cx: pts[0], cy: pts[1], rr: 0};
      return ret;
    }

    let xsum = 0;
    let ysum = 0;
    for (const pt of pts) {
      xsum += pt[0];
      ysum += pt[1];
    }
    const k = 1 / num;
    const xyavg = [xsum * k, ysum * k];
    let x2sum = 0;
    let y2sum = 0;
    let xysum = 0;
    let sums = [0, 0, 0];
    for (const pt of pts) {
      let x = pt[0] - xyavg[0];
      let y = pt[1] - xyavg[1];

      let x2 = x * x;
      let y2 = y * y;

      x2sum += x2;
      y2sum += y2;
      xysum += x * y;

      const x2y2 = x2 + y2;
      sums[0] += x * x2y2;
      sums[1] += y * x2y2;
      sums[2] += x2y2;
    }

    { // 直線の推定
      let b2 = - x2sum - y2sum;
      let c2 = x2sum * y2sum - xysum ** 2;
      let decide = b2 * b2 - c2 * 4;
      if (decide >= 0) {
        const zerop = (-b2 + Math.sqrt(decide)) * 0.5;
        if (zerop > 0) {
          let ex = - xysum;
          let ey = x2sum - zerop;
          let len = Math.sqrt(ex ** 2 + ey ** 2);
          const k = (len >= 0) ? 1 / len : 0;
          ret.line = {
            cx: xyavg[0], cy: xyavg[1],
            dx: ex * k, dy: ey * k,
          };
        }
      }
    }

    const det = x2sum * y2sum - xysum ** 2;
    if (det === 0) {
      return ret;
    }

    let a1 = ( y2sum * sums[0] - xysum * sums[1]) / det;
    let b1 = (-xysum * sums[0] + x2sum * sums[1]) / det;
    let c1 = sums[2] / num;

    ret.circle = {
      cx: a1 * 0.5 + xyavg[0],
      cy: b1 * 0.5 + xyavg[1],
      rr: Math.sqrt(a1 ** 2 + b1 ** 2 + c1),
    };
    return ret;
  }

  static testInfer() {
    const pts = [];
    const cx = -2;
    const cy = 100;
    let rr = 10.0;
    for (let i = 0; i < 60; ++i) {
      let x = cx + Math.cos(i) * rr + Math.random();
      let y = cy + Math.sin(i) * rr + Math.random();
      pts.push([x, y]);
    }
    const result = Util.infer(pts);
    console.log('testInfer', result);
  }

}

module.exports.Util = Util;
