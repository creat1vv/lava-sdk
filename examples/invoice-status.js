import { LavaSDK } from 'lava-sdk'

const lava = new LavaSDK({
	shopId: 'your-shop-id',
	secretKey: 'your-secret-key',
})

async function getInvoiceStatus(orderId) {
	try {
		const status = await lava.invoice.status({ orderId })
		console.log('✅ Статус счёта:', status)
	} catch (err) {
		console.error('❌ Ошибка получения статуса:', err)
	}
}

getInvoiceStatus('order-2025')
