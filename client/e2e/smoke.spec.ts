import { test, expect } from '@playwright/test';

test.describe('OneDigitalOffice Website Transformation Suite', () => {
    test('1. Homepage renders hero, expertise, and core sections', async ({ page }) => {
        await page.goto('/');

        // Title and branding
        await expect(page).toHaveTitle(/OneDigitalOffice/);
        
        // Hero headline
        const heroHeading = page.locator('h1');
        await expect(heroHeading).toContainText('Transform Your Business with Microsoft 365, AI and Intelligent Automation');

        // Check primary action buttons
        await expect(page.locator('text=Book a Free Consultation').first()).toBeVisible();
        await expect(page.locator('text=Explore Our Solutions').first()).toBeVisible();

        // Check Expertise section
        await expect(page.locator('text=Our Areas of Enterprise Expertise')).toBeVisible();

        // Check 3 Business Challenges
        await expect(page.locator('text=Three Challenges Killing Enterprise Momentum')).toBeVisible();

        // Check Why Choose Us
        await expect(page.locator('text=Why Organisations Choose OneDigitalOffice')).toBeVisible();

        // Check Delivery Process
        await expect(page.locator('text=The Delivery Process')).toBeVisible();
    });

    test('2. Direct route access and browser refresh works on deep links', async ({ page }) => {
        // Direct load /solutions/microsoft-365
        await page.goto('/solutions/microsoft-365');
        await expect(page.locator('h1')).toContainText('Modernise Your Digital Workplace');

        // Browser refresh test
        await page.reload();
        await expect(page.locator('h1')).toContainText('Modernise Your Digital Workplace');

        // Direct load /solutions/sharepoint
        await page.goto('/solutions/sharepoint');
        await expect(page.locator('h1')).toContainText('SharePoint Online');

        // Direct load /solutions/microsoft-copilot
        await page.goto('/solutions/microsoft-copilot');
        await expect(page.locator('h1')).toContainText('Deploy Microsoft Copilot');

        // Direct load /solutions (and legacy /services)
        await page.goto('/services');
        await expect(page.locator('h1')).toContainText('Microsoft Cloud Ecosystem');

        // Direct load /industries/financial-services
        await page.goto('/industries/financial-services');
        await expect(page.locator('h1')).toContainText('Financial Services');

        // Direct load /products/contractflow-ai
        await page.goto('/products/contractflow-ai');
        await expect(page.locator('h1')).toContainText('ContractFlow AI');
        await expect(page.locator('text=In Active Engineering & Early Design Partner Preview')).toBeVisible();
    });

    test('3. Consultation form validation and error handling', async ({ page }) => {
        await page.goto('/contact');

        // Attempt submission with empty required fields
        const submitBtn = page.locator('button[type="submit"]');
        await expect(submitBtn).toBeVisible();
        await submitBtn.click();

        // Expect validation errors
        await expect(page.locator('text=Please enter your full name')).toBeVisible();
        await expect(page.locator('text=Please provide a valid business email address')).toBeVisible();
        await expect(page.locator('text=Company name is required')).toBeVisible();
        await expect(page.locator('text=Please provide brief details of your objectives or challenges')).toBeVisible();
        await expect(page.locator('text=You must acknowledge the privacy notice to proceed')).toBeVisible();

        // Fill out form
        await page.fill('#name', 'Sarah Jenkins');
        await page.fill('#email', 'sarah.jenkins@enterprise.co.uk');
        await page.fill('#company', 'Apex Enterprise UK');
        await page.fill('#jobTitle', 'Chief Operating Officer');
        await page.selectOption('#companySize', '101-250');
        await page.click('button:has-text("Microsoft Copilot Implementation")');
        await page.fill('#message', 'We are planning a Copilot pilot for 150 users and require a tenant permissions audit.');
        await page.check('input[type="checkbox"]');

        // Verify that validation errors are cleared
        await expect(page.locator('text=Please enter your full name')).not.toBeVisible();
    });

    test('4. Dedicated Book Consultation page works', async ({ page }) => {
        await page.goto('/book-consultation');
        await expect(page.locator('h1')).toContainText('Book Your 30-Minute');
        await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

    test('5. AI Transformation Assistant navigates properly', async ({ page }) => {
        await page.goto('/solutions');

        // Look for the Navigator component
        await expect(page.locator('text=Digital Transformation Navigator')).toBeVisible();

        // Click a goal
        await page.click('button:has-text("Adopt Microsoft Copilot safely")');

        // Check recommendation appears
        await expect(page.locator('h4:has-text("Microsoft Copilot Implementation")')).toBeVisible();
        await expect(page.locator('text=Recommended Architecture')).toBeVisible();
    });

    test('6. 404 page renders gracefully on unknown routes', async ({ page }) => {
        await page.goto('/non-existent-route-for-testing-404');
        await expect(page.locator('text=404')).toBeVisible();
        await expect(page.locator('h1')).toContainText('Page Not Found');
        await expect(page.locator('text=Return to Homepage')).toBeVisible();
    });

    test('7. Accessibility: skip link and landmark structure', async ({ page }) => {
        await page.goto('/');

        // Skip to content link
        const skipLink = page.getByRole('link', { name: 'Skip to main content' });
        await expect(skipLink).toBeAttached();

        // Main landmark with ID
        const mainLandmark = page.locator('main#main-content');
        await expect(mainLandmark).toBeVisible();

        // Header and Footer landmarks
        await expect(page.locator('header')).toBeVisible();
        await expect(page.locator('footer')).toBeVisible();
    });

    test('8. About page highlights verified founder experience', async ({ page }) => {
        await page.goto('/about');
        await expect(page.getByRole('heading', { name: 'Adeyemi Adelakun' })).toBeVisible();
        await expect(page.locator('text=23+ Years Enterprise Software Engineering')).toBeVisible();
        await expect(page.locator('text=HSBC')).toBeVisible();
        await expect(page.locator('text=UK Home Office')).toBeVisible();
    });
});
