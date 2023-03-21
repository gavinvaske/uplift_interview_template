const app = require('../application/app');

describe('interview test cases', () => {
    it('should never fail, this is a sanity check', () => {
        const expectedValue = true;

        const actualValue = app.sanityCheck();

        expect(actualValue).toBe(expectedValue);
    });
})