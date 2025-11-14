// Temporary module declarations for react-native-vector-icons submodules
// This prevents TypeScript errors when the library has no bundled type definitions.

declare module 'react-native-vector-icons/*' {
  const content: any;
  export default content;
}

declare module 'react-native-vector-icons/Ionicons' {
  const content: any;
  export default content;
}
