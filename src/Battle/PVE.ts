import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Oponent = Fighter | SimpleFighter;

export default class PVE extends Battle {
  constructor(
    private _player1: Fighter,
    private _oponents: Oponent[],
  ) {
    super(_player1);
  }

  get player1(): Fighter { return this._player1; }

  get oponents(): Oponent[] { return this._oponents; }

  fight(): number {
    const attack = (attacker: Oponent, defensor: Oponent): number => {
      attacker.attack(defensor);

      if (defensor.lifePoints !== -1) attack(defensor, attacker);

      return attacker.lifePoints;
    };

    const fightResults = this.oponents
      .reduce((acc: number[], oponent) =>
        [...acc, attack(this.player1, oponent)], []);
    
    if (fightResults.every((result) => result !== -1)) return 1;

    return -1;
  }
}
