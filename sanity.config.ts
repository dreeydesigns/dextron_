import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  basePath: '/studio',
  name: 'dextron-enterprise-studio',
  title: 'Dextron Enterprise Studio',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
