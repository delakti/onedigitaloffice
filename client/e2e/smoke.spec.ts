import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/One Digital Office/);
});

test('navigation works', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Click the Services link.
    await page.click('text=Services');

    // Expects page to have a heading with the name of Installation.
    await expect(page.locator('h1')).toContainText('Our Services');
});

test('contact form inputs', async ({ page }) => {
    await page.goto('http://localhost:5173/contact');

    await page.fill('input[placeholder="John Doe"]', 'Test User');
    await page.fill('input[placeholder="john@company.com"]', 'test@example.com');

    // Check if button is enabled/present
    await expect(page.locator('button[type="submit"]')).toBeVisible();
});
