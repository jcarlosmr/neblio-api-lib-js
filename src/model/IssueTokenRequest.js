/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IssueTokenRequestFlags from './IssueTokenRequestFlags';
import IssueTokenRequestMetadata from './IssueTokenRequestMetadata';
import IssueTokenRequestTransfer from './IssueTokenRequestTransfer';

/**
 * The IssueTokenRequest model module.
 * @module model/IssueTokenRequest
 * @version 1.2.1
 */
class IssueTokenRequest {
    /**
     * Constructs a new <code>IssueTokenRequest</code>.
     * @alias module:model/IssueTokenRequest
     * @param issueAddress {String} Address issuing the token
     * @param amount {Number} Number of tokens to issue
     * @param divisibility {Number} Number of decimal places the token should be divisble by (0-7)
     * @param fee {Number} Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
     * @param reissuable {Boolean} whether the token should be reissuable
     * @param transfer {Array.<module:model/IssueTokenRequestTransfer>} 
     */
    constructor(issueAddress, amount, divisibility, fee, reissuable, transfer) { 
        
        IssueTokenRequest.initialize(this, issueAddress, amount, divisibility, fee, reissuable, transfer);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, issueAddress, amount, divisibility, fee, reissuable, transfer) { 
        obj['issueAddress'] = issueAddress;
        obj['amount'] = amount;
        obj['divisibility'] = divisibility;
        obj['fee'] = fee;
        obj['reissuable'] = reissuable;
        obj['transfer'] = transfer;
    }

    /**
     * Constructs a <code>IssueTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTokenRequest} obj Optional instance to populate.
     * @return {module:model/IssueTokenRequest} The populated <code>IssueTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTokenRequest();

            if (data.hasOwnProperty('issueAddress')) {
                obj['issueAddress'] = ApiClient.convertToType(data['issueAddress'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('divisibility')) {
                obj['divisibility'] = ApiClient.convertToType(data['divisibility'], 'Number');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('reissuable')) {
                obj['reissuable'] = ApiClient.convertToType(data['reissuable'], 'Boolean');
            }
            if (data.hasOwnProperty('flags')) {
                obj['flags'] = IssueTokenRequestFlags.constructFromObject(data['flags']);
            }
            if (data.hasOwnProperty('transfer')) {
                obj['transfer'] = ApiClient.convertToType(data['transfer'], [IssueTokenRequestTransfer]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IssueTokenRequestMetadata.constructFromObject(data['metadata']);
            }
        }
        return obj;
    }


}

/**
 * Address issuing the token
 * @member {String} issueAddress
 */
IssueTokenRequest.prototype['issueAddress'] = undefined;

/**
 * Number of tokens to issue
 * @member {Number} amount
 */
IssueTokenRequest.prototype['amount'] = undefined;

/**
 * Number of decimal places the token should be divisble by (0-7)
 * @member {Number} divisibility
 */
IssueTokenRequest.prototype['divisibility'] = undefined;

/**
 * Fee in satoshi to include in the issuance transaction min 1000000000 (10 NEBL)
 * @member {Number} fee
 */
IssueTokenRequest.prototype['fee'] = undefined;

/**
 * whether the token should be reissuable
 * @member {Boolean} reissuable
 */
IssueTokenRequest.prototype['reissuable'] = undefined;

/**
 * @member {module:model/IssueTokenRequestFlags} flags
 */
IssueTokenRequest.prototype['flags'] = undefined;

/**
 * @member {Array.<module:model/IssueTokenRequestTransfer>} transfer
 */
IssueTokenRequest.prototype['transfer'] = undefined;

/**
 * @member {module:model/IssueTokenRequestMetadata} metadata
 */
IssueTokenRequest.prototype['metadata'] = undefined;






export default IssueTokenRequest;

