import { z } from "zod/v4";
export declare const syncSessionsTable: import("drizzle-orm/pg-core").PgTableWithColumns<{
    name: "sync_sessions";
    schema: undefined;
    columns: {
        id: import("drizzle-orm/pg-core").PgColumn<{
            name: "id";
            tableName: "sync_sessions";
            dataType: "string";
            columnType: "PgText";
            data: string;
            driverParam: string;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: true;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: [string, ...string[]];
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        data: import("drizzle-orm/pg-core").PgColumn<{
            name: "data";
            tableName: "sync_sessions";
            dataType: "json";
            columnType: "PgJsonb";
            data: unknown;
            driverParam: unknown;
            notNull: true;
            hasDefault: false;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
        updatedAt: import("drizzle-orm/pg-core").PgColumn<{
            name: "updated_at";
            tableName: "sync_sessions";
            dataType: "date";
            columnType: "PgTimestamp";
            data: Date;
            driverParam: string;
            notNull: true;
            hasDefault: true;
            isPrimaryKey: false;
            isAutoincrement: false;
            hasRuntimeDefault: false;
            enumValues: undefined;
            baseColumn: never;
            identity: undefined;
            generated: undefined;
        }, {}, {}>;
    };
    dialect: "pg";
}>;
export declare const insertSyncSessionSchema: z.ZodObject<{
    id: z.ZodString;
    data: z.ZodType<import("drizzle-zod").Json, unknown, z.core.$ZodTypeInternals<import("drizzle-zod").Json, unknown>>;
}, {
    out: {};
    in: {};
}>;
export type InsertSyncSession = z.infer<typeof insertSyncSessionSchema>;
export type SyncSession = typeof syncSessionsTable.$inferSelect;
//# sourceMappingURL=index.d.ts.map