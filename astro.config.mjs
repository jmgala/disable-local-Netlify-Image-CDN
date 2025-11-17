// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    image: {
        domains: ["githubusercontent.com"],
    },
    adapter: netlify({
        imageCDN: false,
        devFeatures: {
            environmentVariables: true,
            images: false,
        },
    }),
});