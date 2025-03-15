// src/dto/employee.dto.ts
import { z } from 'zod';

// Create Employee DTO
export const CreateEmployeeDto = z.object({
  name: z.string().min(1, 'Name is required'),
  position: z.string().min(1, 'Position is required'),
  departmentId: z.string().uuid().optional(),
  teamId: z.string().uuid().optional(),
});

// Update Employee DTO
export const UpdateEmployeeDto = CreateEmployeeDto;

// Types
export type CreateEmployeeDtoType = z.infer<typeof CreateEmployeeDto>;
export type UpdateEmployeeDtoType = z.infer<typeof UpdateEmployeeDto>;