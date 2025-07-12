import { createRequest } from '@/shared/lib/api/createRequest'
import type { FormApi } from './types'

export const formApi: FormApi = {
    send: data =>
        createRequest({
            url: 'https://mailing.cryptoflats.io/send-email',
            method: 'POST',
            data,
        })
}