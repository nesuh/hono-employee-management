import { db } from "../../../db/drizzle";
import { employees } from "../../../db/schema";
import {  CreateEmployeeDtoType, UpdateEmployeeDtoType,  } from '../dtos/employee.dto';
import { eq } from 'drizzle-orm';
export class EmployeeService {

 static  async createEmployee(data: CreateEmployeeDtoType) {
    const [newEmployee] = await db.insert(employees).values({
      name: data.name,
      position: data.position,
      departmentId: data.departmentId,
      teamId: data.teamId,
    }).returning();
    
    return newEmployee;
  }

 
  static async getEmployeeById(id: string) {
    const [employee] = await db.select().from(employees).where(eq(employees.id,id));
    return employee || null; 
  }

  
  static async getEmployees() {
    const employeesList = await db.select()
    .from(employees)
    return {
      count: employeesList.length,
      employees: employeesList,
    };
  }

 
  static async updateEmployee(id: string, data: UpdateEmployeeDtoType) {
    const [employee] = await db.update(employees).set(data).where(eq(employees.id,id)).returning();
    return employee || null; 
  }

 
  static async deleteEmployee(id: string) {
    const [employee] = await db
    .delete(employees)
    .where(eq(employees.id,id))
    .returning();
    return employee || null; 
  }
}
