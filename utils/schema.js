import { serial, varchar, text } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResponse: text('jsonMockResponse', { length: 255 }).notNull(),
    jobPosition: varchar('jobPosition', { length: 255 }).notNull(),
    jobDescription: varchar('jobDescription', { length: 255 }).notNull(),
    jobExperience: varchar('jobExperience', { length: 255 }).notNull(),
    createdBy: varchar('createdBy', { length: 255 }).notNull(),
    createdAt: varchar('createdAt', { length: 255 }).notNull(),
    mockId: varchar('mockId', { length: 255 }).notNull()
});
