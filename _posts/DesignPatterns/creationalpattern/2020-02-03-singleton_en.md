---
title: "Singleton"
layout: post
lang: en
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
permalink: "designpatterns/creationalpatterns/singleton_en"
---
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
- **Goal:**

    Make sure a class has only one object and provide an accessible access point.

- **Solution:**
    1. By controlling object creation.

        ~~Object obj = new Object();~~

    2. Use enum.

- **What is Happens-before Relationship?**

    Since this topic is detailed, after trying to explain it briefly, you can search by keywords the details of the topic
    In order to overcome the constraints arising from the computer architecture (<span class="evidence">Von Neumann, Harvard</span>) and respond to the increasingly high need, structures such as software systems, operating systems, JVM have had to make various optimizations. Happens-before relationship aims to prevent optimizations from the above systems.

    - synchronized

        Provides seriality at the code block level.

    - volatile

        Provides seriality at the variable level.

- **Final Code**

    ```java
    public class Singleton {

        // The only object to be created is defined as the static class variable.
        private static volatile Singleton instance;

        // private constructor prevent other classes from creating new object with new() keyword.
        private Singleton() {
        }

        // Use getInstance () method to make other classes reach one object
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
    
    You can find the code in this article on my [GitHub](https://github.com/ugurozalp/DesignPatterns/tree/master/src/com/ugurozalp/designpatterns/creational/singleton) page.

- **Advices;**
    - Java Concurrency in Practice —> [https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601](https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601)

    - For those who want to read in detail about the happens-before relationship : [https://www.javaturk.org/tasarim-kaliplari-vi-singleton-tek-nesne-iii-ve-double-checked-locking/](https://www.javaturk.org/tasarim-kaliplari-vi-singleton-tek-nesne-iii-ve-double-checked-locking/)

    - Gökhan Topçu - Programlama Dilleri ve Performans sunumunu izlemenizi tavsiye ederim. [https://www.youtube.com/watch?v=iw-FkRNa2Uk](https://www.youtube.com/watch?v=iw-FkRNa2Uk)


[<< Design Patterns](/designpatterns_en/)


{% include disqus.html %}


[1]: https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/package-summary.html#MemoryVisibility