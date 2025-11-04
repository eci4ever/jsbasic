# Nota Pantas: Constructor Functions (JavaScript)

Nmfairus — ringkasan BM santai (istilah teknikal English bila perlu).

## Inti
- **Constructor function** = fungsi yang **mencipta objek** (mirip *factory function*), digunakan bersama **`new`** dan **`this`**.
- **Tujuan**: elak **code duplication** bila buat banyak objek dengan struktur/tingkah laku sama.
- **Analogi restoran**: kongsi **blueprint** komunikasi; beritahu hanya bahagian yang berbeza, yang lain diulang automatik.

## Bagaimana `new` berfungsi
1. Cipta objek baharu dan ikat pada **`this`** dalam fungsi.
2. Set prototaip objek kepada **`FunctionName.prototype`**.
3. Jalankan fungsi.
4. **Return** objek secara automatik (kecuali anda return objek lain).

## Contoh Asas (constructor)
```js
function Person(name) {
  this.name = name;
  // ❌ Ini gandakan fungsi bagi setiap instance (tidak efisien)
  this.talk = function () {
    return `Hello, I am ${this.name}`;
  };
}

const cena = new Person('Cena');
console.log(cena.talk());
```

### Versi Lebih Efisien (guna `prototype`)
```js
function Person(name) {
  this.name = name;
}
Person.prototype.talk = function () {
  return `Hello, I am ${this.name}`;
};
```

## Factory vs Constructor
**Factory function**
```js
function createPerson(name) {
  return {
    name,
    talk() { return `Hello, I am ${name}`; }
  };
}
```

**Constructor function**
```js
function Person(name) { this.name = name; }
Person.prototype.talk = function() { return `Hello, I am ${this.name}`; };
const p = new Person('Poli'); // perlu `new`
```

**Perbezaan ringkas**
- *Factory*: tak perlu `new`, mudah komposisi & private state via closure.
- *Constructor*: gaya OOP klasik, manfaat `prototype`; wujud sebelum ES6 `class`.
- Kedua-duanya valid → pilih ikut gaya/keperluan team.

## ES6 Class (setara lebih moden)
```js
class Person {
  constructor(name) { this.name = name; }
  talk() { return `Hello, I am ${this.name}`; } // auto di prototype
}
```

## Contoh “SuperElement” (cipta & attach DOM element)
```js
function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  this.el.addEventListener('click', () => console.log(this.el));
  document.body.appendChild(this.el);
}

// Cipta satu
const h1 = new SuperElement('h1', 'Hello');

// Cipta banyak dari array
['A', 'B', 'C'].map(txt => new SuperElement('p', txt));
```

## Tips & Pitfalls
- **Jangan lupa `new`**:
  ```js
  function Person(name){ this.name = name; }
  if (!(this instanceof Person)) return new Person(name); // selamat
  ```
  Tanpa `new`, `this` boleh jadi `undefined` (strict) atau global.
- **Letak method pada `prototype`** untuk elak duplikasi memori.
- **Pertimbang `class`** untuk sintaks lebih jelas & familiar, tapi fahami asas `new`/`this`/`prototype`.

## Bila pilih mana?
- **Cepat & fleksibel, closure/private state** → *Factory*.
- **OOP / `instanceof` / interop dengan lib berasaskan prototype** → *Constructor* atau **Class**.

---

> Sedia ditukar ke **TypeScript** atau diadaptasi untuk **React/Hono/Node** jika perlu.
