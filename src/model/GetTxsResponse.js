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
import GetTxResponse from './GetTxResponse';

/**
 * The GetTxsResponse model module.
 * @module model/GetTxsResponse
 * @version 1.2.1
 */
class GetTxsResponse {
    /**
     * Constructs a new <code>GetTxsResponse</code>.
     * Object containing an array of transaction objects
     * @alias module:model/GetTxsResponse
     */
    constructor() { 
        
        GetTxsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTxsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTxsResponse} obj Optional instance to populate.
     * @return {module:model/GetTxsResponse} The populated <code>GetTxsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTxsResponse();

            if (data.hasOwnProperty('pagesTotal')) {
                obj['pagesTotal'] = ApiClient.convertToType(data['pagesTotal'], 'Number');
            }
            if (data.hasOwnProperty('txs')) {
                obj['txs'] = ApiClient.convertToType(data['txs'], [GetTxResponse]);
            }
        }
        return obj;
    }


}

/**
 * Number of pages of transactions
 * @member {Number} pagesTotal
 */
GetTxsResponse.prototype['pagesTotal'] = undefined;

/**
 * Array of transaction objects
 * @member {Array.<module:model/GetTxResponse>} txs
 */
GetTxsResponse.prototype['txs'] = undefined;






export default GetTxsResponse;

