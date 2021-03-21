---
title: "Vite Nedir?"
lang: tr
layout: post
headerImage: false
tag:
- vuejs
category: blog
author: ugurozalp
cat: what-is-vite
description: Vue topluluğu tarafından geliştirilen bir inşa aracı (build tool) olan Vite projesinden bahsedeceğim.
---
Created: May 21, 2021 20:48 PM
Status: In Review 👀
Type: Technical Spec
# Vite Nedir?

Herkese merhaba, bu yazımda Vue topluluğu tarafından geliştirilen bir inşa aracı (build tool) olan Vite projesinden bahsedeceğim. 

Vite kısaca; (projelerimin çoğunda kullandığım) webpack, rollup ve parcel gibi, kod geliştirirken yapılan her değişiklikte projenin ihtiyaç duyduğu paket/paketleri oluşturan ve derleyen bir araçtır. Peki halihazırda kullandığımız birçok araç varken neden yeni bir araç daha geliştiriliyor diye soracak olursanız, geliştirici ekibin ana motivasyonunun özellikle büyük ölçekli projelerde ortaya çıkan performans sorunlarına çözüm üretmek olduğunu söyleyebilirim. kaynak: [https://vitejs.dev/guide/why.html](https://vitejs.dev/guide/why.html)

Ek olarak Vite vue ile sınırlı kalmayıp, React, Vanilla JS ile de çalıştığını hatırlatmak isterim. (Bu yazıda sadece vue kısmını ele alacağım.)

Vite aracını yeni bir sa resmi sayfaya [https://vitejs.dev/guide/#browser-support](https://vitejs.dev/guide/#browser-support) göz atabilirsiniz.

### Vue projemize Vite aracını eklemek

İlk olarak CLI yardımıyla vue için oluşturulan Vite eklentisini  devDependency'lerine ekliyoruz:

```bash
npm install vite @vitejs/plugin-vue --save-dev
```

- Eğer projenizde vue 2 kullanıyorsanız [underfin](https://github.com/underfin/vite-plugin-vue2)'in geliştirmiş olduğu eklentiyi kullanabilirsiniz. Ayrıca vue2 için destek sürecini daha detaylı incelemek isterseniz ilgili [issue](https://github.com/vitejs/vite/issues/305)'ya da bakabilirsiniz.

    ```bash
    npm install vite-plugin-vue2 --save-dev
    ```

    Yazının devamında vue3 örneği ile devam edeceğim.

İşlem tamamlandığında projenizin ana dizinine "vite.config.js" (ya da .ts) adında dosya oluşturuyoruz ve içerisinde projemizin vue projesi olduğunu belirten konfigürasyonu ekliyoruz.

```jsx
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
```

Sonrasında, projeyi host edebilmek için bir index sayfasına ihtiyacımız var. Aslında, projenizin root dizinin bir web geliştirme sunucusunun root dizini gibi kullanacağız, bu nedenle projeye bir index.html koymak gerekiyor:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

Burada dikkat etmemiz gereken kısım; script tag'i içerisinde src özelliği vue projenizin başlangıcını yani  vue'yu mount ettiğiniz alanı göstermelidir. 

Geliştirici ortamını ayağa kaldırmamız için son olarak package.json dosyasına vite komutlarını ekliyoruz.

```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
```

Şimdi test edebiliriz, önce yeni bir terminal sayfası açıp dev komutunu çalıştırıyoruz.

```bash
npm run dev
```

```bash
vite v2.1.2 dev server running at:

  > Local:    http://localhost:3000/
  > Network:  http://192.168.1.148:3000/
  > Network:  http://192.168.1.60:3000/

  ready in 98ms.
```

Geliştirme ortamımız hazır.

Okuduğunuz için teşekkürler. Hızlı bir başlangıç için umarım yardımcı olmuştur. 🙂