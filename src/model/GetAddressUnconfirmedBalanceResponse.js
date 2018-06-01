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
    root.NeblioRestApiSuite.GetAddressUnconfirmedBalanceResponse = factory(root.NeblioRestApiSuite.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAddressUnconfirmedBalanceResponse model module.
   * @module model/GetAddressUnconfirmedBalanceResponse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>GetAddressUnconfirmedBalanceResponse</code>.
   * Address unconfirmed balance in satoshis
   * @alias module:model/GetAddressUnconfirmedBalanceResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GetAddressUnconfirmedBalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAddressUnconfirmedBalanceResponse} obj Optional instance to populate.
   * @return {module:model/GetAddressUnconfirmedBalanceResponse} The populated <code>GetAddressUnconfirmedBalanceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


