// src/appwrite.js
import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APP_WRITE_END_POINT) // Cloud endpoint
  .setProject(import.meta.env.VITE_APP_WRITE_PROJECT_ID); // Project ID

export const account = new Account(client);
export { ID };