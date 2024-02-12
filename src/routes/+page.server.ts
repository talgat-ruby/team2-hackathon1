import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
    name: z.string(),
    // name: z.string().default('Hello world!'),
    email: z.string().email(),
    phone: z.string(),
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
        console.log(form);

        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // TODO: Do something with the validated form.data

        // Yep, return { form } here too
        return { form };
    }
};