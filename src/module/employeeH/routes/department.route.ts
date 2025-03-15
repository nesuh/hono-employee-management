// src/routes/employeeRoutes.ts
import { Hono } from 'hono';
import { DepartmentController } from '../controller/department.controller';


const departmentRoutes = new Hono();

departmentRoutes.post('/departments', DepartmentController.createDepartment);
departmentRoutes.get('/departments', DepartmentController.getDepartments);
departmentRoutes.get('/departments/:id', DepartmentController.getDepartmentById);
departmentRoutes.put('/departments/:id', DepartmentController.updateDepartment);
departmentRoutes.delete('/departments/:id', DepartmentController.deleteDepartment);


export default departmentRoutes;