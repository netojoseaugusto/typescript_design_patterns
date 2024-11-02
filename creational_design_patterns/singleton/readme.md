Problems it might solve:

- File Access Issues
- Costly instantiation
- Consistency, for example, same logging format

Caveats:

- Global State, meaning, it leads to a shared state and increased coupling
- Testing might be more difficult because of the preserved state
- Concurrency Issues
- Difficult to Subclass due to static methods
- Memory Management

Use cases:

- Caching: prevents data duplication in cache
- Service Proxies: manages efficient server communication
- Shared Resources: ensure single access point access
- Configuration Data: centralizes access to config
- Logger: ensure consistent logging
