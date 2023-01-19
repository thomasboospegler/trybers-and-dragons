import Race from './Race';
// Tem que ser importado direto do arquivo raiz e não do index.ts

export default class Elf extends Race {
  static instances = 0 as number;

  constructor(
    name: string,
    dexterity: number,
    public maxLifePoints: number = 99,
  ) {
    super(name, dexterity);

    Elf.instances += 1;
  }

  static createdRacesInstances(): number { return Elf.instances; }
}
