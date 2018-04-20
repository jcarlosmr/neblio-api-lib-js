/**
 * Neblio REST API Suite
 * APIs for Interacting with NTP1 Tokens & The Neblio Blockchain
 *
 * OpenAPI spec version: 1.1.1
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
    root.NeblioRestApiSuite.GetFaucetResponseData = factory(root.NeblioRestApiSuite.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetFaucetResponseData model module.
   * @module model/GetFaucetResponseData
   * @version 1.1.1
   */

  /**
   * Constructs a new <code>GetFaucetResponseData</code>.
   * @alias module:model/GetFaucetResponseData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetFaucetResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFaucetResponseData} obj Optional instance to populate.
   * @return {module:model/GetFaucetResponseData} The populated <code>GetFaucetResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('txId')) {
        obj['txId'] = ApiClient.convertToType(data['txId'], 'String');
      }
    }
    return obj;
  }

  /**
   * TXID of a successful withdrawal
   * @member {String} txId
   */
  exports.prototype['txId'] = undefined;



  return exports;
}));


