import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static instances = 0 as number;
  
  constructor(
    name: string,
    public energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number { return Warrior.instances; }
}
