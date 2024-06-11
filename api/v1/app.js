/**
 * Initialize and start express app
 */

/**
 * Load environment variables if not in production environment
 */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`Express app listening on port ${port}`);
  }
});
