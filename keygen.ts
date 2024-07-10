import { Keypair } from "@solana/web3.js";
import "dotenv/config";

const keypair = Keypair.generate();

//create new keypair

console.log("my public key:", keypair.publicKey.toBase58());
console.log("my secret key:", keypair.secretKey);

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
