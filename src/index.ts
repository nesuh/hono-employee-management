import { Hono } from 'hono';
import employeeRoutes from './module/employeeH/routes/employee.route';
import departmentRoutes from './module/employeeH/routes/department.route';
import positionRoutes from './module/employeeH/routes/position.routes';

const app = new Hono();


app.get('/', (c) => {
  return c.text('Employee Hierarchy API is running!');
});

app.route('/api/employee',employeeRoutes)
app.route('/api/department',departmentRoutes)
app.route('/app',positionRoutes)
export default app;