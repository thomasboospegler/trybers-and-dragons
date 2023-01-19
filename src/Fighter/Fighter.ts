import Energy from '../Energy';

export default interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  receiveDamage(attackPoints: number): number;

  attack(enemy: Fighter): void;

  levelUp(): void;
  
  special?(enemy: Fighter): void;
}
