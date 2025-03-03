import { Request, Response } from 'express'
import { BaseHttpController, controller, httpPost } from 'inversify-express-utils'
import { inject } from 'inversify'
import TYPES from '../../Bootstrap/Types'
import { HttpServiceInterface } from '../../Service/Http/HttpServiceInterface'

@controller('/v1')
export class InvoicesController extends BaseHttpController {
  constructor(@inject(TYPES.HTTPService) private httpService: HttpServiceInterface) {
    super()
  }

  @httpPost('/invoices/send-latest', TYPES.SubscriptionTokenAuthMiddleware)
  async sendLatestInvoice(request: Request, response: Response): Promise<void> {
    await this.httpService.callPaymentsServer(request, response, 'api/pro_users/send-invoice', request.body)
  }
}
