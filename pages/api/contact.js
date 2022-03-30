export default function handler(req, res) {
    console.log(req.body.first_name);


    res.status(200).json({});
}