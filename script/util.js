//import { PaneParameterObject, SpriteParameterObject } from "@akashic/akashic-engine";

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

  static font(scene) {
    const fontAsset = scene.asset.getImageById('assets/font64.png');
    const font = new g.BitmapFont({
      src: fontAsset,
      map: null,
      defaultGlyphWidth: 64,
      defaultGlyphHeight: 64,
      missingGlyph: null,
    });
    const label = new g.Label({
      font,
      fontSize: 48,
    });
    label.text = '1234ABC';
    label.invalidate();
    return label;
  }

}

module.exports.Util = Util;
