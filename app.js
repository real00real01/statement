const express = require('express');
const app = express();

// Redirect ALL requests to your Turnstile-protected domain
app.get('*', (req, res) => {
  res.redirect(301, 'https://statement03.com/abh');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Redirector running on ${PORT}`));