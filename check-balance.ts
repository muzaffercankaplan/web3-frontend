import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import "dotenv/config";

//Balance check on account

const example = async () => {
  const key = process.env.WALLET_PUBLIC_KEY
    ? process.env.WALLET_PUBLIC_KEY
    : "";

  const publicKey = new PublicKey(key);

  const connection = new Connection(
    "https://api.devnet.solana.com",
    "confirmed"
  );

  const balanceInLamports = await connection.getBalance(publicKey);

  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
  );
};

example();
