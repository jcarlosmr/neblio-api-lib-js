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

/**
 * The BurnTokenRequestBurn model module.
 * @module model/BurnTokenRequestBurn
 * @version 1.2.1
 */
class BurnTokenRequestBurn {
    /**
     * Constructs a new <code>BurnTokenRequestBurn</code>.
     * @alias module:model/BurnTokenRequestBurn
     */
    constructor() { 
        
        BurnTokenRequestBurn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BurnTokenRequestBurn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BurnTokenRequestBurn} obj Optional instance to populate.
     * @return {module:model/BurnTokenRequestBurn} The populated <code>BurnTokenRequestBurn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BurnTokenRequestBurn();

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
 * Amount of tokens to burn
 * @member {Number} amount
 */
BurnTokenRequestBurn.prototype['amount'] = undefined;

/**
 * Unique token id we are burning
 * @member {String} tokenId
 */
BurnTokenRequestBurn.prototype['tokenId'] = undefined;






export default BurnTokenRequestBurn;

