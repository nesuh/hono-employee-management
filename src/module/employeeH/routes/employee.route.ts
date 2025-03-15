// src/routes/employeeRoutes.ts
import { Hono } from 'hono';
import { EmployeeController } from '../controller/employee.controller';


const employeeRoutes = new Hono();

employeeRoutes.post('/employees', EmployeeController.createEmployee);
employeeRoutes.get('/employees', EmployeeController.getAllEmployees);
employeeRoutes.get('/employees/:id', EmployeeController.getEmployeeById);
employeeRoutes.put('/employees/:id', EmployeeController.updateEmployee);
employeeRoutes.delete('/employees/:id', EmployeeController.deleteEmployee);

export default employeeRoutes;