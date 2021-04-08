/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let i = 0;
  const accum = [];
  while (email[email.length - 1 - i] !== '@') {
    accum.push(email[email.length - 1 - i]);
    i++;
  }
  return accum.reverse().join('');
}

module.exports = getEmailDomain;
