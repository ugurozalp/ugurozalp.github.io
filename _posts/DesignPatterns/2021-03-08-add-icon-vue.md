---
title: "Vue projeme nasıl ikon(svg) eklerim?"
lang: tr
layout: post
headerImage: false
tag:
- vuejs
category: blog
author: ugurozalp
cat: add-icons-svg
description: Vue projenize icon(svg) dosyalarını nasıl ekleriz konusundan bahsetmek istiyorum
---
Created: May 08, 2021 11:48 PM
Status: In Review 👀
Type: Technical Spec
# Vue projenize İkon(svg) eklemek

Herkese Merhaba,

Bu yazımda vue projenize icon(svg) dosyalarını nasıl ekleriz konusundan bahsetmek istiyorum.

Örnek olarak [stackoverflow.com](https://stackoverflow.com/) adresindeki dünya ikonunu kullanmak istiyorum. İstediğim ikona sağ tıklayıp Inspect element ile svg elementini kopyalıyorum.

![/assets/images/svg/Untitled.png](/assets/images/svg/Untitled.png)

```html
<svg aria-hidden="true" class="svg-icon iconGlobe" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 100 16A8 8 0 009 1zM8 15.32a6.4 6.4 0 01-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z"></path></svg>
```

İlk olarak projemde ikonları konumlandıracağım src/icons klasörümü oluşturuyorum. Ardından bu dizine CustomIconGlobe.vue dosyasını oluşturup, <template> içerisine kopyaladığım svg elementini yapıştırıyorum. İçeriği biraz düzenledikten sonra, son hali aşağıdaki gibi oluyor.

CustomIconGlobe.vue:

```jsx
<template>
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path
      d="M9 1a8 8 0 100 16A8 8 0 009 1zM8 15.32a6.4 6.4 0 01-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z"
    />
  </svg>
</template>

<script>
export default {
  name: "CustomIconGlobe"
};
</script>
```

Şimdi yapmam gereken ikonumu Helloworld.vue'ya component olarak eklemek. 

Helloworld.vue

```jsx
<template>
  <div>
    <custom-icon></custom-icon>
  </div>
</template>

<script>
import CustomIcon from "@/icons/CustomIconGlobe.vue";

export default {
  name: "HelloWorld",
  components: {
    CustomIcon
  }
};
</script>
```

![/assets/images/svg/Untitled%201.png](/assets/images/svg/Untitled%201.png)

İkonum biraz küçük, o yüzden boyutunu büyütmek istiyorum. Biliyorsunuz svg artık vue tarafından component olarak tanındığı için özelliklerini de kullanabilirim. 

```jsx
<custom-icon width="50" height="50"></custom-icon>
```

![/assets/images/svg/Untitled%202.png](/assets/images/svg/Untitled%202.png)

Artık elimizde bir component olduğu için yukarıdaki örnekleri istediğimiz kadar çeşitlendirebiliriz. Örneğin bir <button> içerisinde de kullanabiliriz. 

```jsx
<button @click="printHello">
  <custom-icon width="50" height="50"></custom-icon>
</button>
```

# İkonları vuetify'a entegre etmek

Vuetify oldukça zengin kullanıcı deneyimleri oluşturmak için ihtiyaç duyulan birçok araç sağlayan bir material design framework'tür. Eğer projenizde kullanmıyorsanız vuetify kullanımızı öneririm. Böylece aşağıda anlatacağım kısımları da bakmak durumunda kalabilirsiniz 🙂

Yukarıda oluşturduğumuz component'i vuetify config'e ekliyorum.

vuetify.js: 

```jsx
import CustomIcon from "@/icons/CustomIconGlobe.vue";

export default new Vuetify({
  icons: {
    values: {
      customIconGlobal: {// name of our custom icon
        component: CustomIcon // our custom component
      }
    }
  }
});
```

artık aşağıdaki gibi kullanabilirsiniz.

```html
<v-icon>$vuetify.icons.customIconGlobal</v-icon>
```

daha kısa yazım için:

```html
<v-icon>$customIconGlobal</v-icon>
```

Bir diğer yöntem ise vue-svg-loader paketini kullanmak. Bu paket ile svg dosyalarınızı tıpkı bir component gibi kullanabilirsiniz. Aslında yazının ilk kısmında yaptığımız CustomIconGlobe.vue gibi dosyalar oluşturmadan doğrudan svg dosyalarını kullanmanızı sağlıyor. Daha fazla bilgi için sitesini ziyaret edebilirsiniz.[vue-svg-loader Documentation](https://vue-svg-loader.js.org/)

Öncelikle 2 paketi yüklüyorum.

```bash
npm install -D vue-svg-loader vue-template-compiler
```

Şimdi ilgili konfigürasyonları yapmamız gerekiyor. vue-svg-loader paketi bize webpack, VUE CLI ve Nuxt.js için gerekli konfigurasyonu sağlıyor. Ben projemde VUE CLI ile devam edeceğim. VUE CLI varsayılan olarak vue.config.js dosyasının kullanır. Şimdi projemizin root dizininde vue.config.js dosyasını oluşturup, içerisine aşağıdaki konfigürasyonu ekleyelim.

vue.config.js

```jsx
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
```

Şimdi de icons/globe.svg dosyasını oluşturuyorum. svg içeriğini CustomIconGlobe.vue içerisinden kopyalıyorum.

![/assets/images/svg/Screen_Shot_2021-03-09_at_11.20.05.png](/assets/images/svg/Screen_Shot_2021-03-09_at_11.20.05.png)

globe.svg

```html
<svg width="18" height="18" viewBox="0 0 18 18">
    <path
            d="M9 1a8 8 0 100 16A8 8 0 009 1zM8 15.32a6.4 6.4 0 01-5.23-7.75L7 11.68v.8c0 .88.12 1.32 1 1.32v1.52zm5.72-2c-.2-.66-1-1.32-1.72-1.32h-1v-2c0-.44-.56-1-1-1H6V7h1c.44 0 1-.56 1-1V5h2c.88 0 1.4-.72 1.4-1.6v-.33a6.4 6.4 0 012.32 10.24v.01z"
    />
</svg>
```

Artık svg dosyasını bir component gibi kullanabilirim.

```jsx
<template>
  <div>
    <button @click="printHello">
      <custom-icon width="50" height="50"></custom-icon>
    </button>
    <v-icon>$vuetify.icons.customIconGlobal</v-icon>
    <v-icon>$customIconGlobal</v-icon>
    <globe-icon></globe-icon>
  </div>
</template>
<script>
import CustomIcon from "@/icons/CustomIconGlobe.vue";
import GlobeIcon from "@/icons/globe.svg";

export default {
  name: "UseOfIcons",
  components: {
    CustomIcon,
    GlobeIcon
  },
  methods: {
    printHello() {
      console.log("Hello!");
    }
  }
};
</script>
```

Projeyi çalıştırdığımda sayfada ikonları görebiliyorum.

![/assets/images/svg/publish3.png](/assets/images/svg/publish3.png)

Okuduğunuz için teşekkür ederim, umarım yardımcı olmuştur. Yazıya ait kaynak kodları github adresimde bulabilirsiniz. Neşeli, sağlıklı günler dilerim 🙂

GitHub: [https://github.com/ugurozalp/training-vue](https://github.com/ugurozalp/training-vue)