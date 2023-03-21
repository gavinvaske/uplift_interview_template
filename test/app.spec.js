const app = require('../application/app');
const chance = require('chance').Chance();

describe('interview test cases', () => {
    it('should never fail, this is a sanity check', () => {
        const expectedValue = chance.integer();

        const actualValue = app.getExactlyWhatIPassedIn(expectedValue);

        expect(actualValue).toBe(expectedValue);
    });
})