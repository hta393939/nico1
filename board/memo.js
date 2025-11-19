exports.main = (param) => {
    const game = g.game; // よくアクセスするため変数に保持しておく
    const scene = new g.Scene({
        game,
    });
    // ニコ生ゲームのランキングモードでは g.game.vars.gameState.score の値がスコアとして扱われる
    game.vars.gameState = { score: 0 };
    scene.onLoad.add(() => {
        // ここからゲーム内容を記述します
        // ...
        // ここまでゲーム内容を記述します
    });
    game.pushScene(scene);
};
