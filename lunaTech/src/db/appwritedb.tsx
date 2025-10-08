import { Client, Databases } from 'appwrite'

const client = new Client();
client.setProject('68e6a96e002714241552');

export const databases:any = new Databases(client);