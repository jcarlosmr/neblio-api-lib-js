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
    define(['ApiClient', 'model/GetTransactionInfoResponseVin', 'model/GetTransactionInfoResponseVout'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetTransactionInfoResponseVin'), require('./GetTransactionInfoResponseVout'));
  } else {
    // Browser globals (root is window)
    if (!root.NeblioRestApiSuite) {
      root.NeblioRestApiSuite = {};
    }
    root.NeblioRestApiSuite.GetTransactionInfoResponse = factory(root.NeblioRestApiSuite.ApiClient, root.NeblioRestApiSuite.GetTransactionInfoResponseVin, root.NeblioRestApiSuite.GetTransactionInfoResponseVout);
  }
}(this, function(ApiClient, GetTransactionInfoResponseVin, GetTransactionInfoResponseVout) {
  'use strict';




  /**
   * The GetTransactionInfoResponse model module.
   * @module model/GetTransactionInfoResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetTransactionInfoResponse</code>.
   * @alias module:model/GetTransactionInfoResponse
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>GetTransactionInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetTransactionInfoResponse} obj Optional instance to populate.
   * @return {module:model/GetTransactionInfoResponse} The populated <code>GetTransactionInfoResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hex')) {
        obj['hex'] = ApiClient.convertToType(data['hex'], 'String');
      }
      if (data.hasOwnProperty('txid')) {
        obj['txid'] = ApiClient.convertToType(data['txid'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('locktime')) {
        obj['locktime'] = ApiClient.convertToType(data['locktime'], 'Number');
      }
      if (data.hasOwnProperty('vin')) {
        obj['vin'] = ApiClient.convertToType(data['vin'], [GetTransactionInfoResponseVin]);
      }
      if (data.hasOwnProperty('vout')) {
        obj['vout'] = ApiClient.convertToType(data['vout'], [GetTransactionInfoResponseVout]);
      }
      if (data.hasOwnProperty('blocktime')) {
        obj['blocktime'] = ApiClient.convertToType(data['blocktime'], 'Number');
      }
      if (data.hasOwnProperty('blockheight')) {
        obj['blockheight'] = ApiClient.convertToType(data['blockheight'], 'Number');
      }
      if (data.hasOwnProperty('totalsent')) {
        obj['totalsent'] = ApiClient.convertToType(data['totalsent'], 'Number');
      }
      if (data.hasOwnProperty('fee')) {
        obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
      }
      if (data.hasOwnProperty('blockhash')) {
        obj['blockhash'] = ApiClient.convertToType(data['blockhash'], 'String');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('confirmations')) {
        obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Transaction in raw hex
   * @member {String} hex
   */
  exports.prototype['hex'] = undefined;
  /**
   * TXID of transaction
   * @member {String} txid
   */
  exports.prototype['txid'] = undefined;
  /**
   * Transaction version
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;
  /**
   * Transaction locktime
   * @member {Number} locktime
   */
  exports.prototype['locktime'] = undefined;
  /**
   * Array of transaction inputs
   * @member {Array.<module:model/GetTransactionInfoResponseVin>} vin
   */
  exports.prototype['vin'] = undefined;
  /**
   * Array of transaction outputs
   * @member {Array.<module:model/GetTransactionInfoResponseVout>} vout
   */
  exports.prototype['vout'] = undefined;
  /**
   * Block time of this transaction
   * @member {Number} blocktime
   */
  exports.prototype['blocktime'] = undefined;
  /**
   * Block height of this transaction
   * @member {Number} blockheight
   */
  exports.prototype['blockheight'] = undefined;
  /**
   * Total NEBL sent in this transaction in satoshis
   * @member {Number} totalsent
   */
  exports.prototype['totalsent'] = undefined;
  /**
   * Total NEBL used as fee for this transcation in satoshis
   * @member {Number} fee
   */
  exports.prototype['fee'] = undefined;
  /**
   * Hash of the block this transaction is in
   * @member {String} blockhash
   */
  exports.prototype['blockhash'] = undefined;
  /**
   * Transaction time
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Number of transaction confirmations
   * @member {Number} confirmations
   */
  exports.prototype['confirmations'] = undefined;



  return exports;
}));


