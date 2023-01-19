import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static instances = 0 as number;
  
  constructor(
    name: string,
    public energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number { return Necromancer.instances; }
}
