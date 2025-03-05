import { integer, text, boolean, timestamp,pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: integer("id").primaryKey(),
    text: text("text").notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .$onUpdate(() => new Date())
});
