import Race from './Race';
// Tem que ser importado direto do arquivo raiz e não do index.ts

export default class Dwarf extends Race {
  static instances = 0 as number;

  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 80,
  ) {
    super(name, dexterity);

    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number { return Dwarf.instances; }
}
