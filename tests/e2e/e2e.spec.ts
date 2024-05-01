import { test, expect,chromium } from '@playwright/test'

test.describe.only('Automation Testing Demo', () => {
  
test.only('TC001 - TimeDoctor Home page>> Verify all elements', async ({ page }) => {
  
  // navigate to URL english
    await page.goto('https://www.timedoctor.com/');
    
    await page.waitForLoadState('load');
    await page.waitForLoadState('domcontentloaded');   

    await expect(page.getByTestId('header-logo-desktop')).toBeVisible()
    await expect(page.getByRole('menubar').locator('li').filter({ hasText: 'ProductProductOverviewFeatures that help you measure and improve productivityInt' })).toBeVisible()
    await expect(page.getByRole('menubar').locator('li').filter({ hasText: 'SolutionsBy Outsourcing TypeCX & Contact CenterImprove the customer experience a' })).toBeVisible()
    await expect(page.getByRole('menubar').locator('li').filter({ hasText: 'Pricing' })).toBeVisible()

    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Request a Demo' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Start Trial' })).toBeVisible()

    await expect(page.getByRole('heading', { name: 'The #1 Workforce Analytics Platform' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Get Peace of Mind with Workforce Analytics for Distributed Teams' })).toBeVisible()
    await expect(page.getByText('Uncover insights in people, tech & operations to solve workforce & performance g')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Try it Free' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'View Demo' })).toBeVisible()
    await expect(page.locator('[id="Hero\\ Section"] img').nth(2)).toBeVisible()
    await expect(page.locator('[id="Hero\\ Section"] img').first()).toBeVisible()
    await expect(page.locator('#Logo')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'How Time Doctor Works' })).toBeVisible()
    await expect(page.getByText('Make your business effective not just productive by uncovering unseen workforce ')).toBeVisible()
    await expect(page.getByText('Uncover Workforce InsightsGain hidden workforce insights from all levels of your')).toBeVisible()
    await expect(page.locator('article').filter({ hasText: 'Uncover Workforce InsightsGain hidden workforce insights from all levels of your' }).locator('img')).toBeVisible()
    await expect(page.locator('article').filter({ hasText: 'Enhance Team Performance & RetentionBoost revenue by balancing workforce well-be' }).locator('img')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Enhance Team Performance & Retention' })).toBeVisible()
    await expect(page.getByText('Boost revenue by balancing workforce well-being and increasing productivity. Imp')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Get Peace of Mind', exact: true })).toBeVisible()
    await expect(page.getByText('Getting a deep understanding of how your workforce operates allows you and your ')).toBeVisible()
    await expect(page.locator('article').filter({ hasText: 'Get Peace of MindGetting a deep understanding of how your workforce operates all' }).locator('img')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Our Solutions' })).toBeVisible()
    await expect(page.getByText('The #1 Workforce Analytics Platform for all teams and industries.')).toBeVisible()
    await expect(page.locator('[id="Our\\ Solutions"] img').first()).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Fully Remote' })).toBeVisible()
    await expect(page.getByText('Increased visibility and actionable work insights for remote workforces.')).toBeVisible()
    await expect(page.locator('[id="Our\\ Solutions"] img').nth(1)).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Hybrid and In-Office' })).toBeVisible()
    await expect(page.locator('[id="Our\\ Solutions"] img').nth(2)).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Outsourced' })).toBeVisible()
    await expect(page.getByText('Workforce analytics to drive profitability for BPOs or companies with offshore t')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Enterprise' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Contact Sales' })).toBeVisible()
    await expect(page.getByRole('article', { name: 'Enterprise' }).locator('img')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Don’t take our word for it' })).toBeVisible()
    await expect(page.locator('.TdImage_TdImage__6m0a_')).toBeVisible()
    await expect(page.getByTestId('feedback-section').locator('div').filter({ hasText: '“Because we use Time Doctor, we’re able to have a flexible schedule. It allows y' }).nth(3)).toBeVisible()
    await expect(page.locator('section').filter({ hasText: 'Try Time Doctor for freeReveal Workforce Analytics Insights, make your team effe' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Try it out' })).toBeVisible()

    await expect(page.getByRole('link', { name: 'Privacy Policy' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Terms of Service' })).toBeVisible()
    



     
  })


})
