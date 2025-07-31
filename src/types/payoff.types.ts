export type PayoffService = 'lava_payoff' | 'qiwi_payoff' | 'card_payoff'

export type CheckWalletService =
	| 'card_payoff'
	| 'qiwi_payoff'
	| 'lava_payoff'
	| 'steam_payoff'

export interface CreatePayoffRequest {
	amount: number
	orderId: string
	service: PayoffService
	walletTo?: string
	subtract?: 0 | 1
	hookUrl?: string
}

export interface CreatePayoffResponse {
	data: {
		payoff_id: string
		payoff_status: 'created' | 'success' | 'rejected'
	}
	status: number
	status_check: boolean
}

export interface PayoffErrorResponse {
	data: null
	error: Record<string, string[]>
	status: number
	status_check: false
}

export interface PayoffInfoRequest {
	orderId?: string
	payoffId?: string
}

export interface PayoffInfoResponse {
	data: {
		id: string
		orderId: string | null
		status: 'created' | 'success' | 'rejected'
		wallet: string
		service: PayoffService
		amountPay: number
		commission: number
		amountReceive: number
		tryCount: number
		errorMessage: string | null
	}
	status: number
	status_check: boolean
}

export interface PayoffInfoErrorResponse {
	data: null
	error: string
	status: number
	status_check: false
}

export interface PayoffTariff {
	percent: number
	min_sum: number
	max_sum: number
	service: PayoffService
	fix: number
	title: string
	currency: string
}

export interface GetPayoffTariffsResponse {
	data: {
		tariffs: PayoffTariff[]
	}
	status: number
	status_check: boolean
}

export interface GetPayoffTariffsError {
	status: 'error'
	message: string
}

export interface CheckWalletRequest {
	walletTo: string
	service: CheckWalletService
}

export interface CheckWalletSuccessResponse {
	data: {
		status: boolean
	}
	status: number
	status_check: boolean
}

export interface CheckWalletErrorResponse {
	data: null
	error: Record<string, string[]>
	status: number
	status_check: false
}
