"use server"
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { recipes } from "~/server/db/schema";

export async function generateRecipe(prevState: any, formData: FormData) {
    try {
        const user = auth();
        const title = formData.get('title')?.toString();
        const description = formData.get('description')?.toString();

        if(!user.userId || !title) return;

        await db.insert(recipes).values({
            title: title,
            description: description,
            userId: user.userId
        })

        revalidatePath('/');
        return {message: 'Added Recipe'}
    } catch (e) {
        return {message: 'Failed to create a recipe'}
    }
}