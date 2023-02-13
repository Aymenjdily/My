import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

const query = groq`
    *[_type == "projects"]
`

export default async function handler(
    req,
    res
) {
    const projects  = await sanityClient.fetch(query)
    res.status(200).json({ projects })
}