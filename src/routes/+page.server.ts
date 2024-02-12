import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, { message: 'Name is required' })
      .trim(),
    // name: z.string().default('Hello world!'),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Email must be a valid email address' }),
    phone: z.string({required_error: 'Phone is required'}),
    plan: z.string(),
    period: z.string(),
    addOns: z.object({
        onlineService: z.boolean().optional(),
        largerStorage: z.boolean().optional(),
        customizableProfile: z.boolean().optional(),
    })
});

export const load = (async () => {
    const form = await superValidate(zod(schema));

    // Always return { form } in load functions
    return { form };
});

import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(schema));

        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // TODO: Do something with the validated form.data
        try {
            const url = 'http://localhost:8081/api/v1/forms';
            // Use the fetch API to send a POST request
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form.data), // Send the form data as JSON
            });

            // Check if the request was successful
            if (!response.ok) {
                const body = await response.json();
                console.log("FORM: ",form)
                console.log("BODY: ",body);
                // Handle server errors or invalid responses
                return fail(response.status, { error: body.error, form });
            }

            // Optionally, process the response data


            // Return success response or redirect, etc.
            return { success: true, form};
        } catch (error) {
            console.error('Form submission error:', error);
            // Handle errors, such as network issues
            // Return an error state or message to the user
            if(error instanceof Error){
                return fail(500, { error: error.message,form });
            }

        }

    }
};