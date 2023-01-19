export default interface Fighter {
  lifePoints: number;
  strength: number;

  receiveDamage(attackPoints: number): number;

  attack(enemy: Fighter): void;
}
