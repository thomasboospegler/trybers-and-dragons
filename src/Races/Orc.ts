import Race from './Race';
// Tem que ser importado direto do arquivo raiz e não do index.ts

export default class Orc extends Race {
  static instances = 0 as number;

  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 74,
  ) {
    super(name, dexterity);

    Orc.instances += 1;
  }

  static createdRacesInstances(): number { return Orc.instances; }
}
