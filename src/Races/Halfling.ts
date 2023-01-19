import Race from './Race';
// Tem que ser importado direto do arquivo raiz e não do index.ts

export default class Halfling extends Race {
  static instances = 0 as number;

  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 60,
  ) {
    super(name, dexterity);

    Halfling.instances += 1;
  }

  static createdRacesInstances(): number { return Halfling.instances; }
}
