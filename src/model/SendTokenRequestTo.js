/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.0.0
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
    root.NeblioRestApiSuite.SendTokenRequestTo = factory(root.NeblioRestApiSuite.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendTokenRequestTo model module.
   * @module model/SendTokenRequestTo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SendTokenRequestTo</code>.
   * @alias module:model/SendTokenRequestTo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SendTokenRequestTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendTokenRequestTo} obj Optional instance to populate.
   * @return {module:model/SendTokenRequestTo} The populated <code>SendTokenRequestTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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

  /**
   * Address to transfer tokens to
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * Number of tokens to send
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * ID of token we are sending
   * @member {String} tokenId
   */
  exports.prototype['tokenId'] = undefined;



  return exports;
}));


