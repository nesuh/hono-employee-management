import { pgTable, uuid, varchar, text } from 'drizzle-orm/pg-core';

// Employees Table
export const employees = pgTable('employees', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  position: varchar('position', { length: 255 }).notNull(),
  departmentId: uuid('department_id').references(() => departments.id),
  teamId: uuid('team_id').references(() => teams.id),
});

// Departments Table
export const departments = pgTable('departments', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
});

// Projects Table
export const projects = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  departmentId: uuid('department_id').references(() => departments.id),
});

// Teams Table
export const teams = pgTable('teams', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  projectId: uuid('project_id').references(() => projects.id),
});

// Tasks Table
export const tasks = pgTable('tasks', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  assignedTo: uuid('assigned_to').references(() => employees.id),
  projectId: uuid('project_id').references(() => projects.id),
});