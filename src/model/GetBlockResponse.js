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
    root.NeblioRestApiSuite.GetBlockResponse = factory(root.NeblioRestApiSuite.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetBlockResponse model module.
   * @module model/GetBlockResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetBlockResponse</code>.
   * @alias module:model/GetBlockResponse
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>GetBlockResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBlockResponse} obj Optional instance to populate.
   * @return {module:model/GetBlockResponse} The populated <code>GetBlockResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hash')) {
        obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
      }
      if (data.hasOwnProperty('confirmations')) {
        obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('merkleroot')) {
        obj['merkleroot'] = ApiClient.convertToType(data['merkleroot'], 'String');
      }
      if (data.hasOwnProperty('tx')) {
        obj['tx'] = ApiClient.convertToType(data['tx'], ['String']);
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('nonce')) {
        obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
      }
      if (data.hasOwnProperty('bits')) {
        obj['bits'] = ApiClient.convertToType(data['bits'], 'String');
      }
      if (data.hasOwnProperty('difficulty')) {
        obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'Number');
      }
      if (data.hasOwnProperty('previousblockhash')) {
        obj['previousblockhash'] = ApiClient.convertToType(data['previousblockhash'], 'String');
      }
      if (data.hasOwnProperty('nextblockhash')) {
        obj['nextblockhash'] = ApiClient.convertToType(data['nextblockhash'], 'String');
      }
      if (data.hasOwnProperty('reward')) {
        obj['reward'] = ApiClient.convertToType(data['reward'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Block hash
   * @member {String} hash
   */
  exports.prototype['hash'] = undefined;
  /**
   * Number of confirmations block has
   * @member {Number} confirmations
   */
  exports.prototype['confirmations'] = undefined;
  /**
   * Block size in bytes
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Block height
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Block version
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;
  /**
   * Merkleroot of block
   * @member {String} merkleroot
   */
  exports.prototype['merkleroot'] = undefined;
  /**
   * Array of tx ids in the block
   * @member {Array.<String>} tx
   */
  exports.prototype['tx'] = undefined;
  /**
   * Block time relative to epoch
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * Block nonce
   * @member {Number} nonce
   */
  exports.prototype['nonce'] = undefined;
  /**
   * Block bits
   * @member {String} bits
   */
  exports.prototype['bits'] = undefined;
  /**
   * Block difficulty
   * @member {Number} difficulty
   */
  exports.prototype['difficulty'] = undefined;
  /**
   * Hash of the previous block on the chain
   * @member {String} previousblockhash
   */
  exports.prototype['previousblockhash'] = undefined;
  /**
   * Hash of the next block on the chain
   * @member {String} nextblockhash
   */
  exports.prototype['nextblockhash'] = undefined;
  /**
   * Number of NEBL awarded in this block
   * @member {Number} reward
   */
  exports.prototype['reward'] = undefined;



  return exports;
}));


