import { integer, text, boolean, timestamp,pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
    id: integer("id").primaryKey(),
    task: text("task").notNull(),
    done: boolean("done").default(false).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at")
        .notNull()
        .$onUpdate(() => new Date())
});
