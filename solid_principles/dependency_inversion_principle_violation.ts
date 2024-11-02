class MySqlDatabase {
  save(data: string): void {}
}

// High Level Module is Dependend on a Low Level Module
class HighLevelModule {
  constructor(private database: MySqlDatabase) {}
  execute(data: string): void {
    this.database.save(data);
  }
}
