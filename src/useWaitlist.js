import { useState } from 'react'

const ENDPOINT = import.meta.env.VITE_GOOGLE_SHEETS_URL

export default function useWaitlist() {
    const [status, setStatus] = useState('idle') // idle | submitting | success | error

    async function submit(email) {
        setStatus('submitting')
        try {
            if (!ENDPOINT) {
                console.warn('VITE_GOOGLE_SHEETS_URL not set')
                setStatus('success')
                return
            }
            await fetch(ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({ email }),
            })
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    return { status, submit }
}
