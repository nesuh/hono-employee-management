import { Context } from 'hono';
import { EmployeeService } from '../service/employee.service';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dtos/employee.dto';

export class EmployeeController {
  public static async createEmployee(c: Context) {
    const data = await c.req.json();
    const validatedData = CreateEmployeeDto.parse(data); // Validate input
    const employee = await EmployeeService.createEmployee(validatedData);
    return c.json(employee, 201);
  }

  public static async getAllEmployees(c: Context) {
    const employees = await EmployeeService.getEmployees();
    return c.json(employees);
  }

  public static async getEmployeeById(c: Context) {
    const id = c.req.param('id');
    const employee = await EmployeeService.getEmployeeById(id);
    return employee ? c.json(employee) : c.json({ message: 'Employee not found' }, 404);
  }

    public static async updateEmployee(c: Context) {
      try {
        const id = c.req.param('id');
        const data = await c.req.json();
        const validatedData = UpdateEmployeeDto.parse(data); 
        const employee = await EmployeeService.updateEmployee(id, validatedData);
        return employee
          ? c.json(employee) 
          : c.json({ message: 'Employee not found' }, 404);
      } catch (error) {
        console.error('Error updating employee:', error);
        return c.json({ message: 'Failed to update employee' }, 500);
      }
    }

  public static async deleteEmployee(c: Context) {
    const id = c.req.param('id');
    const employee = await EmployeeService.deleteEmployee(id);
    return employee ? c.json(employee) : c.json({ message: 'Employee not found' }, 404);
  }
}