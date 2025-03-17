 // Adjust the import path as needed

import { db } from "../../db/drizzle";
import { positions } from "../../db/schema";
import { samplePositions } from "./sample-data";

async function seedDatabase() {
  try {
    // Insert sample positions into the database
    await db.insert(positions).values(samplePositions);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

// Run the seed script
seedDatabase();