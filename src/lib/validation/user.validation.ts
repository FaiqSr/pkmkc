import { ZodType, z } from "zod";

export default class UserValidation {
  static readonly LOGIN: ZodType = z.object({
    username: z.string().min(4),
    password: z.string().min(8),
  });

  static readonly REGISTER: ZodType = z.object({
    kode: z.string().min(4),
    username: z.string().min(4),
    password: z.string().min(8),
    nama: z.string().min(4).max(255),
    jabatan: z.string().min(4).max(255),
    role: z.enum(["ADMIN", "OPERASIONAL", "LAPANGAN", "PILOT"]),
  });
}
