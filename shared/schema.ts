import { z } from "zod";

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export interface User extends InsertUser {
  id: number;
}

export const insertContactInquirySchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  product: z.string().optional(),
  message: z.string(),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export interface ContactInquiry extends InsertContactInquiry {
  id: number;
  createdAt: Date;
}
