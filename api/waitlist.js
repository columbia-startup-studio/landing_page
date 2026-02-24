import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body
        if (!email) return res.status(400).json({ error: 'email required' })
        await redis.lpush('waitlist', JSON.stringify({ email, ts: new Date().toISOString() }))
        return res.status(200).json({ ok: true })
    }

    if (req.method === 'GET') {
        const emails = await redis.lrange('waitlist', 0, -1)
        return res.status(200).json(emails)
    }

    return res.status(405).json({ error: 'method not allowed' })
}
