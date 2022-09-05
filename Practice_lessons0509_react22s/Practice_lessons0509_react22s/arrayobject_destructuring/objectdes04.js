/**
 * Complete the function mergeOptions such that it returns an object which merges the options with the defaultOptions.
 * If a key is defined in the options, it should override the option provided in the defaultOptions.
 *
 * @param {object} options
 * @param {object} defaultOptions
 */
const mergeOptions = (options, defaultOptions) => {};

// Sample usage - do not modify
const options = {
  tabSize: 4,
};
const defaultOptions = {
  indentation: 'tab',
  tabSize: 2,
  language: 'javascript',
};
console.log(mergeOptions(options, defaultOptions)); // {indentation: "tab", tabSize: 4, language: "javascript"}
