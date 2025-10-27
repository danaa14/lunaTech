import { Client, Databases, Query } from 'appwrite'


const client = new Client();
client.setProject('68e6a96e002714241552').setEndpoint("https://cloud.appwrite.io/v1")

export const databases:any = new Databases(client);

export async function getCollections() {
    try{
        const  productSnapshot = await databases.listDocuments('68e6a9cc000999e421ca', 'products', [Query.limit(100)]);
        const productList = productSnapshot.documents;
        const categorySnapshot = await databases.listDocuments('68e6a9cc000999e421ca', 'categories')
        const categoryList = categorySnapshot.documents;

        return { products: productList, categories: categoryList };
    }
    catch (error) {
        console.error('Failed to fetch collections:', error)
        return { products: [], categories: [] };
    }
    };