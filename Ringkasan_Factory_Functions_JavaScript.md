# 📘 Ringkasan Video: Factory Functions (Episode 3)
### Siri: *10 Things JavaScript Developers Should Know*

---

## 🎯 Ringkasan Utama
Episod ini menerangkan tentang **Factory Functions** dalam JavaScript — iaitu fungsi yang **mencipta dan memulangkan objek**.  
Konsep ini digunakan untuk **mengelakkan penulisan kod berulang** dan memastikan **privasi data** dalam objek.

---

## 🏭 1. Apa Itu Factory Function?
> “A factory function is just a function that creates and returns objects.”

- Ibarat **kilang sebenar**: bahan mentah (parameter) masuk → fungsi proses → objek akhir keluar.
- Tujuannya ialah untuk menghasilkan banyak objek yang **serupa** dengan logik yang dikongsi.

Contoh asas:
```js
function personFactory(name) {
  return {
    talk() {
      console.log(`Hello, I am ${name}`);
    }
  };
}

const me = personFactory("Cena");
me.talk(); // Hello, I am Cena
```

---

## ⚠️ 2. Masalah Tanpa Factory Functions
Tanpa factory function, kita akan menulis banyak objek manual seperti ini:
```js
const me = { name: "Cena", talk() { return `Hello I am ${this.name}`; } };
const ben = { name: "Ben", talk() { return `Hello I am ${this.name}`; } };
```
Masalahnya:
1. **Kod berulang** – fungsi `talk()` ditulis berulang kali.  
2. **Tiada privasi** – `me.name` boleh diubah terus (`me.name = "Sam"`), menyebabkan bug.  
3. **Sukar dikawal & diuji** bila banyak objek terlibat.

---

## 🧰 3. Penyelesaian: Factory Function
Dengan factory function, semua logik dikumpul di satu tempat.  
Kita guna **closure** untuk melindungi data dalaman (seperti `name`):

```js
function personFactory(name) {
  return {
    talk() {
      return `Hello, I am ${name}`;
    }
  };
}

const ben = personFactory("Ben");
const jill = personFactory("Dr. Jill");
ben.talk(); // Hello, I am Ben
jill.talk(); // Hello, I am Dr. Jill
```

Kelebihan:
- Tiada kod pendua.
- Data (`name`) tidak boleh diubah dari luar.
- Semua objek kongsi logik yang sama tanpa class.

---

## 🧠 4. Ciri & Kelebihan Utama
1. **Sederhana** – hanya fungsi biasa, tiada constructor/`this`/`new` diperlukan.  
2. **Tiada pendua** – logik didefinisikan sekali sahaja.  
3. **Data privasi** – closure menyembunyikan data daripada diubah.  
4. **Lebih fleksibel** – sesuai untuk objek ringan tanpa warisan kompleks.  

---

## 💡 5. Contoh Praktikal: Buat Elemen HTML
Penulis tunjuk contoh fungsi yang menghasilkan elemen DOM dengan gaya tersendiri:

```js
function createElement(type, text, color) {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);

  return {
    el,
    setText(newText) { el.innerText = newText; },
    setColor(newColor) { el.style.color = newColor; }
  };
}

const heading = createElement("h1", "Hello!", "red");
heading.setColor("blue");
```

Fungsi ini membolehkan kita mencipta pelbagai elemen (`h1`, `p`, dsb.) dengan logik yang sama tanpa ulang kod DOM.

---

## 🔍 6. Ringkasan Konsep
| Isu | Penyelesaian dengan Factory Function |
|-----|---------------------------------------|
| Kod duplikasi | Logik dikumpul dalam satu fungsi |
| Data bocor | Gunakan closure untuk privasi |
| Sukar dikawal | Gunakan parameter dinamik |
| Perlu banyak objek | Gunakan fungsi penghasil (factory) |

---

## ⚖️ 7. Kelemahan & Perbandingan
- Factory functions **tidak mempunyai warisan (inheritance)** secara automatik.  
- Untuk kes warisan atau hierarki kelas, gunakan **constructor functions** atau **class** (akan dibincang dalam episod seterusnya).

---

## 🧩 8. Kesimpulan
- **Factory Function** = fungsi yang mengembalikan objek baru dengan logik tersendiri.  
- Ia menggalakkan *code reuse*, *data encapsulation*, dan *simplicity*.  
- Ia sangat berguna untuk kes penggunaan kecil dan modular.

---

## 🧠 Petikan Akhir
> “They’re simple, no setup, and they keep your logic in one place.”  
> “Factory functions aren’t perfect — constructor functions fix their shortcomings.”

---

**Video:** *“Factory Functions — Episode 3”*  
**Siri:** *10 Things JavaScript Developers Should Know*  
**Durasi:** ±14 minit  
**Topik Seterusnya:** Constructor Functions (Episode 4)
