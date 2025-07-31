import type { AxiosInstance } from 'axios'
import type {
	AvailableTariffsResponse,
	CreateInvoiceRequest,
	CreateInvoiceResponse,
	InvoiceStatusRequest,
	InvoiceStatusResponse,
	LavaErrorResponse,
	LavaErrorStringResponse,
	TariffErrorResponse,
} from '../types/invoice.types'
import { generateSignature } from '../utils/signature'

export function createInvoiceModule(
	axios: AxiosInstance,
	shopId: string,
	secretKey: string
) {
	return {
		async create(
			data: CreateInvoiceRequest
		): Promise<CreateInvoiceResponse | LavaErrorResponse> {
			const payload = {
				...data,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/invoice/create', payload, {
					headers: {
						Signature: signature,
					},
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async status(
			data: InvoiceStatusRequest
		): Promise<InvoiceStatusResponse | LavaErrorStringResponse> {
			const payload = {
				...data,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/invoice/status', payload, {
					headers: {
						Signature: signature,
					},
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async getAvailableTariffs(): Promise<
			AvailableTariffsResponse | TariffErrorResponse
		> {
			const payload = { shopId }
			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post(
					'/invoice/get-available-tariffs',
					payload,
					{
						headers: { Signature: signature },
					}
				)
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},
	}
}
