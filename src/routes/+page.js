
import { error } from '@sveltejs/kit';

import createClient from '$lib/utils/prismicio';

export async function load({ fetch, request }) {
    const UID = 'spanish-migrant';
    const client = createClient({ fetch, request });
    const document = await client.getByUID('story', UID);

    if (document) {
        return { document:document.data };
    }

    error(404, 'Not found');
}