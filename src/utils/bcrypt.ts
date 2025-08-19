import bcrypt from "bcrypt";

export async function checkHashedPassword(
  password: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

export async function hashingPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 10);
}
