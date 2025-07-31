import { LavaSDK } from 'lava-sdk'

const lava = new LavaSDK({
	shopId: 'your-shop-id',
	secretKey: 'your-secret-key',
})

async function main() {
	try {
		const invoice = await lava.invoice.create({
			sum: 250,
			orderId: 'order-2025',
			successUrl: 'https://yourapp.com/payment-success',
			failUrl: 'https://yourapp.com/payment-failed',
			hookUrl: 'https://yourapp.com/hook',
			comment: 'Покупка лицензии майнкрафт',
			customFields: {
				licenseType: 'minecraft-premium',
			},
		})

		console.log('✅ Счёт успешно создан:', invoice)
	} catch (err) {
		console.error('❌ Ошибка при создании счёта:', err)
	}
}

main()
