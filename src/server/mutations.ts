
"use server"
import { auth } from "@clerk/nextjs/server";
import { uuid } from "drizzle-orm/pg-core";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { recipes } from "~/server/db/schema";
import { randomUUID } from 'crypto';

export async function createRecipe(formData: FormData) {
    try {
        const user = await auth(); // Ensure user is awaited if it's asynchronous
        const title = formData.get('title')?.toString();
        const description = formData.get('description')?.toString();
        const ingredientsString = formData.get('ingredients')?.toString();
        const ingredients = ingredientsString ? JSON.parse(ingredientsString) : []; // Parsing JSON string to object
        const isPrivate = formData.get('isPrivate') === 'true'; // Ensuring boolean

        const recipeId = randomUUID(); // This generates a UUID v4 string
        console.log(recipeId); // Logs the UUID string
        
        if (!user.userId || !title) return;

        await db.insert(recipes).values({
            id: recipeId,
            title: title,
            description: description,
            userId: user.userId,
            ingredients: ingredients, // Ensure this matches JSONB format
            steps: [],
            isPrivate: isPrivate,
            createdAt: new Date()
        }).execute();

        revalidatePath('/');

        return { message: 'Recipe added successfully', success: true };
    } 
    catch (error) {
        console.error(error);
        return {
            error: "Something went wrong",
        }
    }
}
