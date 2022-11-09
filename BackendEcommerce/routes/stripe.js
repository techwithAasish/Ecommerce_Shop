const router = require("express").Router();

// const KEY = process.env.STRIPE_KEY;

// const stripe = require("stripe")(KEY);
const stripe = require("stripe")(
  "sk_test_51JtYtaGjJE0RTnT3Kl4LT2lwk0pRiwH2MD0X59KYZd1znt7a8F3LixS0B8h9VwGFgKVTSkOFwoZdyq9oNIg89XZt00MUbqwaNS"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
