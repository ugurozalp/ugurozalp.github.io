---
title: "JShell Nedir?"
lang: tr
layout: post
headerImage: true
tag:
- java
- tools
category: blog
author: ugurozalp
cat: what-is-jshell
description: Terminal aracılığı ile hızlı bir şekilde java kodlarını çalıştırabilmenizi sağlayan bir araçtan bahsedeceğim.
---

<p align="center">
  <img src="https://javatutorial.net/wp-content/uploads/2017/09/jshell-featured-image-1280x720.png">
</p>

# JShell Nedir?

jshell, Java 9 ile gelmiş olan, terminal üzerinde hızlı bir şekilde java kodlarını çalıştırabilmenizi sağlayan bir araçtır.

Hızlı bir giriş yapacak olursak, jshell komutunu terminal ekranına yazarak başlayalım.

```bash
➜ jshell
|  Welcome to JShell -- Version 13.0.2
|  For an introduction type: /help intro
```

ilk örnek "Selam":

```bash
jshell> "Selam"
$1 ==> "Selam"
```

Yukarıdaki örnek ile "Selam" ifadesini $1 değişkenine atadığını farketmişsinizdir. Sonrasında $ ile başlayan ifadeleri değişken gibi çağırabiliriz.

```bash
jshell> $1
$1 ==> "Selam"
```

Java metodlarını kullanabilirsiniz:

```bash
jshell> new Date()
$2 ==> Fri Mar 05 10:35:38 EET 2021
```

JShell ile metod tanımlayabilirsiniz.

```bash
jshell> String welcome(String name){
   ...> return "Hosgeldin " + name;
   ...> }
|  created method welcome(String)

jshell> welcome("Ugur")
$2 ==> "Hosgeldin Ugur"
```

Daha önce yazdığınız bir kod parçasını JShell'e import etmek isterseniz, classpath bilgisini girerek dış kodlara erişebilirsiniz.

```bash
jshell —class-path <classpath>
```

JShell içerisinde kendine özel komutlar da bulunuyor. Bu komutları "```/```" ön eki ile çalıştırabilirsiniz. Örneğin "```list```" kullanarak şu anda etkin olan/çalışan kod parçacıklarını listeleyebilirsin.

```bash
jshell> /list
1 : "Selam"
2 : new Date()
3 : $1
```

```/list -all``` ile tüm komut satırlarını, durumları ile birlikte listeleyebilirsiniz. Örneğin ;
e1 : failed-başarısız komuta,
s1 : startup-başlatılan kod'a. 
1  : dropped-bırakılan kod'a örnektir.

```bash
jshell> /list -all

  s1 : import java.io.*;
  s2 : import java.math.*;
  s3 : import java.net.*;
  s4 : import java.nio.file.*;
  s5 : import java.util.*;
  s6 : import java.util.concurrent.*;
  s7 : import java.util.function.*;
  s8 : import java.util.prefs.*;
  s9 : import java.util.regex.*;
 s10 : import java.util.stream.*;
   1 : "Selam"
  e1 : i
   2 : new Date()
   3 : $1
```

```/<tab>``` : JShell'e özel komutlarını listelemek için kullanılır. 

```bash
jshell> /
/!          /?          /drop       /edit       /env        /exit
/help       /history    /imports    /list       /methods    /open
/reload     /reset      /save       /set        /types      /vars

<press tab again to see synopsis>
```

```<tab>``` tuşuna basarak ilgili komutların detaylarını da görebilirsiniz.

```bash
jshell> /
/!
rerun last snippet -- see /help rerun

/-<n>
rerun n-th previous snippet -- see /help rerun

/<id>
rerun snippets by ID or ID range -- see /help rerun

/?
get information about using the jshell tool

/drop
delete a source entry

/edit
edit a source entry

...

<press tab again to see full documentation>
```

**JShell’i kapatmak için ise;**

```
/exit
```

Böylece JShell aracına genel bir bilgi edinmiş olduk, okuduğunuz için teşekkürler. 🙂