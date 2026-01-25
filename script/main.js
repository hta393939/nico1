//import {Util} from './util';
const {Util} = require('./util');

/**
 * 
 * @param {number} v 
 * @param {number} n 
 * @returns 
 */
const _pad = (v, n) => {
  const text = `         ${v}`;
  const len = text.length;
  return text.slice(len - n, len);
};

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns 
 */
const _bc = (x, y) => {
  return String.fromCodePoint(0x40 + x + y * 8);
};

function main(param) {
  const game = g.game;
  game.vars.gameState = {score: 0};
  let time = 60;
  const limit = param.sessionParameter?.totalTimeLimit;
  if (limit) {
    time = limit;
  }
  let remainingTime = time - 15;


  const openingScene = new g.Scene({
    game,
    assetPaths: [
      "/assets/opening/*",
    ]
  });
  openingScene.onLoad.addOnce(() => {
    const titleLogo = new g.Sprite({
      scene: openingScene,
      src: openingScene.asset.getImage('/assets/opening/title.png'),
      x: game.width * 0.5, y: game.height * 0.5,
      anchorX: 0.5, anchorY: 0.5,
    });
    openingScene.append(titleLogo);
    const descriptionLogo = new g.Sprite({
      scene: openingScene,
      src: openingScene.asset.getImage('/assets/opening/description.png'),
      x: game.width * 0.5, y: game.height * 0.5,
      anchorX: 0.5, anchorY: 0.5,
    });
    openingScene.setTimeout(() => {
      titleLogo.destroy();
      openingScene.append(descriptionLogo);
    }, 2000);
    openingScene.setTimeout(() => {
      game.replaceScene(scene);
    }, 6000);
  });
  game.pushScene(openingScene);

  /** ゲーム本体 */
  const scene = new g.Scene({
    game,
    // このシーンで利用するアセットのIDを列挙し、シーンに通知します
    assetIds: ["player", "shot", "se",
      "assets/fontblack64.png",
      "assets/fontwhite64.png",
      "assets/fontred64.png",
      "assets/fontred48.png",
      "assets/fontblue48.png",
      "assets/fontblack32.png",
      "assets/fontred32.png",
      "assets/fontwhite32.png",
      "assets/fontblue32.png",
      "assets/icon64.png",
      "assets/icon48.png"
    ]
  });
  scene.onLoad.add(() => {
    // ここからゲーム内容を記述します
    // 各アセットオブジェクトを取得します
    const playerImageAsset = scene.asset.getImageById("player");
    const shotImageAsset = scene.asset.getImageById("shot");
    const seAudioAsset = scene.asset.getAudioById("se");

    let blockSize = 64;
    let originPos = {
      x: 64, y: 64,
    };
    let useBlock = {
      x: 8, y: 4,
    };
    if (true) {
      blockSize = 48;
      originPos = {
        x: 32, y: 64,
      };
      useBlock = {
        x: 12, y: 5,
      };
    }
    const _calcBlock = (x, y) => {
      return {
        x: Math.floor((x - originPos.x) / blockSize),
        y: Math.floor((y - originPos.y) / blockSize),
      }
    };
    const _calcPx = (bx, by) => {
      const ret = {
        x: bx * blockSize + originPos.x,
        y: by * blockSize + originPos.y,
      };
      ret.cx = ret.x + blockSize * 0.5;
      ret.cy = ret.y + blockSize * 0.5;
      return ret;
    };

    const cardFont = Util.card(scene, blockSize);

    for (let i = 0; i < useBlock.y; ++i) {
      for (let j = 0; j < useBlock.x; ++j) {
        let {x, y} = _calcPx(j, i);
        const back = new g.Label({
          x: 0, y: 0, scene,
          text: _bc(0, 1),
          font: cardFont, fontSize: blockSize,
        });
        const card = new g.Pane({
          x, y, scene, tag: {
            sx: 0, sy: 0,
            wsx: x, wsy: y,
          },
          width: blockSize, height: blockSize,
          //touchable: true,
        });
        /*
        const obj = card;
        obj.onPointUp.add((ev) => {
          const target = ev.target;
          target.x = target.tag.wsx + (ev.point.x - target.tag.sx);
          target.y = target.tag.wsy + (ev.point.y - target.tag.sy);
          target.modified();
        });
        obj.onPointMove.add((ev) => {
          const target = ev.target;
          target.x = target.tag.wsx + (ev.point.x - target.tag.sx);
          target.y = target.tag.wsy + (ev.point.y - target.tag.sy);
          target.modified();
        });
        obj.onPointDown.add((ev) => {
          score += 1;
          const target = ev.target;
          target.tag.sx = ev.point.x;
          target.tag.sy = ev.point.y;
        }); */

        card.append(back);
        scene.append(card);
      }
    }

    // 小サイズ32x32のステップ24

    const fromTop = 4 + 4;
    // 中 48x48 step 36
    const timePane = Util.multi(scene,
      false, 36 * 4, fromTop, 48, 48, 36);
    scene.append(timePane);
    function updateTimer() {
      timePane.tag.update(_pad(remainingTime, 4));
    }
    {
      const label = new g.Label({
        x: 36 * 5 - 48, y: 4, scene, text: _bc(1, 3),
        font: cardFont, fontSize: 48,
      });
      scene.append(label);
    }

    const scorePane = Util.multi(scene,
      false, 36 * 10, fromTop, 48, 48, 36);
    scene.append(scorePane);
    let score = 0;
    /**
     * 
     * @param {number} add 
     */
    const _addScore = (add) => {
      score += add;
      const _text = `0000${score}`;
      const _len = _text.length;
      scorePane.tag.update(`${_text.slice(_len - 5, _len)}`);
      game.vars.score = score;
    };

    const timer = scene.setInterval(() => {
      _addScore(10);

      remainingTime --;
      if (remainingTime <= 0) {
        scene.clearInterval(timer);
        // TODO: 停止処理
      }

      updateTimer();
    }, 1000);   


    // プレイヤーを生成します
    const player = new g.Sprite({
      scene: scene,
      src: playerImageAsset,
      width: playerImageAsset.width,
      height: playerImageAsset.height
    });
    // プレイヤーの初期座標を、画面の中心に設定します
    player.x = (g.game.width - player.width) / 2;
    player.y = (g.game.height - player.height) / 2;
    player.onUpdate.add(() => {
      // 毎フレームでY座標を再計算し、プレイヤーの飛んでいる動きを表現します
      // ここではMath.sinを利用して、時間経過によって増加するg.game.ageと組み合わせて
      player.y = (g.game.height - player.height) / 2 + Math.sin(g.game.age % (g.game.fps * 10) / 4) * 10;
      // プレイヤーの座標に変更があった場合、 modified() を実行して変更をゲームに通知します
      player.modified();
    });
    // 画面をタッチしたとき、SEを鳴らします
    /*
    scene.onPointDownCapture.add((event) => {
      seAudioAsset.play();
      // プレイヤーが発射する弾を生成します
      const shot = new g.Sprite({
        scene: scene,
        src: shotImageAsset,
        width: shotImageAsset.width,
        height: shotImageAsset.height
      });
      // 弾の初期座標を、プレイヤーの少し右に設定します
      shot.x = player.x + player.width;
      shot.y = player.y;
      shot.onUpdate.add(() => {
        // 毎フレームで座標を確認し、画面外に出ていたら弾をシーンから取り除きます
        if (shot.x > g.game.width)
          shot.destroy();
        // 弾を右に動かし、弾の動きを表現します
        shot.x += 10;
        // 変更をゲームに通知します
        shot.modified();
      });
      scene.append(shot);


    }); */
    scene.append(player);

    {
      const font = Util.font(scene, false);
      const label = new g.Label({
        x: 10,
        y: 200,
        scene,
        text: `1@3ABCabc`,
        font,
        fontSize: 48,
      });
      scene.append(label);
    }

    {
      const font = Util.font(scene, true);
      const label = new g.Label({
        x: 64 * 3, y: 64 * 3,
        scene,
        text: `12@ABCabc`,
        font,
        fontSize: 40,
      });
      scene.append(label);
    }

    {
      scene.onPointUpCapture.add((event) => {

      });
      scene.onPointMoveCapture.add((event) => {

      });
      scene.onPointDownCapture.add((event) => {
        score += 1;

        { // 演出
          const obj = Util.multi(scene,
            true,
            event.point.x, event.point.y, 32, 32, 24);
          obj.anchorX = 0.5;
          obj.anchorY = 1;
          obj.tag.update(`+100`);
          scene.append(obj);
          Util.upeff(obj);
        }
        {
          const obj = Util.emptytouch(scene,
            event.point.x,
            event.point.y,
            blockSize);
          scene.append(obj);
        }
        {
          Util.testInfer();
        }

      });
    }

    {
      updateTimer();
      _addScore(0);
    }
    // ここまでゲーム内容を記述します
  });

  if (false) { // TODO: 即本体を呼ぶ場合
    g.game.pushScene(scene);
  }
}
module.exports = main;
