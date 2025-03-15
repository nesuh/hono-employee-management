
import { eq } from "drizzle-orm";
import { db } from "../../../db/drizzle";
import { departments, employees } from "../../../db/schema";
import { CreateDepartmentDtoType, UpdateDepartmentDtoType } from "../dtos/Department.dto";

export class DepartemntService {
    static async createDepartment(data:CreateDepartmentDtoType) {
      const [newDepartment]=await db.
      insert(departments)
      .values(
   { name:data.name,} 

     )
     .returning();
   return newDepartment;
       
}
 static async getDepartmentById(id:string) {
   const [department]=await db.select().from(departments).where(eq(departments.id,id));
   return department || null; 
 }
 
static async getDepartments() {
  const departmentsList=await db.select().from(departments);
  return {
    count: departmentsList.length,
    departments: departmentsList,
  };

}
  static async updateDepartments(id:string,data:UpdateDepartmentDtoType){
  const [updateData]=await db.update(departments).set(data).where(eq(departments.id,id)).returning();
  return updateData || null;
  }

  static async deleteDepartment(id:string) {
  const [department]=await db
  .delete(departments)
  .where(eq(departments.id,id))
  .returning();
  return department || null;
}

}