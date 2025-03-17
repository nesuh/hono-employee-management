import { eq } from "drizzle-orm";
import { db } from "../../../db/drizzle";
import { positions } from "../../../db/schema";
import { CreatePositionDto, UpdatePositionDto } from "../dtos/position.dto";

export const PositionService = {
  async createPosition(data:CreatePositionDto) {
    const [newPosition] = await db.insert(positions).values({
      name: data.name,
      description: data.description,
      parentId: data.parentId,
    }).returning();
    return newPosition;
  },

  async getPositionById(id:number) {
    const [position] = await db.select().from(positions).where(eq(positions.id, id));
    return position || null;
  },

  async getPositions() {
    const positionsList = await db.select().from(positions);
    return {
      count: positionsList.length,
      positions: positionsList,
    };
  },

  async updatePosition(id:number, data:UpdatePositionDto) {
    const [position] = await db.update(positions).set(data).where(eq(positions.id, id)).returning();
    return position || null;
  },

  async deletePosition(id:number) {
    const children  = await db.select().from(positions).where(eq(positions.parentId, id));
    if (children.length > 0) {
      throw new Error("Cannot delete a parent position that has children");
    }
    const [position] = await db.delete(positions).where(eq(positions.id, id)).returning();
    return position || null;
  },


  async getAllPositionHierarchyTree() {

    const allPositions = await db.select().from(positions);
  
    const lookupMap = new Map<number, any>();
    for (const position of allPositions) {
      lookupMap.set(position.id, { ...position, children: [] });
    }
    const roots: any[] = [];
    for (const position of allPositions) {
      if (!position.parentId) {

        roots.push(lookupMap.get(position.id));
      } else {

        const parent = lookupMap.get(position.parentId);
        if (parent) {
          parent.children.push(lookupMap.get(position.id));
        }
      }
    }

    return roots;
  },

  async getAllChildrenOfPosition(positionId: number){
    const [parentPosition] = await db
      .select()
      .from(positions)
      .where(eq(positions.id, positionId));
  
    if (!parentPosition) {
      throw new Error(`Position with id ${positionId} not found`);
    }
  
    const children = await db
      .select()
      .from(positions)
      .where(eq(positions.parentId, positionId));
  
    return children;
  }
};