<template>
    <NuxtLink
        class="logo"
        :to="to"
        :target="target"
    >
        <NuxtImg
            class="logo__image"
            :src="src"
            :alt="alt"
            :title="title"
        />
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { ILogoProps } from '~/components/shared/Logo/type';

const props = withDefaults(defineProps<ILogoProps>(), {
    to: '/',
    target: '',
    src: 'logo-black.svg',
    alt: '',
    title: '',
});

const { to, src, alt, title } = props;
</script>
