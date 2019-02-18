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
import GetTokenMetadataResponseMetadataOfIssuanceDataUserData from './GetTokenMetadataResponseMetadataOfIssuanceDataUserData';

/**
 * The GetTokenMetadataResponseMetadataOfIssuanceData model module.
 * @module model/GetTokenMetadataResponseMetadataOfIssuanceData
 * @version 1.2.1
 */
class GetTokenMetadataResponseMetadataOfIssuanceData {
    /**
     * Constructs a new <code>GetTokenMetadataResponseMetadataOfIssuanceData</code>.
     * @alias module:model/GetTokenMetadataResponseMetadataOfIssuanceData
     */
    constructor() { 
        
        GetTokenMetadataResponseMetadataOfIssuanceData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTokenMetadataResponseMetadataOfIssuanceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenMetadataResponseMetadataOfIssuanceData} obj Optional instance to populate.
     * @return {module:model/GetTokenMetadataResponseMetadataOfIssuanceData} The populated <code>GetTokenMetadataResponseMetadataOfIssuanceData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenMetadataResponseMetadataOfIssuanceData();

            if (data.hasOwnProperty('tokenName')) {
                obj['tokenName'] = ApiClient.convertToType(data['tokenName'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('userData')) {
                obj['userData'] = GetTokenMetadataResponseMetadataOfIssuanceDataUserData.constructFromObject(data['userData']);
            }
        }
        return obj;
    }


}

/**
 * Token symbol
 * @member {String} tokenName
 */
GetTokenMetadataResponseMetadataOfIssuanceData.prototype['tokenName'] = undefined;

/**
 * Name of token issuer
 * @member {String} issuer
 */
GetTokenMetadataResponseMetadataOfIssuanceData.prototype['issuer'] = undefined;

/**
 * Token description
 * @member {String} description
 */
GetTokenMetadataResponseMetadataOfIssuanceData.prototype['description'] = undefined;

/**
 * @member {module:model/GetTokenMetadataResponseMetadataOfIssuanceDataUserData} userData
 */
GetTokenMetadataResponseMetadataOfIssuanceData.prototype['userData'] = undefined;






export default GetTokenMetadataResponseMetadataOfIssuanceData;

