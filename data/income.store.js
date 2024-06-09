import { IncomeFake } from "../data/income.fake.js";

export class IncomeStore {
  constructor() {
    this.store = IncomeFake;
  }

  enterValue(simpleElementId, month, value) {
    // TODO implement
  }

  createEmptyGroup(parentGroupId) {
    const id = String(new Date().getDate());
    const newGroup = {
      id,
      name: '',
      children: [],
    };
    // TODO implement
  }

  giveNameToEmptyGroup(groupId, name) {
    // TODO implement
  }

  createEmptySimpleElement(parentGroupId) {
    const id = String(new Date().getDate());
    const newSimpleElement = {
      id,
      name: '',
      valueMap: getEmptyValueMap(),
    };
    // TODO implement
  }
}