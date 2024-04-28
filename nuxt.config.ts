import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
    modules: [
        '@nuxt/ui',                 // Библиотека Ui-компонентов
        '@nuxt/image',              // Модуль для работы с изображениями
    ],

    devtools: {
        enabled: true,
    },

    components: [
        {
            path: '~/components/shared',
            pathPrefix: false,
        },

        {
            path: '~/components/widgets',
            pathPrefix: false,
        },
    ],

    image: {
        dir: 'assets/images',
    },
});
