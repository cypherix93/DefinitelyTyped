// Type definitions for Braintree-web 3.62
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
//                 Jason Buckner <https://github.com/jbuckner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { AmericanExpress } from './american-express';
import { ApplePay, ApplePaySession, ApplePayStatusCodes, ApplePayPayload } from './apple-pay';
import { Client, CreditCardInfo } from './client';
import { DataCollector } from './data-collector';
import { GooglePayment, GooglePaymentTokenizePayload } from './google-payment';
import { HostedFields, HostedFieldFieldOptions, HostedFieldsTokenizePayload, HostedFieldsStateObject } from './hosted-fields';
import { PayPal, PayPalTokenizePayload } from './paypal';
import { PayPalCheckout, PayPalCheckoutCreatePaymentOptions } from './paypal-checkout';
import { ThreeDSecure, ThreeDSecureVerifyPayload } from './three-d-secure';
import { UnionPay, UnionPayFetchCapabilitiesPayload, UnionPayEnrollPayload, UnionPayTokenizePayload } from './unionpay';
import { USBankAccount } from './us-bank-account';
import { Venmo, VenmoTokenizePayload } from './venmo';

export const americanExpress: AmericanExpress;
export const applePay: ApplePay;
export const client: Client;
export const dataCollector: DataCollector;
export const googlePayment: GooglePayment;
export const hostedFields: HostedFields;
export const paypal: PayPal;
export const paypalCheckout: PayPalCheckout;
export const threeDSecure: ThreeDSecure;
export const unionpay: UnionPay;
export const usBankAccount: USBankAccount;
export const venmo: Venmo;

/**
 * @description The current version of the SDK, i.e. `3.67.0`.
 */
export const VERSION: string;

export {
    AmericanExpress,
    ApplePay, ApplePaySession, ApplePayStatusCodes, ApplePayPayload,
    Client, CreditCardInfo,
    DataCollector,
    GooglePayment, GooglePaymentTokenizePayload,
    HostedFields, HostedFieldFieldOptions, HostedFieldsTokenizePayload, HostedFieldsStateObject,
    PayPal, PayPalTokenizePayload,
    PayPalCheckout, PayPalCheckoutCreatePaymentOptions,
    ThreeDSecure, ThreeDSecureVerifyPayload,
    UnionPay, UnionPayFetchCapabilitiesPayload, UnionPayEnrollPayload, UnionPayTokenizePayload,
    USBankAccount,
    Venmo, VenmoTokenizePayload,
};

export as namespace braintree;
