export const handleInternalLinks = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a');

  if (anchor) {
    const href = anchor.getAttribute('href');
    // Check for both testing and production paths
    if (href?.includes('/testing/sistema-erp/') || href?.includes('/sistema-erp-microsip/')) {
      e.preventDefault();

      // Get the module URL by taking everything after the last slash
      const moduleUrl = href.split('/').pop();

      // Use history.pushState to update the URL without a page reload
      const isTestingEnv = window.location.pathname.includes('/testing/');
      const basePath = isTestingEnv ? '/testing/sistema-erp-microsip' : '/sistema-erp-microsip';

      // Update URL and trigger a navigation event
      window.history.pushState({}, '', `${basePath}/${moduleUrl}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }
};
