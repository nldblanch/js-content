import FS from '@isomorphic-git/lightning-fs';

// Create a new filesystem (or reopen if it already exists)
const fs = new FS("local-fs");

/**
 * The `fs` instance is a virtual filesystem provided by the `@isomorphic-git/lightning-fs` library.
 * This instance can be used throughout the application to read, write, and manage files.
 */
export default fs;
