import { test, expect } from '@playwright/test'

test('student can view dashboard', async ({ page }) => {
  await page.goto('/dashboard')
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
  await expect(page.locator('[data-testid="habit-widget"]')).toBeVisible()
})
