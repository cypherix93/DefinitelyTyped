import { Client } from '../client';

export interface VisaCheckout {
    VERSION: string;

    create(options: { client?: Client; authorization?: string; merchantAccountId?: string }, callback: callback<VisaCheckout>): void;
    create(options: { client?: Client; authorization?: string; merchantAccountId?: string }): Promise<VisaCheckout>;

    /**
     * Creates an `initOptions` object from the passed `options`, applying properties that Braintree needs to transact Visa Checkout.
     *
     * Braintree will apply these properties if they do not exist on the given `options`:
     *  - `apikey`
     *  - `externalClientId`
     *  - `settings.payment.cardBrands`
     *
     * Braintree will overwrite `settings.dataLevel = 'FULL'` to access the full payment method.
     */
    createInitOptions(visaCheckoutInitOptions: VisaCheckoutInitOptions): any;

    /**
     * Tokenizes the Visa Checkout payload, returning a payment method nonce.
     */
    tokenize(visaCheckoutPayment: any, callback: callback<VisaCheckoutTokenizePayload>): void;
    tokenize(visaCheckoutPayment: any): Promise<VisaCheckoutTokenizePayload>;

    /**
     * Cleanly tear down anything set up by {@link VisaCheckout.create}.
     */
    teardown(callback: () => void): void;
    teardown(): Promise<void>;
}

export interface VisaCheckoutInitOptions {
    paymentRequest: {
        currencyCode: string;
        subtotal: string;
    };
}

export interface VisaCheckoutAddress {
    countryCode: string;
    extendedAddress: string;
    firstName: string;
    lastName: string;
    locality: string;
    postalCode: string;
    region: string;
    streetAddress: string;
    phoneNumber: string;
}

export interface VisaCheckoutUserData {
    userEmail: string;
    userFirstName: string;
    userLastName: string;
    userFullName: string;
    userName: string;
}

export interface VisaCheckoutTokenizePayload {
    nonce: string;
    details: {
        cardType: string;
        lastFour: string;
        lastTwo: string;
    };
    description: string;
    billingAddress: VisaCheckoutAddress;
    shippingAddress: VisaCheckoutAddress;
    userData: VisaCheckoutUserData;
    type: string;
    consumed: boolean;
    threeDSecureInfo: unknown;
    binData: {
        commercial: string;
        countryOfIssuance: string;
        debit: string;
        durbinRegulated: string;
        healthcare: string;
        issuingBank: string;
        payroll: string;
        prepaid: string;
        productId: string;
    };
    callId: string;
}
