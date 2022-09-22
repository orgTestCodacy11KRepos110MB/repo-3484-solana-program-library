/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type Reserved110 = {
  reserved64: number[] /* size: 64 */
  reserved32: number[] /* size: 32 */
  reserved14: number[] /* size: 14 */
}

/**
 * @category userTypes
 * @category generated
 */
export const reserved110Beet = new beet.BeetArgsStruct<Reserved110>(
  [
    ['reserved64', beet.uniformFixedSizeArray(beet.u8, 64)],
    ['reserved32', beet.uniformFixedSizeArray(beet.u8, 32)],
    ['reserved14', beet.uniformFixedSizeArray(beet.u8, 14)],
  ],
  'Reserved110'
)