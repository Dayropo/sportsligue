import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./sanity/schemas"
import { myTheme } from "./theme"
import StudioNavbar from "./src/components/StudioNavbar"
import StudioLogo from "./src/components/StudioLogo"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

const config = defineConfig({
  name: "sportsligue",
  title: "Sportsligue",
  projectId,
  dataset,
  apiVersion,
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
  studio: {
    components: {
      logo: StudioLogo,
      navbar: StudioNavbar,
    },
  },
})

export default config
