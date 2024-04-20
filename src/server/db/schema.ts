import { sql } from "drizzle-orm";
import { pgTableCreator, varchar, jsonb, timestamp, boolean, index } from "drizzle-orm/pg-core";

// Function to prefix table names
export const createTable = pgTableCreator((name) => `recipe-shuffl_${name}`);

export const recipes = createTable(
  "post",
  {
    id: varchar("id", { length: 256 }).notNull(),
    title: varchar("title", { length: 256 }).notNull(),
    description: varchar("description", { length: 1024 }),
    userId: varchar("userId", { length: 256 }).notNull(),
    ingredients: jsonb("ingredients").$type<Array<{ ingredient: string; unit: string }>>().notNull(),
    steps: jsonb("steps").$type<Array<{ step: string;}>>(),
    isPrivate: boolean("isPrivate").notNull(),
    duration: varchar("duration", { length: 1024 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.title),
  })
);

