// Generated file. DO NOT MODIFY IT BY HAND.

export interface Payload {
  /**
   * The ID of the conversion action associated with this conversion. To find the Conversion Action ID, click on your conversion in Google Ads and get the value for ctId in the URL. For example, if the URL is https://ads.google.com/aw/conversions/detail?ocid=00000000&ctId=576882000, your Conversion Action ID is 576882000.
   */
  conversion_action: string
  /**
   * The Google click ID (gclid) associated with this conversion.
   */
  gclid?: string
  /**
   * The click identifier for clicks associated with app conversions and originating from iOS devices starting with iOS14.
   */
  gbraid?: string
  /**
   * The click identifier for clicks associated with web conversions and originating from iOS devices starting with iOS14.
   */
  wbraid?: string
  /**
   * The date time at which the conversion occurred. Must be after the click time. The timezone must be specified. The format is "yyyy-mm-dd hh:mm:ss+|-hh:mm", e.g. "2019-01-01 12:32:45-08:00".
   */
  conversion_timestamp: string
  /**
   * Email address of the individual who triggered the conversion event. Segment will hash this value before sending to Google.
   */
  email_address?: string
  /**
   * Phone number of the individual who triggered the conversion event, in E.164 standard format, e.g. +14150000000. Segment will hash this value before sending to Google.
   */
  phone_number?: string
  /**
   * The order ID associated with the conversion. An order id can only be used for one conversion per conversion action.
   */
  order_id?: string
  /**
   * The value of the conversion for the advertiser.
   */
  value?: number
  /**
   * Currency associated with the conversion value. This is the ISO 4217 3-character currency code.
   */
  currency?: string
  /**
   * The environment this conversion was recorded on. e.g. App or Web.
   */
  conversion_environment?: string
  /**
   * The ID of the Merchant Center account where the items are uploaded.
   */
  merchant_id?: string
  /**
   * The ISO 3166 two-character region code of the Merchant Center feed where the items are uploaded.
   */
  merchant_country_code?: string
  /**
   * The ISO 639-1 language code of the Merchant Center feed where the items are uploaded.
   */
  merchant_language_code?: string
  /**
   * Sum of all transaction-level discounts, such as free shipping and coupon discounts for the whole cart.
   */
  local_cost?: number & string
  /**
   * Data of the items purchased.
   */
  items?: {
    /**
     * The ID of the item sold.
     */
    product_id?: string
    /**
     * Number of items sold.
     */
    quantity?: number
    /**
     * Unit price excluding tax, shipping, and any transaction level discounts.
     */
    price?: number
  }[]
  /**
   * The custom variables associated with this conversion. See Google’s documentation on how to create custom conversion variables.
   */
  custom_variables?: {
    [k: string]: unknown
  }
}