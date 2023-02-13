import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

const query = groq`
    *[_type == "clients"]
`

export default async function handler(
    req,
    res
) {
    const clients  = await sanityClient.fetch(query)
    res.status(200).json({ clients })
}