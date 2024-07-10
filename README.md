# Solana

## Installation Instructions

1.  Clone or download the project:

```sh
        git clone https://github.com/muzaffercankaplan/web3-frontend.git
```

2.  Create local wallet:

```sh
        open terminal
        yarn keygen
        Save the created public and private keygens to the env file
```

3.  Edit env file :

```sh
        WALLET_SECRET_KEY="<YOUR WALLET SECRET KEY>"

        WALLET_PUBLIC_KEY = "<YOUR WALLET PUBLIC KEY>"

        LOCAL_SECRET_KEY="<YOUR LOCAL SECRET KEY>"

        LOCAL_PUBLIC_KEY = "<YOUR LOCAL PUBLIC KEY>"
```

---

Which technologies used:

| Name                       | Version   |
| -------------------------- | --------- |
| @project-serum/anchor      | ^0.26.0   |
| @solana/web3.js            | ^1.95.0   |
| @solana-developers/helpers | ^2.3.0,   |
| @types/node                | ^20.14.10 |
| dotenv                     | ^16.4.5   |
| typescript/node            | ^5.5.3    |
