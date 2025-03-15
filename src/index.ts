import { Hono } from 'hono';
import employeeRoutes from './module/employeeH/routes/employee.route';
import departmentRoutes from './module/employeeH/routes/department.route';

const app = new Hono();


app.get('/', (c) => {
  return c.text('Employee Hierarchy API is running!');
});

app.route('/api/employee',employeeRoutes)
app.route('api/department',departmentRoutes)
export default app;