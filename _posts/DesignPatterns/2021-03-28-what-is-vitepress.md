---
title: "VitePress Nedir?"
lang: tr
layout: post
headerImage: true
tag:
- vuejs
category: blog
author: ugurozalp
cat: what-is-vitepress
description: Vite üzerine inşa edilmiş yeni bir statik site oluşturma aracından bahsedeceğim.
---

<p align="center">
  <img width="386" height="358" src="/assets/images/screenShot/vitepress_sc3.png">
</p>

# VitePress Nedir?

Merhaba, bu yazımda VitePress'e hızlı bir giriş yapmak istiyorum. Yazıya geçmeden önce göz önünde bulundurmanızı istediğim bir  konu var, VitePress henüz WIP(work-in-progress) yani "devam eden çalışma" durumundadır. Github sayfalarını ve ekledikleri notu da aşağıya ekliyorum.

  <p align="center">
    <a href="https://github.com/vuejs/vitepress">
      <img src="/assets/images/screenShot/virepress_sc2.png">
    </a>
  </p>

VitePress, [Vue 3](https://v3.vuejs.org/guide/introduction.html) ve [Vite](https://vitejs.dev/guide/) üzerine inşa(build) edilmiş yeni bir statik site oluşturma (static site generator) aracıdır. Bu tanımı biraz açmak istiyorum. Öncelikle Vite nedir? derseniz bir önceki blog yazıma [buradan](http://ugurozalp.com/what-is-vite/) erişebilirsiniz. Diğer bir soru Statik site oluşturucu nedir? Kısaca üzerinde işlem yapılamayan verilere(buna içerik de diyebiliriz) ve bir dizi şablona(template) dayalı statik HTML web siteleri oluşturmaya yarayan araçlara verilen bir isimdir. Günümüzde kullanılan bazı statik site oluşturma araçları ; 

- Jekyll
- Gatsby
- Hugo
- Next.js

Örneğin şu an okuduğunuz blog yazım [GitHub Pages](https://pages.github.com/) ile [Jekyll](https://jekyllrb.com/) kullanarak yayınlıyorum.

## Neden VitePress?

VitePress projesinden önce geliştirilen yine Vue destekli [VuePress](https://vuepress.vuejs.org/) isimli bir araç mevcut, hatta VitePress için "küçük kardeş" tabirini de bu yüzden kullanıyorlar. İki farklı projenin olma sebebi ise farklı tasarım hedeflerine odaklanmaları. Temel olarak; VitePress'in, Webpack yerine, Vite üzerine inşa edilmiş olması, bu yüzden daha hızlı ayağa kalkma, çalışırken yeniden yükleme(hot-reloads) vb. özellikleri vadetmesi ve daha hafif (lighterweight) olmasıdır. Kısaca daha minimal ve basit bir site ve/veya belgelendirme oluşturmanızı sağlayan bir alternatiftir. VuePress ise birçok farklı özelliğe sahip kullanıma hazır eklenti(plugin) ekosistemine sahiptir. 

Özetleyecek olursak geliştirici topluluğunun gelecek planlarında; projenizde halihazırda VuePress kullanıyorsanız, VitePress'e geçmenize gerek olmadığı, her iki projenin de bir arada var olmaya devam edeceği yönünde.

## İlk Projemizi Oluşturalım

"my-vitepress-project" adında yeni bir dizin oluşturuyorum.

```bash
mkdir my-vitepress-project
cd ./my-vitepress-project
```

Paket yöneticisini başlatıp ardından Vitepress'i projeme ekliyorum. Nodejs >= 12 olması gerekiyor.

```bash
npm init
npm install --save-dev vitepress
```

package.json dosyasına Vitepress komutları(scripts) ekliyorum.

```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  }
}
```

Root dizininde docs/[index.md](http://index.md) dosyamı oluşturuyorum. Blog sayfalarımın formatı .md olduğu için, index.md içerisine bir önceki yazımı kopyalıyorum. 

```bash
mkdir docs && touch docs/index.md
```

Artık uygulamamızı çalıştırabiliriz.

```bash
➜  my-vitepress-project npm run docs:dev

> my-vitepress-project@1.0.0 docs:dev
> vitepress dev docs

vitepress v0.12.2
vite v2.1.2

  vite v2.1.2 dev server running at:

  > Local:    http://localhost:3000/
  > Network:  http://192.168.1.148:3000/
  > Network:  http://192.168.1.60:3000/
[@vue/compiler-sfc] <script setup> is still an experimental proposal.
Follow its status at https://github.com/vuejs/rfcs/pull/227.

[@vue/compiler-sfc] When using experimental features,
it is recommended to pin your vue dependencies to exact versions to avoid breakage.

7:40:32 PM [vite] hmr update /index.md
7:40:42 PM [vite] hmr update /index.md (x2)
```

Sitemiz başarılı olarak ayağa kalktı. Artık [http://localhost:3000/](http://localhost:3000/) 'e giderek sonuca bakabiliriz.

<p align="center">
  <img width="750" height="420" src="/assets/images/screenShot/vitepress_sc1.png">
</p>

Şimdi sırada siteyi özelleştirme ve daha fazla Vitepress özelliklerini bir sonraki yazımda bahsedeceğim, görüşmek üzere, hoşçakalın :)