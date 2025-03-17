import { Context } from "hono";
import { CreatePositionDto, UpdatePositionDto } from "../dtos/position.dto";
import { PositionService } from "../service/position.service";

export class PositionController {
  public static async createPosition(c: Context) {
    const data = await c.req.json();
    const validatedData = CreatePositionDto.parse(data); // Validate input
    const position = await PositionService.createPosition(validatedData);
    return c.json(position, 201);
  }

  public static async getAllPositions(c: Context) {
    const positions = await PositionService.getPositions();
    return c.json(positions);
  }

  public static async getPositionById(c: Context) {
    const id = c.req.param('id');
    const position = await PositionService.getPositionById(id);
    return position ? c.json(position) : c.json({ message: 'Position not found' }, 404);
  }

  public static async updatePosition(c: Context) {
    try {
      const id = c.req.param('id');
      const data = await c.req.json();
      const validatedData = UpdatePositionDto.parse(data); 
      const position = await PositionService.updatePosition(id, validatedData);
      return position
        ? c.json(position) 
        : c.json({ message: 'Position not found' }, 404);
    } catch (error) {
      console.error('Error updating position:', error);
      return c.json({ message: 'Failed to update position' }, 500);
    }
}

public static async deletePosition(c: Context) {
  const id = c.req.param('id');
  const position = await PositionService.deletePosition(id);
  return position ? c.json(position) : c.json({ message: 'Position not found' }, 404);
}

public static async getAllPositionHierarchyTree(c: Context) {
    const allPositions=await PositionService.getAllPositionHierarchyTree();
    return c.json(allPositions);
}

public static async getAllChildrenOfPosition(c: Context) {
    const id = c.req.param('id');
    const children=await PositionService.getAllChildrenOfPosition(id);
    return c.json(children);
}
}