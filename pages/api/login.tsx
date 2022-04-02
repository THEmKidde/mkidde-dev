import CryptoJS from "crypto-js"

const secret = process.env.SECRET_PASSPHRASE;

const USERNAME = process.env.LOGIN_USERNAME;
const PASSWORD = process.env.LOGIN_PASSWORD;

export default async function login(req, res) {
    const username = CryptoJS.AES.decrypt(req.body.username, secret).toString(CryptoJS.enc.Utf8);
    const password = CryptoJS.AES.decrypt(req.body.password, secret).toString(CryptoJS.enc.Utf8)

    console.log(`${USERNAME} ${PASSWORD}`);

    if (username == USERNAME && password == PASSWORD) {
        res.status(200).end();
    } else {
        res.status(401).end();
    }
}