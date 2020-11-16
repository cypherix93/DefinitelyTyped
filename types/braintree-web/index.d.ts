// Type definitions for Braintree-web 3.67
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
//                 Jason Buckner <https://github.com/jbuckner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { AmericanExpress } from './american-express';
import { ApplePay } from './apple-pay';
import { Client } from './client';
import { DataCollector } from './data-collector';
import { GooglePayment } from './google-payment';
import { HostedFields } from './hosted-fields';
import { PayPal } from './paypal';
import { PayPalCheckout } from './paypal-checkout';
import { ThreeDSecure } from './three-d-secure';
import { UnionPay } from './unionpay';
import { USBankAccount } from './us-bank-account';
import { Venmo } from './venmo';
import { VisaCheckout } from './visa-checkout';

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
export const visaCheckout: VisaCheckout;

/**
 * @description The current version of the SDK, i.e. `3.67.0`.
 */
export const VERSION: string;

export * from './american-express';
export * from './apple-pay';
export * from './client';
export * from './data-collector';
export * from './google-payment';
export * from './hosted-fields';
export * from './paypal';
export * from './paypal-checkout';
export * from './three-d-secure';
export * from './unionpay';
export * from './us-bank-account';
export * from './venmo';
export * from './visa-checkout';

type BraintreeErrorExport = BraintreeError;

export {
    BraintreeErrorExport as BraintreeError,
};

export as namespace braintree;
