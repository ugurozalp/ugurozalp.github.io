---
layout: post
title: Prototype
tag:
- designpatterns
- creationalpatterns
- prototype
category: designpatterns creationalpatterns
author: ugurozalp
description: An article where you can find the basic form of prototype pattern
lang: en
cat: designpatterns-creationalpatterns-prototype
permalink: "designpatterns/creationalpatterns/prototype_en"
---
 [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
- **Goal:**
    - Copy the object that takes time to rebuild.
    - Reduce class complexity and the number of classes used.
- **Çözüm:**
    - Creating the prototype object to be cloned.
        1. implements Cloneable
        2. +clone()
        3. Setter
- **Additional Information:**

   It could use Abstract Factory or Factory Method patterns instead of Prototype. The difference is when using Factory inheritance (this means a factory object is required for each new object), while Prototype is derived from the existing prototype object.

- **Associated Design Patterns;**
    - Abstract factory
    - Factory Method
    - Decorator
    - Composite

- **Final Code**

                                    UML diagram

![/assets/images/UML/DesignPatterns/prototype.png](/assets/images/UML/DesignPatterns/prototype.png)

"CupPrototype" represents the prototype object we will clone.

```java
public abstract class CupPrototype implements Cloneable{
    private int id;
    protected double capacity;
    protected String material;
    protected String type;

    public CupPrototype(int id, double capacity, String material) {
        this.id = id;
        this.capacity = capacity;
        this.material = material;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getCapacity() {
        return capacity;
    }

    public void setCapacity(double capacity) {
        this.capacity = capacity;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "CupPrototype{" +
                "id='" + id + '\'' +
                ", capacity=" + capacity +
                ", material='" + material + '\'' +
                ", type='" + type + '\'' +
                '}';
    }

    public Object clone() {
        Object clone = null;

        try {
            clone = super.clone();

        } catch (CloneNotSupportedException e) {
            System.out.println("Problem when cloning the object: " + e.getMessage());
            e.printStackTrace();
        }
        return clone;
    }
}
```

Our other 3 objects extending the prototype object.

```java
public class WaterCup extends CupPrototype{

    public WaterCup(int id, double capacity, String material) {
        super(id, capacity, material);
        type="WaterCup";
    }

    @Override
    public String toString() {
        return "WaterCup{" +
                "capacity=" + capacity +
                ", material='" + material + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
```

```java
public class TeaCup extends CupPrototype {
    private String accessory;
    
    public TeaCup(int id, double capacity, String material,String accessory) {
        super(id, capacity, material);
        type="TeaCup";
        this.accessory=accessory;
    }

    public String getAccessory() {
        return accessory;
    }

    public void setAccessory(String accessory) {
        this.accessory = accessory;
    }

    @Override
    public String toString() {
        return "TeaCup{" +
                "accessory='" + accessory + '\'' +
                ", capacity=" + capacity +
                ", material='" + material + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
```

```java
public class MeasuringCup extends CupPrototype {
    private String ratingScale;
    
    public MeasuringCup(int id, double capacity, String material,String ratingScale) {
        super(id, capacity, material);
        type="MeasuringCup";
        this.ratingScale=ratingScale;
    }

    public String getRatingScale() {
        return ratingScale;
    }

    public void setRatingScale(String ratingScale) {
        this.ratingScale = ratingScale;
    }

    @Override
    public String toString() {
        return "MeasuringCup{" +
                "ratingScale='" + ratingScale + '\'' +
                ", capacity=" + capacity +
                ", material='" + material + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
```

Finally, we write our test object.

```java
public class Client {
    public static void main(String[] args) {
        TeaCup slenderTeaCup = new TeaCup(1, 100, "glass", "tea plate");
        System.out.println(slenderTeaCup);

        TeaCup cup = (TeaCup) slenderTeaCup.clone();
        cup.setId(2);
        cup.setAccessory("handle");
        System.out.println(cup);
    }
}
```

Code output:

```java
TeaCup{accessory='tea plate', capacity=100.0, material='glass', type='TeaCup'}
TeaCup{accessory='handle', capacity=100.0, material='glass', type='TeaCup'}
```
 You can find the code in this article on my [GitHub](https://github.com/ugurozalp/DesignPatterns/tree/master/src/com/ugurozalp/designpatterns/creational/prototype) page.

[<< Design Patterns](/designpatterns_en/)

{% include disqus.html %}
