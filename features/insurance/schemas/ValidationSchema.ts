import { z } from 'zod';

export const insuranceValidationSchema = z.object({
  documentType: z.enum(['DNI', 'CE']),
  documentNumber: z
    .string()
    .min(8, 'Debe tener al menos 8 dígitos')
    .regex(/^\d+$/, 'Solo se permiten números'),
  phoneNumber: z
    .string()
    .min(9, 'Debe tener 9 dígitos')
    .regex(/^\d+$/, 'Solo se permiten números'),
});

export type InsuranceValidationFormData = z.infer<typeof insuranceValidationSchema>;
