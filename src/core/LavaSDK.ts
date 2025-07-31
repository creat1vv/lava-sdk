import axios, { type AxiosInstance } from 'axios'
import * as Invoice from '../modules/invoice'
import * as Payoff from '../modules/payoff'
import * as Recurrent from '../modules/recurrent'
import * as Shop from '../modules/shop'

export interface LavaSDKOptions {
	shopId: string
	secretKey: string
	baseUrl?: string
}

export class LavaSDK {
	private axios: AxiosInstance
	private shopId: string
	private secretKey: string

	public invoice: ReturnType<typeof Invoice.createInvoiceModule>
	public shop: ReturnType<typeof Shop.createShopModule>
	public payoff: ReturnType<typeof Payoff.createPayoffModule>
	public recurrent: ReturnType<typeof Recurrent.createRecurrentModule>

	constructor({
		shopId,
		secretKey,
		baseUrl = 'https://api.lava.ru/business',
	}: LavaSDKOptions) {
		this.shopId = shopId
		this.secretKey = secretKey

		this.axios = axios.create({
			baseURL: baseUrl,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})

		this.invoice = Invoice.createInvoiceModule(
			this.axios,
			this.shopId,
			this.secretKey
		)

		this.shop = Shop.createShopModule(this.axios, this.shopId, this.secretKey)

		this.payoff = Payoff.createPayoffModule(
			this.axios,
			this.shopId,
			this.secretKey
		)

		this.recurrent = Recurrent.createRecurrentModule(
			this.axios,
			this.shopId,
			this.secretKey
		)
	}
}
