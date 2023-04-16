const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objDns = {};

  for (let domain of domains) {
    let blocks = domain.split(".").reverse();
    let dns = "";
    for (let block of blocks) {
      dns += `.${block}`;
      objDns[dns] = (objDns[dns] || 0) + 1;
    }
  }
  return objDns;
}

module.exports = {
  getDNSStats,
};
