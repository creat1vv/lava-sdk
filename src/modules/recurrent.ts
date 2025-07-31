import type { AxiosInstance } from 'axios'
import type {
	ConsumerCreateRequest,
	ConsumerCreateResponse,
	RecurrentErrorResponse,
	RecurrentProductListResponse,
	SubscriptionOffsetNextPayTimeRequest,
	SubscriptionOffsetNextPayTimeResponse,
	SubscriptionStatusRequest,
	SubscriptionStatusResponse,
	SubscriptionSubscribeRequest,
	SubscriptionSubscribeResponse,
	SubscriptionUnsubscribeRequest,
	SubscriptionUnsubscribeResponse,
} from '../types/recurrent.types'
import { generateSignature } from '../utils/signature'

export function createRecurrentModule(
	axios: AxiosInstance,
	shopId: string,
	secretKey: string
) {
	return {
		async getProducts(): Promise<
			RecurrentProductListResponse | RecurrentErrorResponse
		> {
			const payload = { shopId }
			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/recurrent/product/list', payload, {
					headers: { Signature: signature },
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async consumerCreate(
			data: ConsumerCreateRequest
		): Promise<ConsumerCreateResponse | RecurrentErrorResponse> {
			const payload = {
				...data,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post('/recurrent/consumer/create', payload, {
					headers: { Signature: signature },
				})
				return res.data
			} catch (error: any) {
				if (error.response?.data) return error.response.data
				throw error
			}
		},

		async subscriptionSubscribe(
			data: SubscriptionSubscribeRequest
		): Promise<SubscriptionSubscribeResponse | RecurrentErrorResponse> {
			const payload = { ...data, shopId }
			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post(
					'/recurrent/subscription/subscribe',
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

		async subscriptionStatus(
			params: SubscriptionStatusRequest
		): Promise<SubscriptionStatusResponse | RecurrentErrorResponse> {
			if (!params.subscriptionId && !params.orderId) {
				throw new Error('subscriptionId или orderId обязателен')
			}

			const payload = {
				...params,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post(
					'/recurrent/subscription/status',
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

		async offsetNextPayTime(
			params: SubscriptionOffsetNextPayTimeRequest
		): Promise<SubscriptionOffsetNextPayTimeResponse | RecurrentErrorResponse> {
			if (!params.subscriptionId && !params.orderId) {
				throw new Error('subscriptionId или orderId обязателен')
			}
			if (!params.days) {
				throw new Error('days обязателен')
			}

			const payload = {
				...params,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post(
					'/recurrent/subscription/offset-next-pay-time',
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

		async unsubscribe(
			params: SubscriptionUnsubscribeRequest
		): Promise<SubscriptionUnsubscribeResponse | RecurrentErrorResponse> {
			if (!params.subscriptionId && !params.orderId) {
				throw new Error('subscriptionId или orderId обязателен')
			}

			const payload = {
				...params,
				shopId,
			}

			const signature = generateSignature(secretKey, payload)

			try {
				const res = await axios.post(
					'/recurrent/subscription/unsubscribe',
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
