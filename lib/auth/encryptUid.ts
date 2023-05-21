const bcrypt = require("bcrypt");
const saltRounds = 10;

export async function encryptUid(uid: string) {
  const hash: string = await new Promise((resolve, reject) => {
    bcrypt.hash(uid, saltRounds, function (err: Error | undefined, hash: string) {
      if (err) reject(err);
      resolve(hash);
    });
  });

  return hash;
}
