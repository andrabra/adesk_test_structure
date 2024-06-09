import { IncomeStore } from "../data/income.store";
import { Month } from "../data/store.interface";

const incomeStore = new IncomeStore();


function callBackForUserInput(simpleElementId: string, month: Month, value: number) {
  incomeStore.enterValue(simpleElementId, month, value);
  render();
}

function render(): void {
  const currentData = incomeStore.store;


  // Delete current table from DOM
  // Create table and place it in DOM
}


abstract class TableRenderer {
  
  
  public renderTableName(): void {
    // Бюджет на 2024 год append to dom
    const tableName = document.createElement('h2');
    tableName.textContent = "Бюджет на 2024 год";
    document.body.appendChild(tableName);
  }

  public renderTableHeader(): void {
    Object.entries.call(Month, (month => {}))
  }

  

  public renderGroup(groupId: string): void {
    // Go inside every element of this group (Обход дерева внутрь)
    // Get calculated map {month1: total, month2: total}

    
  }

  public renderSimpleElement(simpleElementId: string, month: Month): void {

  }

}


