import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    private _player1: Fighter,
    private _player2: Fighter,
  ) {
    super(_player1);
  }

  get player1(): Fighter { return this._player1; }

  get player2(): Fighter { return this._player2; }

  fight(): number {
    const attack = (attacker: Fighter, defensor: Fighter): number => {
      attacker.attack(defensor);

      if (defensor.lifePoints !== -1) attack(defensor, attacker);

      return attacker.lifePoints;
    };

    const fightResult = attack(this.player1, this.player2);

    if (fightResult !== -1) return 1;

    return -1;
  }
}
