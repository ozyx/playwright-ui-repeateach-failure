const { test, expect } = require('@playwright/test');

test.describe('basic test suite', () => {

    test('Should just pass', async ({ page }) => {
        await page.goto('./');
        expect(42).toBe(42);
    });
});
