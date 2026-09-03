import { pgTable, text, integer, timestamp, uuid } from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: uuid("id").primaryKey().defaultRandom(),
  phone: text("phone").notNull().unique(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  country: text("country").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const enrollments = pgTable("enrollments", {
  id: uuid("id").primaryKey().defaultRandom(),
  studentId: uuid("student_id").references(() => students.id),
  courseSlug: text("course_slug").notNull(),
  courseTitle: text("course_title").notNull(),
  priceUSD: integer("price_usd").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  country: text("country").notNull(),
  status: text("status").notNull().default("pending"), // pending | paid | cancelled
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  validatedAt: timestamp("validated_at", { withTimezone: true }),
});

export const enterpriseLeads = pgTable("enterprise_leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  company: text("company").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  teamSize: text("team_size").notNull(),
  budget: text("budget"),
  objective: text("objective").notNull(),
  timeline: text("timeline"),
  status: text("status").notNull().default("new"), // new | contacted | closed
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const universityLeads = pgTable("university_leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  university: text("university").notNull(),
  faculty: text("faculty"),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  studentCount: text("student_count").notNull(),
  period: text("period"),
  objective: text("objective").notNull(),
  status: text("status").notNull().default("new"), // new | contacted | closed
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
