

namespace g {

declare class Event {
}

declare class JoinEvent extends Event {
/**
 * 発火元
 */
  player: Player;
}

declare class Trigger {
  constructor();
  /** リスナ追加 */
  add();
  /** リスナ追加 */
  addOnce();
}

declare class E {
  constructor(param: {});
  /** 追加 */
  append(e: E): void;
}


/**
 * 1人のプレイヤー
 */
interface Player {
  /** プレイヤーID */
  id: string;
/**
 * opt
 */
  name: string;
}


/** シーン */
declare class Scene {
  constructor();


  children: E[];

  message: Trigger;
  update: Trigger;

  /** オブジェクトを追加する */
  append(obj);
}


declare class Game {
  /** 自進行フレーム数 */
  age: number;
}


var game: Game;


}
