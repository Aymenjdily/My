export const fetchClients = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getClients`)

    const data = await res.json()
    const clients = data.clients

    return clients
}