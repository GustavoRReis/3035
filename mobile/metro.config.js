const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx'];

config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = config; 
