---
title: "Singleton"
layout: post
lang: tr
date: 2020-05-05 22:48
headerImage: false
tag:
- designpatterns
- creationalpatterns
- singleton
category: designpatterns creationalpatterns
author: ugurozalp
description: An article where you can find the basic form of singleton pattern
cat: designpatterns-creationalpatterns-singleton
permalink: "designpatterns/creationalpatterns/singleton"
---
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
- **Singleton?**

    "tek", "tek olan" anlamına gelir

- **Amaç:**

    Bir sınıfın sadece bir tane nesnesi olduğuna emin ol ve erişebilir bir erişim noktası sağla.

- **Çözüm:**
    1. Nesne yaratmayı kontrol et.

        ~~Object obj = new Object();~~

    2. Enum kullan.

- **Happens-before Relationship nedir?**

    Bu konu detaylı olduğundan kısaca açıklamaya çalıştıktan sonra vereceğim anahtar kelimeler ile konunun detaylarını araştırabilirsiniz.
    Bilgisayar mimarisinden (`Von Neumann`, `Harvard`) kaynaklanan kısıtlamaları aşmak hem de artan yüksek ihtiyaca cevap verebilmek için yazılım seviyesinde, işletim sistemleri, JVM gibi yapılar çeşitli **optimizasyonlar** yapmak durumunda kaldılar. Happens-before ilişkisi de yukarıdaki sistemlerin inisiyatif alarak yapacakları optimizasyonları önlemeyi amaçlamaktadır. 

    - synchronized

        kod bloğu seviyesinde serilik sağlar.

    - volatile

        değişken seviyesinde serilik sağlar.

- **Final Code**

    ```java
    public class Singleton {

        // Oluşturulacak tek nesne static sınıf değişkeni olarak tanımlanır.
        private static volatile Singleton instance;

        // private constructor ile başka sınıfların new() keyword'u ile yeni nesne oluşturmasını engelle
        private Singleton() {
        }

        // Başka sınıfların tek nesneye ulaşması için getInstance() metodunu kullan
        public static Singleton getInstance() {
            if (instance == null) {
                // double-checking
                synchronized (Singleton.class) {
                    if (instance == null) {
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }

        public void printName() {
            System.out.println(this);
        }

    }
    ```
    
    Bu makaledeki kodu [GitHub](https://github.com/ugurozalp/DesignPatterns/tree/master/src/com/ugurozalp/designpatterns/creational/singleton) sayfamda bulabilirsiniz.

- **Tavsiyeler;**
    - Java Concurrency in Practice —> [https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601](https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601)

    - Happens-before ilişkisi üzerine detaylı okuma yapmak isteyenlere : [https://www.javaturk.org/tasarim-kaliplari-vi-singleton-tek-nesne-iii-ve-double-checked-locking/](https://www.javaturk.org/tasarim-kaliplari-vi-singleton-tek-nesne-iii-ve-double-checked-locking/)

    - Gökhan Topçu - Programlama Dilleri ve Performans sunumunu izlemenizi tavsiye ederim. [https://www.youtube.com/watch?v=iw-FkRNa2Uk](https://www.youtube.com/watch?v=iw-FkRNa2Uk)


    [<< Design Patterns](/designpatterns/)

    {% include disqus.html %}


    [1]: https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/package-summary.html#MemoryVisibility