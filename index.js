import { TableRenderer } from "./components/table.js";
import { Month } from "./data/store.interface.js";
import { IncomeStore } from "./data/income.store.js";
import { getEmptyValueMap } from "./data/utils.js";
import { getHeaderString } from "./data/utils.js";


const incomeStore = new IncomeStore();

const tableContainer = document.getElementById("table-container");
const table = document.createElement("table");
table.className = "table";

const tableHeader = document.createElement("thead");
const headerRow1 = document.createElement("tr");
headerRow1.appendChild(document.createElement("th"));//для совпадения с  макетом

// Create table header
getHeaderString(Month).forEach((monthName) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = monthName;
  headerRow1.appendChild(headerCell);
});

tableHeader.appendChild(headerRow1);

// Вторая строка заголовка
const headerRow2 = document.createElement("tr");
const budgetHeaderCell = document.createElement("th");
budgetHeaderCell.textContent = "БЮДЖЕТ";
headerRow2.appendChild(budgetHeaderCell);



const planHeaderCells = ["План", "План", "План", "План", "План", "План", "План", "План", "План", "План", "План", "План"];
planHeaderCells.forEach((plan) => {
  const headerCell = document.createElement("th");
  headerCell.textContent = plan;
  headerRow2.appendChild(headerCell);
});
tableHeader.appendChild(headerRow2);

table.appendChild(tableHeader);
tableContainer.appendChild(table);

function callBackForUserInput(simpleElementId, month, value) {
  incomeStore.enterValue(simpleElementId, month, value);
  render();
}

function render() {

  const oldTbody = table.querySelector("tbody");
  if (oldTbody) {
    table.removeChild(oldTbody);
  }
    
  const currentData = incomeStore.store;
  const renderer = new TableRenderer();
  renderer.renderTableName();
//   renderer.depthFirstTraversal(currentData[0]);
    // renderer.depthFirstTraversal(currentData[0]);
  // console.log(renderer.findGroupItemById(currentData, "10"));
  // console.log(renderer.findSimpleElementById(currentData, "10"));
  // console.log(renderer.findFirstLevelNames(currentData));
//   console.log(renderer.getArrayOfNames(currentData[0]));

  renderer.getArrayOfNames(currentData[0]).forEach((item) => {
    // Проверяем наличие свойства name
    if (item.hasOwnProperty("name")) {
      // Создаем строку таблицы для текущего объекта
      const row = document.createElement("tr");

      // Создаем ячейку для имени и добавляем в нее значение из свойства name
      const nameCell = document.createElement("td");
      console.log(nameCell);
      nameCell.textContent = item.name;
      
      row.appendChild(nameCell);
      for (const month in item.valueMap) {
        const valueCell = renderer.createInput(item, month);
        row.appendChild(valueCell);
      }

      // Добавляем строку в таблицу
      table.appendChild(row);
    }
  });
  

  // Delete current table from DOM
  // Create table and place it in DOM
}

render();
