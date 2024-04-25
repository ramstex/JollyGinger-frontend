import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    modules: ['@nuxt/ui'],

    components: [
        {
            path: '~/components/shared',
            pathPrefix: false,
        },

        {
            path: '~/components/widgets',
            pathPrefix: false,
        },
    ]
});
