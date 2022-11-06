/**
 * add scoped classNames
 */
export function addScopedClassNames(styles, cssClasses = '') {
  const classesArray = cssClasses.split(' ');
  let newStylesArray = [];

  classesArray.forEach((cssClass) => {
    newStylesArray.push(styles[cssClass]);
  });

  const formattedStylesArray = newStylesArray.join(' ');

  return formattedStylesArray;
}
