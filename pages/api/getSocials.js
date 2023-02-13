import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

const query = groq`
    *[_type == "socials"]
`

export default async function handler(
    req,
    res
) {
    const socials  = await sanityClient.fetch(query)
    res.status(200).json({ socials })
}