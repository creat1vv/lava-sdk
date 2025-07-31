import crypto from 'crypto'

export function generateSignature(secretKey: string, payload: object): string {
	const json = JSON.stringify(payload)
	return crypto.createHmac('sha256', secretKey).update(json).digest('hex')
}
