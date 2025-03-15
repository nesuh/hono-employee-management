// src/dto/department.dto.ts
import { z } from 'zod';

export const CreateDepartmentDto = z.object({
  name: z.string().min(1, 'Name is required'),
});

export const UpdateDepartmentDto = CreateDepartmentDto.partial();

export type CreateDepartmentDtoType = z.infer<typeof CreateDepartmentDto>;
export type UpdateDepartmentDtoType = z.infer<typeof UpdateDepartmentDto>;