//Generic

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

// Generic interface

interface Lengthy {
  length: number;
}

function countAdndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descritionText = "Got no value";
  if (element.length === 1) {
    descritionText = "Got 1 element.";
  } else if (element.length > 1) {
    descritionText = "Got " + element.length + " elements.";
  }
  return [element, descritionText];
}

// Generic class

class Datastorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new Datastorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new Datastorage<number>();
