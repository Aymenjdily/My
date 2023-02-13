export const fetchGetToKnow = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getGetToKnow`)

    const data = await res.json()
    const informations = data.informations

    return informations
}