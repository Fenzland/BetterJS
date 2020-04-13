
/**
 * This file is do nothing but fix a different between TS from JS.
 *   JS always assume a imported file as a module,
 *   TS however, only assume a file with import or export as a module,
 *   So a TS file without any import or export can import this file to behave as JS.
 */
