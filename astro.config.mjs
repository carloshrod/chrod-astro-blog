import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    image(),
    mdx(),
    sitemap(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "src/pages/blog",
            create: true,
            delete: true,
            fields: [
              {
                label: "Layout",
                name: "layout",
                widget: "hidden",
                default: "../../layouts/BlogPost.astro",
              },
              { label: "Title", name: "title", widget: "string" },
              { label: "Description", name: "description", widget: "string" },
              {
                label: "Publish Date",
                name: "publishDate",
                widget: "datetime",
              },
              { label: "Hero Image", name: "heroImage", widget: "image" },
              { label: "Body", name: "body", widget: "markdown" },
            ],
          },
        ],
      },
    }),
  ],
});
