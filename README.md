# Ethereum 2 deposit contract subgraph

This is the Ethereum 2 deposit contract subgraph for Onyx.

For example, to query the deposits for a particular validator public key:

```
curl \
  --data '{"query": "{deposits(where:{validatorPubKey:\"0xa2fbaa9e4b454c672ff1e89cd70c5f5e84d7dfab9a3b011c12d56d6f3e56aef0a760ba3e7df78ed8f2783971ea54962a\"}){index amount withdrawalCredentials signature}}"}' \
  https://api.thegraph.com/subgraphs/name/attestantio/eth2deposits-onyx
```

