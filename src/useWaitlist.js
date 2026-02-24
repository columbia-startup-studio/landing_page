import { useState } from 'react'

const ENDPOINT = import.meta.env.VITE_WAITLIST_URL

export default function useWaitlist() {
    const [status, setStatus] = useState('idle') // idle | submitting | success | error

    async function submit(email) {
        setStatus('submitting')
        try {
            if (!ENDPOINT) throw new Error('No endpoint')
            await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, ts: new Date().toISOString() }),
            })
            setStatus('success')
        } catch {
            // If no endpoint configured, just fake success for POC
            if (!ENDPOINT) {
                setStatus('success')
                return
            }
            setStatus('error')
        }
    }

    return { status, submit }
}
