/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SendTokenRequestTo model module.
 * @module model/SendTokenRequestTo
 * @version 1.2.1
 */
class SendTokenRequestTo {
    /**
     * Constructs a new <code>SendTokenRequestTo</code>.
     * @alias module:model/SendTokenRequestTo
     */
    constructor() { 
        
        SendTokenRequestTo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendTokenRequestTo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendTokenRequestTo} obj Optional instance to populate.
     * @return {module:model/SendTokenRequestTo} The populated <code>SendTokenRequestTo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendTokenRequestTo();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('tokenId')) {
                obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address to transfer tokens to
 * @member {String} address
 */
SendTokenRequestTo.prototype['address'] = undefined;

/**
 * Number of tokens to send
 * @member {Number} amount
 */
SendTokenRequestTo.prototype['amount'] = undefined;

/**
 * ID of token we are sending
 * @member {String} tokenId
 */
SendTokenRequestTo.prototype['tokenId'] = undefined;






export default SendTokenRequestTo;

