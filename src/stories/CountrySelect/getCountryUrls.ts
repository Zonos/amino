export const getCountryUrls = () => {
  const baseFlagUrl = process.env.STORYBOOK_FLAG_IMAGE_URL || null;
  const dashboardUrl = process.env.STORYBOOK_ZONOS_DASHBOARD_URL || null;
  if (!baseFlagUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing environment variable STORYBOOK_FLAG_IMAGE_URL');
  }
  if (!dashboardUrl) {
    // eslint-disable-next-line no-console
    console.error('Missing environment variable STORYBOOK_ZONOS_DASHBOARD_URL');
  }
  return { baseFlagUrl, dashboardUrl };
};
