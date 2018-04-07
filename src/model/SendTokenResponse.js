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
    root.NeblioRestApiSuite.SendTokenResponse = factory(root.NeblioRestApiSuite.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendTokenResponse model module.
   * @module model/SendTokenResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SendTokenResponse</code>.
   * @alias module:model/SendTokenResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SendTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendTokenResponse} obj Optional instance to populate.
   * @return {module:model/SendTokenResponse} The populated <code>SendTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('txHex')) {
        obj['txHex'] = ApiClient.convertToType(data['txHex'], 'String');
      }
      if (data.hasOwnProperty('ntp1OutputIndexes')) {
        obj['ntp1OutputIndexes'] = ApiClient.convertToType(data['ntp1OutputIndexes'], ['Number']);
      }
      if (data.hasOwnProperty('multisigOutputs')) {
        obj['multisigOutputs'] = ApiClient.convertToType(data['multisigOutputs'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * Unsigned, raw transaction hex of the transaction to send the token
   * @member {String} txHex
   */
  exports.prototype['txHex'] = undefined;
  /**
   * Array of indexes transfering NTP1 tokens
   * @member {Array.<Number>} ntp1OutputIndexes
   */
  exports.prototype['ntp1OutputIndexes'] = undefined;
  /**
   * Array of indexes of multisig outputs
   * @member {Array.<Number>} multisigOutputs
   */
  exports.prototype['multisigOutputs'] = undefined;



  return exports;
}));


