import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static instances = 0 as number;
  
  constructor(
    name: string,
    public energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number { return Mage.instances; }
}
