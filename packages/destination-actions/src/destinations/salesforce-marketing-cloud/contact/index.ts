import type { ActionDefinition } from '@segment/actions-core'
import type { Settings } from '../generated-types'
import { contactKey } from '../sfmc-properties'
import type { Payload } from './generated-types'

const action: ActionDefinition<Settings, Payload> = {
  title: 'Create Contact',
  description: 'Create contacts in Salesforce Marketing Cloud.',
  defaultSubscription: 'type = "identify"',
  fields: {
    contactKey: { ...contactKey, required: true }
  },
  perform: (request, { settings, payload }) => {
    const requestUrl = `https://${settings.subdomain}.rest.marketingcloudapis.com/contacts/v1/contacts`
    return request(requestUrl, {
      method: 'post',
      json: {
        contactKey: payload.contactKey,
        attributeSets: []
      }
    })
  }
}

export default action