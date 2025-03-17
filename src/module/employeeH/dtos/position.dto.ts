// src/dto/employee.dto.ts
import { z } from 'zod';

// Create Employee DTO
export const CreatePositionDto = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  parentId: z.number().optional(),
});

// Update Employee DTO
export const UpdatePositionDto = CreatePositionDto;

// Types
export type CreatePositionDto = z.infer<typeof CreatePositionDto>;
export type UpdatePositionDto = z.infer<typeof UpdatePositionDto>;