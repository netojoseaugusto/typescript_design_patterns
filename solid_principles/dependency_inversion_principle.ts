interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MySQL Database`);
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB Database`);
  }
}

// High Level Module accepts any model that adhere to the IDatabase interface
class HighLevelModule {
  constructor(private database: IDatabase) {}
  execute(data: string): void {
    this.database.save(data);
  }
}

let mysql: MySqlDatabase = new MySqlDatabase();
let mongo: MongoDBDatabase = new MongoDBDatabase();

let user: HighLevelModule = new HighLevelModule(mysql);

user.execute("John");

let post: HighLevelModule = new HighLevelModule(mongo);
post.execute("New Post");
