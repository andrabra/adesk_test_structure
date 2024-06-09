import { Month } from "../data/store.interface.js";
import { IncomeStore } from "../data/income.store.js";
import { IncomeFake } from "../data/income.fake.js";

export class TableRenderer {
  renderTableName() {
    // Бюджет на 2024 год append to dom
    const tableName = document.createElement("h2");
    tableName.textContent = "Бюджет на 2024 год";
    document.body.prepend(tableName);
  }

  renderTableHeader() {
    Object.entries.call(Month, (month) => {});
  }

  //обход в глубину с выводом в консоль
  depthFirstTraversal(node, depth = 0) {
    // Выводим имя текущего узла и его уровень глубины
    console.log(" ".repeat(depth * 4) + node.name);

    // Если у текущего узла есть дети, рекурсивно вызываем эту функцию для каждого ребенка
    if (node.children) {
      node.children.forEach((child) => {
        this.depthFirstTraversal(child, depth + 1);
      });
    }

    // Выводим значения valueMap текущего узла и вычисляем их сумму
    let sum = 0;
    for (const month in node.valueMap) {
      console.log(
        " ".repeat(depth * 4 + 2) + month + ": " + node.valueMap[month]
      );
      sum += node.valueMap[month];
    }
    console.log(" ".repeat(depth * 4 + 2) + "Сумма: " + sum);
    return sum;
  }

  findFirstLevelNames(items) {
    let firstLevelNames = [];

    // Перебираем все элементы в массиве
    for (const item of items) {
      // Добавляем имя текущего элемента в массив имен первого уровня вложенности
      firstLevelNames.push(item.name);
    }

    // Возвращаем массив имен первого уровня вложенности
    return firstLevelNames;
  }

  findSimpleElementById(items, id) {
    // Перебираем все элементы в массиве
    for (const item of items) {
      // Если id текущего элемента совпадает с искомым id, возвращаем этот элемент
      if (item.id === id) {
        return item;
      }
      // Если текущий элемент имеет дочерние элементы, рекурсивно ищем в них
      if (item.children) {
        const foundItem = this.findItemById(item.children, id);
        // Если элемент найден в дочерних элементах, возвращаем его
        if (foundItem) {
          return foundItem;
        }
      }
    }
    // Если элемент не найден, возвращаем null
    return null;
  }

  renderGroup(groupId) {
    // Go inside every element of this group (Обход дерева внутрь)
    // Get calculated map {month1: total, month2: total}
  }

  renderSimpleElement(simpleElementId, month) {}

  getArrayOfNames(node, depth = 0, namesArray = []) {
    // Проверяем наличие свойства name и добавляем объект в массив
    if (node.hasOwnProperty("name")) {
      let modifiedName = node.name;
      modifiedName = "-".repeat(depth) + modifiedName;
      if (node.hasOwnProperty("children")) {
        modifiedName = "*".repeat(depth) + modifiedName;
      }
      const modifiedNode = { ...node, name: modifiedName };
      namesArray.push(modifiedNode);
    }

    // Если у текущего узла есть дети, рекурсивно вызываем эту функцию для каждого ребенка
    if (node.children) {
      node.children.forEach((child) => {
        this.getArrayOfNames(child, depth + 1, namesArray);
      });
    }

    return namesArray;
  }

  createInput(item, month) {
    const valueCell = document.createElement("td");
    valueCell.textContent = item.valueMap[month];
    valueCell.classList.add("value");
  
    valueCell.addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "text";
      input.value = item.valueMap[month];
      valueCell.innerHTML = "";
      valueCell.appendChild(input);
      input.focus();
  
      input.addEventListener("blur", function () {
        const newValue = input.value;
        item.valueMap[month] = Number(newValue);
        callBackForUserInput(item.id, month, newValue);
        valueCell.textContent = newValue;
      });
  
      input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          input.blur();
        }
      });
    });
  
    return valueCell;
  }
  
}
