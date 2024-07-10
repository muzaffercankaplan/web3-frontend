import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import "dotenv/config";

//Adding coins to the account

const airdropFunction = async () => {
  const keypair = getKeypairFromEnvironment("WALLET_SECRET_KEY");

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const txhash = await connection.requestAirdrop(
    keypair.publicKey,
    9 * LAMPORTS_PER_SOL
  );

  console.log("txhash", txhash);
};

airdropFunction();
