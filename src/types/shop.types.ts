export interface ShopBalanceResponse {
	data: {
		balance: number
		freeze_balance: number
	}
	status: number
	status_check: boolean
}

export interface ShopErrorResponse {
	status: 'error'
	message: string
}
