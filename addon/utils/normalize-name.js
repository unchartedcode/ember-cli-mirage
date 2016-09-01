import {
  camelize,
  pluralize,
  singularize,
  dasherize
} from 'ember-cli-mirage/utils/inflector';

export function toCollectionName(type) {
  type = type.replace('/', '_');
  let modelName = dasherize(type);
  return camelize(pluralize(modelName));
}

export function toModelName(type) {
  let modelName = dasherize(type);
  return singularize(modelName);
}
