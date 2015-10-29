// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

module.exports = {
  toSentenceCase: function(text) {
    return text.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },

  quoteIfNecessary: function(text) {
    // quote if there are embedded spaces
    if (text.indexOf(' ') !== -1) {
      text = "'" + text + "'";
    }
    return text;
  },

  unquoteIfNecessary: function(text) {
    // remove surrounding quotes
    if ((text[0] === '\'' && text[text.length - 1] === '\'') ||
      (text[0] === '"' && text[text.length - 1] === '"')) {
      text = text.slice(1, text.length - 1);
    }
    return text;
  }
};
