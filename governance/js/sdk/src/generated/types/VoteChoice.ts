/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type VoteChoice = {
  rank: number
  weightPercentage: number
}

/**
 * @category userTypes
 * @category generated
 */
export const voteChoiceBeet = new beet.BeetArgsStruct<VoteChoice>(
  [
    ['rank', beet.u8],
    ['weightPercentage', beet.u8],
  ],
  'VoteChoice'
)