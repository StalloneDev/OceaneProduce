import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Here you would typically send an email notification
      // For now, we'll just log the inquiry
      console.log("New contact inquiry received:", inquiry);
      
      res.json({ 
        success: true, 
        message: "Your inquiry has been submitted successfully. We will contact you soon!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while submitting your inquiry" 
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
