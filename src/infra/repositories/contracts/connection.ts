export interface DatabaseConnection {
  query<T = any>(query: string, params?: any[]): Promise<T>;

  close(): Promise<void>;
}
