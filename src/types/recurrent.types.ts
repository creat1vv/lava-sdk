export type SubscriptionPeriod =
	| 'one_month'
	| 'three_months'
	| 'six_months'
	| 'year'

export interface RecurrentProduct {
	id: string
	name: string
	price: number
	period: SubscriptionPeriod
	periodDays: number
	freeDays: number
	description: string
	shopId: string
	isActive: boolean
	activeCount: number
	inactiveCount: number
	subscribersCount: number
}

export interface RecurrentProductListResponse {
	data: RecurrentProduct | RecurrentProduct[]
	status: number
	status_check: boolean
}

export interface RecurrentErrorResponse {
	status: 'error'
	message: string
}

export interface ConsumerCreateRequest {
	name: string
	consumerId: string
	email: string
	phone: string
}

export interface ConsumerCreateResponse {
	data: {
		phone: string
		email: string
		consumerId: string
		shopId: string
	}
	status: number
	status_check: boolean
}

export interface RecurrentErrorResponse {
	status: 'error'
	message: string
}

export interface SubscriptionSubscribeRequest {
	productId: string
	consumerId: string
	orderId: string
}

export interface SubscriptionSubscribeResponse {
	data: {
		subscriptionId: string
		amount: number
		expired: string
		url: string
		comment: string
	}
	status: number
	status_check: boolean
}

export interface SubscriptionStatusRequest {
	subscriptionId?: string
	orderId?: string
}

export interface SubscriptionStatusResponse {
	data: {
		subscriptionId: string
		orderId: string
		consumerId: string
		shopId: string
		productId: string
		status: 'created' | 'suspended' | 'activated' | 'deactivated'
		amount: number
		activation_time?: string
		last_pay_time?: string
		next_pay_time?: string
		deactivation_time?: string
		deactivated_reason?: string
		payer_details?: string
	}
	status: number
	status_check: boolean
}

export interface RecurrentErrorResponse {
	status: 'error'
	message: string
}

export interface SubscriptionOffsetNextPayTimeRequest {
	subscriptionId?: string
	orderId?: string
	days: string
}

export interface SubscriptionOffsetNextPayTimeResponse {
	data: {
		next_pay_time: string
	}
	status: number
	status_check: boolean
}

export interface RecurrentErrorResponse {
	status: 'error'
	message: string
}

export interface SubscriptionUnsubscribeRequest {
	subscriptionId?: string
	orderId?: string
}

export interface SubscriptionUnsubscribeResponse {
	data: {
		unsubscribed: boolean
	}
	status: number
	status_check: boolean
}

export interface RecurrentErrorResponse {
	status: 'error'
	message: string
}
