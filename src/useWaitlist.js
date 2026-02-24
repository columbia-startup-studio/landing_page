import { useState } from 'react'

export default function useWaitlist() {
    const [status, setStatus] = useState('idle') // idle | submitting | success | error

    async function submit(email) {
        setStatus('submitting')
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })
            if (!res.ok) throw new Error('Failed')
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    return { status, submit }
}
