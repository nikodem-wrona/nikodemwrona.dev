export const scrollToModule = (name: string): boolean => {
  const element = window.document.getElementById(`${name}-module`);

  if (!element) {
    return false;
  }

  const position = element.offsetTop;
  window.scrollTo({ top: position, behavior: 'smooth' })

  return true;
}
