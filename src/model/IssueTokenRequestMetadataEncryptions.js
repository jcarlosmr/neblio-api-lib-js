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
 * The IssueTokenRequestMetadataEncryptions model module.
 * @module model/IssueTokenRequestMetadataEncryptions
 * @version 1.2.1
 */
class IssueTokenRequestMetadataEncryptions {
    /**
     * Constructs a new <code>IssueTokenRequestMetadataEncryptions</code>.
     * @alias module:model/IssueTokenRequestMetadataEncryptions
     */
    constructor() { 
        
        IssueTokenRequestMetadataEncryptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueTokenRequestMetadataEncryptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTokenRequestMetadataEncryptions} obj Optional instance to populate.
     * @return {module:model/IssueTokenRequestMetadataEncryptions} The populated <code>IssueTokenRequestMetadataEncryptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueTokenRequestMetadataEncryptions();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('pubkey')) {
                obj['pubkey'] = ApiClient.convertToType(data['pubkey'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * userData key to encrypt
 * @member {String} key
 */
IssueTokenRequestMetadataEncryptions.prototype['key'] = undefined;

/**
 * RSA public key used for encryption
 * @member {String} pubkey
 */
IssueTokenRequestMetadataEncryptions.prototype['pubkey'] = undefined;

/**
 * key format (pem or der)
 * @member {String} format
 */
IssueTokenRequestMetadataEncryptions.prototype['format'] = undefined;

/**
 * pkcs1 or pkcs8
 * @member {String} type
 */
IssueTokenRequestMetadataEncryptions.prototype['type'] = undefined;






export default IssueTokenRequestMetadataEncryptions;

