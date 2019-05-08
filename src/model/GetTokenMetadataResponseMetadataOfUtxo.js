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
import GetTokenMetadataResponseMetadataOfUtxoUserData from './GetTokenMetadataResponseMetadataOfUtxoUserData';

/**
 * The GetTokenMetadataResponseMetadataOfUtxo model module.
 * @module model/GetTokenMetadataResponseMetadataOfUtxo
 * @version 1.2.1
 */
class GetTokenMetadataResponseMetadataOfUtxo {
    /**
     * Constructs a new <code>GetTokenMetadataResponseMetadataOfUtxo</code>.
     * Metadata set for UTXO
     * @alias module:model/GetTokenMetadataResponseMetadataOfUtxo
     */
    constructor() { 
        
        GetTokenMetadataResponseMetadataOfUtxo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTokenMetadataResponseMetadataOfUtxo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTokenMetadataResponseMetadataOfUtxo} obj Optional instance to populate.
     * @return {module:model/GetTokenMetadataResponseMetadataOfUtxo} The populated <code>GetTokenMetadataResponseMetadataOfUtxo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTokenMetadataResponseMetadataOfUtxo();

            if (data.hasOwnProperty('userData')) {
                obj['userData'] = GetTokenMetadataResponseMetadataOfUtxoUserData.constructFromObject(data['userData']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetTokenMetadataResponseMetadataOfUtxoUserData} userData
 */
GetTokenMetadataResponseMetadataOfUtxo.prototype['userData'] = undefined;






export default GetTokenMetadataResponseMetadataOfUtxo;

