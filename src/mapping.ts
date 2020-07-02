import { DepositEvent } from '../generated/DepositContract/DepositContract'
import { Deposit } from '../generated/schema'
import { BigInt } from '@graphprotocol/graph-ts'

export function handleDepositEvent(event: DepositEvent): void {
  let deposit = new Deposit(event.params.index.toHex())
  deposit.validatorPubKey = event.params.pubkey
  deposit.transactionHash = event.transaction.hash
  deposit.withdrawalCredentials = event.params.withdrawal_credentials
  deposit.amount = BigInt.fromUnsignedBytes(event.params.amount)
  deposit.signature = event.params.signature
  deposit.index = BigInt.fromUnsignedBytes(event.params.index)
  deposit.save()
}

