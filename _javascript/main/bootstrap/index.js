

export function getSelector() {
  return typeof BOOTSTRAP_SELECTOR !== 'undefined' &&
      typeof BOOTSTRAP_SELECTOR === 'string'
    ? BOOTSTRAP_SELECTOR
    : '.main-interactive__feature';
}

export function getElement(selector) {
  return document.querySelector(selector);
}

export function bootstrapElement() {
  const selector = getSelector();
  return selector ? getElement(selector) : null;
}
