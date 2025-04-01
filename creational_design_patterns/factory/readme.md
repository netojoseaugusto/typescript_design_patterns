The Factory Design Pattern is a type of creational design pattern that provides
an inteface for creating objects in a superclass, but allows subclasses to alter
the type of objects that will be created

Interesting for similar classes, you want to give a plugable code to the users of
your class

It has the advantage of decoupling the client code in the application from the concrete
classes that are instantiated. It also makes your code flexible.

Use cases: database connections, logger
