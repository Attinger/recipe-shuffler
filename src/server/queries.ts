import { db } from "~/server/db/index";
import { auth } from "@clerk/nextjs/server";

import "server-only"

export async function getAllRecipes () {
    const user = auth();

    const recipes = await db.query.recipes.findMany({
        //where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, {desc}) => desc(model.id),
    });

    return recipes;
}