// {create a schema for feeedback}
import { z } from 'zod';

export const FormSubmissionSchema = z.object({
    fullName: z.string().min(3).max(100),
    email: z.string().email(),
    phoneNumber: z.string().min(10).max(10),
    age: z.number(),
    gender: z.string(),
    twitchChannelId: z.string().min(3).max(100),
})