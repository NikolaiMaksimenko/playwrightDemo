const config = {
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
};

export default config;
