---
layout: "page"
title: Builder
tag:
- designpatterns
- creationalpatterns
- builder
category: designpatterns creationalpatterns
authot: ugurozalp
description: An article where you can find the basic form of builder pattern
---
# Builder

- **Builder nedir?**

    Kurmak, inşa etmek anlamına gelir.

- **Amaç:**

    Karmaşık nesne yapısını ayrıştırmak.

- **Çözüm:**

    Inner class kullanmak.

- Neden ve ne zaman Builder Pattern kullanılmalı?
    1. Eğer çok fazla objeniz varsa bu objeleri oluştururken constructorunda çok fazla null parametre göndermeye başladıysak;
    2. Farklı parametrelerde birden fazla constructorımız varsa;
    3. Nesnemizi oluşturduktan sonra değişmesini istemiyorsak (immutable);
    4. Constructorlarımız duplicate olmaya başladı ise.
    
    {% include disqus.html %}