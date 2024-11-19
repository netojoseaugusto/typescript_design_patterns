Allows clonning objects without coupling to their specific classes

Useful when creating a new object instance is more costly than cloning.
Also useful when you might need multiple objects that are similar to an existing instance.

Advantages:

- Avoid Reference Errors
- Simplify object creation

Disadvantages:

- Be careful with shallow and deep clones

Use cases:

- Data Processing Pipelines
- Game Dev
- Distributed systems
