export function getComponentClosestLanguage(element: HTMLElement): string {
  const closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
}

export async function fetchLocaleStringsForComponent(
  componentName: string,
  locale: string
) {
  const result = await fetch(`/assets/i18n/${componentName}.i18n.${locale}.json`);
  if (result.ok) {
    const data = await result.json();
    return data;
  }
  throw new Error('Something went wrong');
}

export async function getLocaleComponentStrings(element: HTMLElement) {
    const componentName = element.tagName.toLowerCase();
    const componentLanguage = getComponentClosestLanguage(element);
    let strings;
    try {
        strings = await fetchLocaleStringsForComponent(componentName, componentLanguage);
    } catch (e) {
        console.warn(`no locale for ${componentName} (${componentLanguage}) loading default locale en.`);
        strings = await fetchLocaleStringsForComponent(componentName, 'en');
    }
    return strings;
}
