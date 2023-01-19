export default abstract class Race {
  static instances = 0 as number;

  constructor(
    private _name: string,
    private _dexterity: number,
  ) {
    Race.instances += 1;
  }

  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  abstract get maxLifePoints(): number;

  static createdRacesInstances(): number { throw new Error('Not implemented'); }
}
