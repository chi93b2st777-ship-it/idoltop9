import { createInsertSchema } from "drizzle-zod";
import { jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const syncSessionsTable = pgTable("sync_sessions", {
  id: text("id").primaryKey(),
  data: jsonb("data").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const insertSyncSessionSchema = createInsertSchema(syncSessionsTable).omit({
  updatedAt: true,
});
export type InsertSyncSession = z.infer<typeof insertSyncSessionSchema>;
export type SyncSession = typeof syncSessionsTable.$inferSelect;