import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

const query = groq`
    *[_type == "getKnow"]
`

export default async function handler(
    req,
    res
) {
    const informations  = await sanityClient.fetch(query)
    res.status(200).json({ informations })
}