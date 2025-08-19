import { ZodType } from "zod";

export class ValidationService {
  public static validate<T>(zodType: ZodType<T>, data: T): T {
    return zodType.parse(data);
  }
}
