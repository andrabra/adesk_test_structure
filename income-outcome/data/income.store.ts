import { IncomeFake } from "./income.fake";
import { Group, Month, SimpleElement, StoreModel } from "./store.interface";
import { getEmptyValueMap } from "./utils";


export class IncomeStore {
  // Only reading is available from outside
  public store: StoreModel;

  constructor() {
    this.store = IncomeFake;
  }

  public enterValue(simpleElementId: string, month: Month, value: number): void {
    // TODO implement
    
  }

  public createEmptyGroup(parentGroupId: string): void {
    const id = String(new Date().getDate());
    const newGroup: Group = {
      id,
      name: '',
      children: [],
    };
    // TODO implement
  }

  public giveNameToEmptyGroup(groupId: string, name: string): void {
    // TODO implement
  }

  public createEmptySimpleElement(parentGroupId: string): void {
    const id = String(new Date().getDate());
    const newSimpleElement: SimpleElement = {
      id,
      name: '',
      valueMap: getEmptyValueMap(),
    };
    // TODO implement
  }
}