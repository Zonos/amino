export const getCountryUrls = () => {
  const dashboardUrl = process.env.STORYBOOK_ZONOS_DASHBOARD_URL || null;
  if (!dashboardUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing environment variable STORYBOOK_ZONOS_DASHBOARD_URL');
  }
  return { dashboardUrl };
};
