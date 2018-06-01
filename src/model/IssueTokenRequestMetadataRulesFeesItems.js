/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.IssueTokenRequestMetadataRulesFeesItems = factory(root.NeblioRestApiSuite.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IssueTokenRequestMetadataRulesFeesItems model module.
   * @module model/IssueTokenRequestMetadataRulesFeesItems
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>IssueTokenRequestMetadataRulesFeesItems</code>.
   * @alias module:model/IssueTokenRequestMetadataRulesFeesItems
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>IssueTokenRequestMetadataRulesFeesItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IssueTokenRequestMetadataRulesFeesItems} obj Optional instance to populate.
   * @return {module:model/IssueTokenRequestMetadataRulesFeesItems} The populated <code>IssueTokenRequestMetadataRulesFeesItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('tokenId')) {
        obj['tokenId'] = ApiClient.convertToType(data['tokenId'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Address fee is auto sent to
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * How fee should be paid, either with a tokenId, or with NEBL if null
   * @member {String} tokenId
   */
  exports.prototype['tokenId'] = undefined;
  /**
   * Amount of NTP1 token, or NEBL (in satoshi) to pay as fee
   * @member {String} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


