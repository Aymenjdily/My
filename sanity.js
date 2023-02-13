import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url"

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    apiVersion : "2022-02-11",
    useCdn : process.env.NODE_ENV === "production"
};

export default config

export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)