module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    testEnvironment: "jsdom",
    transform: {
        "\\.tsx?$": "ts-jest",
        "\\.jsx?$": "babel-jest", // if you have jsx tests too
    }
};