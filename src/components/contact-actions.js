// Shared by the Gatsby homepage and standalone preview.
module.exports = function setupContactActions() {
  const timers = new Set();
  const onClick = async event => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;
    const feedback = button.parentElement.querySelector('.copy-feedback');
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      feedback.textContent = 'Copied';
      button.setAttribute('data-copied', 'true');
    } catch (error) {
      feedback.textContent = 'Could not copy';
    }
    const timer = setTimeout(() => {
      feedback.textContent = '';
      button.removeAttribute('data-copied');
      timers.delete(timer);
    }, 1800);
    timers.add(timer);
  };
  document.addEventListener('click', onClick);
  return () => {
    document.removeEventListener('click', onClick);
    timers.forEach(clearTimeout);
  };
};
