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
    define(['ApiClient', 'model/GetTransactionInfoResponseScriptSig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetTransactionInfoResponseScriptSig'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.GetTxResponseVin = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.GetTransactionInfoResponseScriptSig);
  }
}(this, function(ApiClient, GetTransactionInfoResponseScriptSig) {
  'use strict';




  /**
   * The GetTxResponseVin model module.
   * @module model/GetTxResponseVin
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetTxResponseVin</code>.
   * @alias module:model/GetTxResponseVin
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>GetTxResponseVin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTxResponseVin} obj Optional instance to populate.
   * @return {module:model/GetTxResponseVin} The populated <code>GetTxResponseVin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('txid')) {
        obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
      }
      if (data.hasOwnProperty('vout')) {
        obj['vout'] = ApiClient.convertToType(data['vout'], 'Number');
      }
      if (data.hasOwnProperty('scriptSig')) {
        obj['scriptSig'] = GetTransactionInfoResponseScriptSig.constructFromObject(data['scriptSig']);
      }
      if (data.hasOwnProperty('sequence')) {
        obj['sequence'] = ApiClient.convertToType(data['sequence'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('valueSat')) {
        obj['valueSat'] = ApiClient.convertToType(data['valueSat'], 'Number');
      }
      if (data.hasOwnProperty('n')) {
        obj['n'] = ApiClient.convertToType(data['n'], 'Number');
      }
    }
    return obj;
  }

  /**
   * TXID of the input
   * @member {String} txid
   */
  exports.prototype['txid'] = undefined;
  /**
   * output index
   * @member {Number} vout
   */
  exports.prototype['vout'] = undefined;
  /**
   * @member {module:model/GetTransactionInfoResponseScriptSig} scriptSig
   */
  exports.prototype['scriptSig'] = undefined;
  /**
   * @member {Number} sequence
   */
  exports.prototype['sequence'] = undefined;
  /**
   * Value of input in NEBL
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * Value of input in NEBL satoshi
   * @member {Number} valueSat
   */
  exports.prototype['valueSat'] = undefined;
  /**
   * input index
   * @member {Number} n
   */
  exports.prototype['n'] = undefined;



  return exports;
}));


