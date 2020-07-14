const { getAbellConfig } = require('./build-utils.js');
const { recursiveFindFiles } = require('./general-helpers.js');

/**
 * Returns the basic information needed for build execution
 * @return {ProgramInfo}
 */
function getProgramInfo() {
  // Get configured paths of destination and content
  const abellConfig = getAbellConfig();

  const programInfo = {
    abellConfig,
    contentTree: {},
    templateTree: {},
    logs: 'minimum',
    port: 5000,
    socketPort: 3000
  };

  return programInfo;
}

/**
 * Builds Source Content tree
 * @param {ProgramInfo} programInfo
 * @return {ContentTree}
 */
function buildSourceContentTree(programInfo) {
  // Build the tree which has all information about content
  const mdFiles = recursiveFindFiles(
    programInfo.abellConfig.contentPath,
    'index.md'
  );

  console.log(mdFiles);
  // TODO:
  // Build a tree where we can add nodes to add content to Abell
  // This will help in building plugins
  return {
    foo: 'bar'
  };
}

/**
 * Build template tree
 */
function buildTemplateTree() {
  // Builds tree with all information of .abell files
}

module.exports = {
  getProgramInfo,
  buildSourceContentTree,
  buildTemplateTree
};
