# Dummy API bilan ishlovchi loyiha

> **Qisqacha:** Bu loyiha dummy (namuna) API'lardan foydalangan holda **mahsulotlar**, **iqtiboslar**, **todos** va boshqa ma'lumotlarni yuklab ko‘rsatish, filtrlash va ishlash uchun namuna frontend loyihasidir.

---

## Xususiyatlar

* Mahsulotlar listi, bitta mahsulotni ko‘rish va qidirish.
* Todos ro‘yxati (todo yaratish, o‘chirish, belgilash).
* Iqtiboslar (quotes) ro‘yxati va tasodifiy iqtibos olish.
* API so‘rovlarini fetch yordamida bajarish uchun tayyor kod namunasi.
* Oson kengaytiriluvchi struktura — yangi endpointlar qo‘shish oson.

---

## Foydalanilgan dummy API'lar (misol uchun)

* `https://fakestoreapi.com` — mahsulotlar uchun.
* `https://jsonplaceholder.typicode.com` — todos, posts, users va hokazo.
* `https://dummyjson.com` — mahsulotlar, foydalanuvchilar va boshqalar.

> Siz o‘zingizga maqul bo‘lgan boshqa public dummy API'lardan ham foydalanishingiz mumkin.

---

## Loyihani ishga tushirish (frontend misol)

1. Kodni klonlash:

```bash
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>
```

2. Bog‘liqliklarni o‘rnatish (agar React/Next bo‘lsa):

```bash
npm install
# yoki
yarn
```

3. Ishga tushirish:

```bash
npm start
# yoki
yarn start
```

Brauzerda `http://localhost:3000` oching.

---

## API endpointlar va ishlatish misollari

Quyida `fetch` bilan JavaScript misollari berilgan. Osonlikcha `axios` bilan ham almashtirish mumkin.

### 1) Mahsulotlarni olish (Fake Store API)

```js
// Barcha mahsulotlar
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => console.log('Products:', data))
  .catch(err => console.error(err));

// Bitta mahsulot
fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(product => console.log('Product 1:', product));
```

### 2) Todos bilan ishlash (JSONPlaceholder)

```js
// Todos olish
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .then(todos => console.log('Todos:', todos));

// Yangi todo yaratish
fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Yangi vazifa', completed: false, userId: 1 })
})
  .then(res => res.json())
  .then(newTodo => console.log('Created:', newTodo));
```

### 3) Tasodifiy iqtibos olish (misol uchun Quotes API)

```js
// Agar quotes uchun maxsus API bo'lsa: masalan https://api.quotable.io/random
fetch('https://api.quotable.io/random')
  .then(res => res.json())
  .then(q => console.log('Quote:', q.content, '—', q.author));
```

> Agar sizning loyihangiz bir nechta API'larga bog‘langan bo‘lsa, ulardan ma'lumotlarni parallel olish uchun `Promise.all` yoki `async/await` dan foydalaning.

---

## Kod struktura tavsiyasi (misol React uchun)

```
/src
  /components
    ProductList.jsx
    ProductCard.jsx
    TodoList.jsx
    QuoteBox.jsx
  /services
    api.js        // barcha fetch/axios so'rovlar shu yerda
  /pages
    Home.jsx
    Products.jsx
  App.jsx
```

`/services/api.js` faylida barcha endpoint funksiyalarini jamlab qo‘ysangiz, qayta ishlatish va unit test osonroq bo‘ladi.

---

## Foydalanish tavsiyalari

* Mahsulotlar uchun keshlash qo‘shing (localStorage yoki SWR/React Query) — sahifa qayta yuklanganda ham tez ishlaydi.
* Xatoliklarni tutib olish va foydalanuvchiga oddiy xabar ko‘rsatish (toasts) qo‘shing.
* Loading holatini ko‘rsatish uchun loader component ishlating.
* CORS muammosi yuzaga kelsa — developer munosabati bilan proxy yoki CORS-configured dummy API tanlang.

---

## Namuna linklar

* Fake Store API: [https://fakestoreapi.com](https://fakestoreapi.com)
* JSONPlaceholder: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)
* DummyJSON: [https://dummyjson.com](https://dummyjson.com)
* Quotable (quotes): [https://api.quotable.io](https://api.quotable.io)

---

## Hissa qo'shish (Contributing)

1. Fork qiling
2. Yangi branch yarating: `git checkout -b feature/nomi`
3. O'zgartirishlarni commit qiling: `git commit -m "feat: nima qildingiz"`
4. Push qiling va Pull Request yuboring.

---

## Litsenziya

Bu loyiha MIT litsenziyasi ostida.

---

## Aloqa

Savollar yoki takliflar bo‘lsa — `neyrocoder@gmail.com` orqali bog‘laning.

---

*README shu loyihani boshlash uchun asosiy shablon. Istasangiz, men buni sizning repository maqsadlaringizga moslab o‘zgartirib beraman (masalan — React, Vue yoki vanilla JS uchun aniq kod misollari).*
