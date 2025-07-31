import type { AxiosInstance } from 'axios'
import type {
	ShopBalanceResponse,
	ShopErrorResponse,
} from '../types/shop.types'
import { generateSignature } from '../utils/signature'

export function createShopModule(
	axios: AxiosInstance,
	shopId: string,
	secretKey: string
) {
	return {
		async getBalance(): Promise<ShopBalanceResponse | ShopErrorResponse> {
			const payload = { shopId }
			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/shop/get-balance', payload, {
					headers: { Signature: signature },
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},
	}
}
