export interface Todo {
  _id: string; // Server side filter
  owner: string; // local filter
  status: boolean; // Server side filter
  body: string; // Server side filter
  category: string; // Server side filter
}
