import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-norbertbla.vercel.app/',
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), mdx(), robotsTxt()]
});