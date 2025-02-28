import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/utils/mongodb";
import Contact from "@/models/Contact";

type Data = {
  success: boolean;
  message?: string;
  data?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    await connectDB();

    const { name, email, phone, owner } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    // Create new contact
    // @ts-ignore
    const contact = await Contact.create({
      name,
      email,
      phone,
      owner,
    });

    return res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return res.status(500).json({
      success: false,
      message: "Error saving contact information",
    });
  }
}
