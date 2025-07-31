export interface CreateInvoiceRequest {
	sum: number
	orderId: string
	hookUrl?: string
	failUrl?: string
	successUrl?: string
	expire?: number
	customFields?: string
	comment?: string
	includeService?: string[]
	excludeService?: string[]
}

export interface CreateInvoiceResponse {
	data: {
		id: string
		amount: number
		expired: string
		status: number
		shop_id: string
		url: string
		comment: string | null
		fail_url: string
		success_url: string
		hook_url: string
		custom_fields: string
		merchantName: string
		exclude_service: string[] | null
		include_service: string[] | null
	}
	status: number
	status_check: boolean
}

export interface LavaErrorResponse {
	data: null
	error: Record<string, string[]>
	status: number
	status_check: false
}

export interface InvoiceStatusRequest {
	orderId?: string
	invoiceId?: string
}

export interface InvoiceStatusResponse {
	data: {
		status: string
		error_message: string | null
		id: string
		shop_id: string
		amount: number
		expire: string
		order_id: string
		fail_url: string
		success_url: string
		hook_url: string
		custom_fields: string
		include_service: string[]
	}
	status: number
	status_check: boolean
}

export interface LavaErrorStringResponse {
	data: null
	error: string
	status: number
	status_check: false
}

export interface AvailableTariff {
	percent: number
	user_percent: number
	shop_percent: number
	service_name: string
	service_id: string
	status: number
}

export interface AvailableTariffsResponse {
	data: AvailableTariff[]
	status: number
	status_check: boolean
}

export interface TariffErrorResponse {
	status: 'error'
	message: string
}
