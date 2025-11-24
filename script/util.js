
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
  static char(scene, code,
    width, height) {
    const blockSize = 64;
    const fontAsset = scene.asset.getImageById('assets/font64.png');
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
            const sp = Util.char(scene, code, dw, dh);
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
   * @param {number?} advance 元サイズでのadvance
   * @returns 
   */
  static font(scene, advance) {
    const fontAsset = scene.asset.getImageById('assets/font64.png');
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
      obj.y -= 2;
      obj.modified();
    });
    return obj;
  }

}

module.exports.Util = Util;
