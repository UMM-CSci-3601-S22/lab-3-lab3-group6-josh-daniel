export interface Todo {
  _id: string; // server filter
  owner: string; // local filter
  status: boolean; // server filter
  body: string; // local filter
  category: string; // local filter
}
