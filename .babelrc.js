module.exports = require("@dmail/shared-config").config("babel", {
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  }
})
