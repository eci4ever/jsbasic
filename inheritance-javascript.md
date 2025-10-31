# 🧠 Inheritance dalam JavaScript & TypeScript

> Nota berdasarkan siri video **"Ten Things JavaScript Developers Should Know" (Episod 1: Inheritance)**  
> Disusun oleh: Nmfairus

---

## 📚 Pengenalan

**Inheritance (Pewarisan)** digunakan untuk **mengelak penduaan kod** dan **kongsi fungsi bersama** antara objek atau kelas.

Dalam JavaScript, konsep ini dilakukan melalui **Prototype**, bukan melalui kelas sebenar seperti bahasa lain (contohnya Java atau C#).  
Namun sejak ES6, JavaScript memperkenalkan sintaks `class` untuk menjadikannya lebih mudah dibaca — ini dipanggil **syntactic sugar**.

---

## ⚙️ Mengapa Inheritance Penting

1. **Kurangkan penduaan kod** (DRY – Don’t Repeat Yourself)
2. **Mudah penyelenggaraan** – ubah method sekali sahaja
3. **Pisahkan tanggungjawab**:
   - `properties` = data atau keadaan (state)
   - `methods` = kelakuan (behavior)
4. **Digunakan luas dalam framework** seperti React, Vue, Angular, Web Components

---

## 🧩 1. Class-based Inheritance (Moden, ES6)

```ts
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  talk() {
    return `${this.name} is talking.`;
  }
}

class SuperHuman extends Person {
  fly() {
    return `${this.name} is flying!`;
  }
}

const me = new Person("Fairus");
const you = new SuperHuman("ADTEC Hero");

console.log(me.talk()); // "Fairus is talking."
console.log(you.talk()); // "ADTEC Hero is talking."
console.log(you.fly());  // "ADTEC Hero is flying!"
```

💡 `extends` membolehkan class baru **mewarisi** method dan property daripada class lain.

---

## ⚙️ 2. Prototype-based Inheritance (Tanpa Class)

```ts
function Person(name: string) {
  this.name = name;
}
Person.prototype.talk = function () {
  return `${this.name} is talking.`;
};

function SuperHuman(name: string) {
  Person.call(this, name); // panggil constructor parent
}
SuperHuman.prototype = Object.create(Person.prototype);
SuperHuman.prototype.constructor = SuperHuman;
SuperHuman.prototype.fly = function () {
  return `${this.name} is flying!`;
};

const you = new SuperHuman("ADTEC Hero");
console.log(you.talk());
console.log(you.fly());
```

💡 Di bawah hud, `class` sebenarnya ialah cara mudah menulis kod seperti ini.

---

## 🧠 3. Object.create() (Cara Paling Ringkas)

```ts
const person = {
  talk() {
    return "Talking...";
  },
};

const me = Object.create(person);
me.name = "Fairus";

console.log(me.talk()); // Inherited method
console.log(Object.getPrototypeOf(me) === person); // true
```

💡 `Object.create()` mencipta objek baharu yang **mewarisi** prototaip daripada objek lain.

---

## 🧱 4. Object.setPrototypeOf() (Ubah Prototype Sedia Ada)

```ts
const person = { talk() { return "Talking..."; } };
const me = { name: "Fairus" };

Object.setPrototypeOf(me, person);

console.log(me.talk()); // "Talking..."
```

⚠️ **Tidak disyorkan digunakan terlalu kerap** kerana ia boleh menjejaskan prestasi.

---

## 🧾 5. TypeScript Version (Type-Safe)

```ts
interface IPerson {
  name: string;
  talk(): string;
}

class Person implements IPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  talk() {
    return `${this.name} is talking.`;
  }
}

interface ISuperHuman extends IPerson {
  fly(): string;
}

class SuperHuman extends Person implements ISuperHuman {
  fly() {
    return `${this.name} is flying!`;
  }
}

const user: ISuperHuman = new SuperHuman("ADTEC Hero");
console.log(user.talk());
console.log(user.fly());
```

💡 `interface` membantu pastikan class memenuhi struktur tertentu (lebih selamat dan tersusun).

---

## 🔍 6. Prototype vs Instance Property

- Method pada **prototype** → dikongsi semua instance  
- Property pada **this** → unik setiap instance

```ts
function Person() {
  this.age = 12; // property unik
}
Person.prototype.talk = function () {
  console.log("Talking..."); // method dikongsi
};
```

---

## ⚖️ 7. Perbandingan Ringkas

| Kaedah | Kelebihan | Kekurangan |
|--------|------------|------------|
| `class` | Sintaks moden, mudah dibaca | Sekadar sintaks tambahan atas prototype |
| `function + prototype` | Kawalan penuh, sesuai untuk library lama | Lebih verbose |
| `Object.create` | Paling ringkas, cepat buat inheritance | Tiada constructor atau state |
| `Object.setPrototypeOf` | Ubah prototype secara dinamik | Perlahan & tidak disyorkan untuk production |

---

## 💬 8. Ringkasan Konsep Penting

| Konsep | Penerangan |
|--------|-------------|
| **Prototype** | Objek asas yang disambungkan kepada semua instance |
| **__proto__** | Rujukan dalaman kepada prototaip asal (jangan guna secara langsung) |
| **Constructor Function** | Fungsi yang digunakan untuk mencipta objek baru |
| **Extends** | Cara mewarisi class lain |
| **Method Sharing** | Semua instance berkongsi method yang sama pada prototype |
| **Property Copying** | Data unik pada setiap instance (tidak dikongsi) |

---

## 🧭 9. Kesimpulan

- Inheritance dalam JavaScript dilakukan melalui **prototype chain**.  
- `class` hanyalah cara penulisan yang lebih mudah.  
- Gunakan inheritance bila:
  - Ada **fungsi atau tingkah laku dikongsi** antara objek.
  - Perlu **struktur hierarki** yang logik (contohnya `Person → SuperHuman`).
- Fahami perbezaan antara:
  - **Inheritance (pewarisan tingkah laku)**  
  - **Composition (gabung fungsi secara modular)** — sesuai untuk projek moden.

---

## 📘 10. Contoh Situasi Dunia Sebenar

| Contoh | Penjelasan |
|--------|-------------|
| **React Class Component** | `class MyComponent extends React.Component` |
| **Web Components** | `class MyButton extends HTMLElement` |
| **Game Object** | `class Enemy extends Character` |

---

### 📎 Rujukan
- [MDN: Prototypal Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- [JavaScript.info - Prototypes](https://javascript.info/prototype-inheritance)
- [Better Programming - JS Inheritance Explained](https://betterprogramming.pub)

---

**Disediakan oleh:** Nmfairus  
**Peranan:** Software Engineer / Web Developer  
**Tarikh:** 2025-10-31
