<<<<<<< HEAD
const { devices } = require('@playwright/test');

=======
>>>>>>> 06ffb405a1b060e8fa61c91ce78be16a4a6eac45
const config = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
};

<<<<<<< HEAD
module.exports = config;
=======
export default config;
>>>>>>> 06ffb405a1b060e8fa61c91ce78be16a4a6eac45
