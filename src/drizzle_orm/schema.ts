import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const hackathons = pgTable('hackathons', {
  id: serial('id').primaryKey(),
  createdAt: timestamp("created_at"),
  title: text('title'),
  idea: varchar('idea', { length: 5000 }),
});
