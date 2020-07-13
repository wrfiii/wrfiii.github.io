import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface Modules{
  [key: string]: any;
}

import getters from './modules/getter';

const modulesFiles = require.context('./modules', true, /\.ts$/);

const modules = modulesFiles.keys().reduce((modules: Modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {});

export default new Vuex.Store({
  modules,
  getters
})
