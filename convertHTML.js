function convertHTML(str) {
  let entitiesObj = {
    '&': '&amp;',
    '<': '&lt',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  }
  let result = str;
  for (let entity in entitiesObj) {
      console.log(`entity: ${entity}, replace: ${entitiesObj[entity]}`);
    result = result.replaceAll(entity, entitiesObj[entity])
  }
  console.log(result);
  return result;
}

convertHTML("Hamburgers < Pizza < Tacos");