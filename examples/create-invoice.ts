import { LavaSDK } from 'lava-sdk'

const lava = new LavaSDK({
	shopId: 'your-shop-id',
	secretKey: 'your-secret-key',
})

async function main() {
	try {
		const invoice = await lava.invoice.create({
			sum: 1500,
			orderId: 'order-001',
			successUrl: 'https://yourapp.com/success',
			failUrl: 'https://yourapp.com/fail',
			hookUrl: 'https://yourapp.com/webhook',
			comment: 'Оплата товара #001',
			expires: 15 * 60, // Инвойс действителен 15 минут
			customerEmail: 'user@example.com',
			customFields: {
				userId: '1234',
			},
		})

		console.log('✅ Счёт успешно создан:')
		console.log(invoice)
	} catch (err) {
		console.error('❌ Ошибка при создании счёта:')
		console.error(err)
	}
}

main()
