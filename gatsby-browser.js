/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onClientEntry = () => {
    setTimeout(function() {
      document.body.className = document.body.className.replace(/\bno-scroll\b/, '');
    }, 4000);
}
