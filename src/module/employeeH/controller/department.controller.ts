import { Context } from 'hono';
import { DepartemntService } from '../service/department.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from '../dtos/Department.dto';


export class DepartmentController {
  public static async createDepartment(c: Context) {
    try {
      const data = await c.req.json();
      const validatedData = CreateDepartmentDto.parse(data); 
      const department = await DepartemntService.createDepartment(validatedData);
      return c.json(department, 201); 
    } catch (error) {
      console.error('Error creating department:', error);
      return c.json({ message: 'Failed to create department' }, 500);
    }
  }


  public static async getDepartments(c: Context) {
    try {
      const departments = await DepartemntService.getDepartments();
      return c.json(departments);
    } catch (error) {
      console.error('Error fetching departments:', error);
      return c.json({ message: 'Failed to fetch departments' }, 500);
    }
  }

  
  public static async getDepartmentById(c: Context) {
    try {
      const id = c.req.param('id');
      const department = await DepartemntService.getDepartmentById(id);
      return department
        ? c.json(department) 
        : c.json({ message: 'Department not found' }, 404);
    } catch (error) {
      console.error('Error fetching department:', error);
      return c.json({ message: 'Failed to fetch department' }, 500);
    }
  }

 
  public static async updateDepartment(c: Context) {
    try {
      const id = c.req.param('id');
      const data = await c.req.json();
      const validatedData = UpdateDepartmentDto.parse(data); 
      const department = await DepartemntService.updateDepartments(id, validatedData);
      return department
        ? c.json(department) 
        : c.json({ message: 'Department not found' }, 404);
    } catch (error) {
      console.error('Error updating department:', error);
      return c.json({ message: 'Failed to update department' }, 500);
    }
  }


  public static async deleteDepartment(c: Context) {
    try {
      const id = c.req.param('id');
      const department = await DepartemntService.deleteDepartment(id);
      return department
        ? c.json(department) 
        : c.json({ message: 'Department not found' }, 404); 
    } catch (error) {
      console.error('Error deleting department:', error);
      return c.json({ message: 'Failed to delete department' }, 500);
    }
  }
}