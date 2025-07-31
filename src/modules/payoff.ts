import type { AxiosInstance } from 'axios'
import type {
	CheckWalletErrorResponse,
	CheckWalletRequest,
	CheckWalletSuccessResponse,
	CreatePayoffRequest,
	CreatePayoffResponse,
	GetPayoffTariffsError,
	GetPayoffTariffsResponse,
	PayoffErrorResponse,
	PayoffInfoErrorResponse,
	PayoffInfoRequest,
	PayoffInfoResponse,
} from '../types/payoff.types'
import { generateSignature } from '../utils/signature'

export function createPayoffModule(
	axios: AxiosInstance,
	shopId: string,
	secretKey: string
) {
	return {
		async create(
			data: CreatePayoffRequest
		): Promise<CreatePayoffResponse | PayoffErrorResponse> {
			const payload = {
				...data,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/payoff/create', payload, {
					headers: { Signature: signature },
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async info(
			data: PayoffInfoRequest
		): Promise<PayoffInfoResponse | PayoffInfoErrorResponse> {
			const payload = {
				...data,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/payoff/info', payload, {
					headers: { Signature: signature },
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async getTariffs(): Promise<
			GetPayoffTariffsResponse | GetPayoffTariffsError
		> {
			const payload = { shopId }
			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/payoff/get-tariffs', payload, {
					headers: { Signature: signature },
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async checkWallet(
			data: CheckWalletRequest
		): Promise<CheckWalletSuccessResponse | CheckWalletErrorResponse> {
			const payload = {
				...data,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/payoff/check-wallet', payload, {
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
