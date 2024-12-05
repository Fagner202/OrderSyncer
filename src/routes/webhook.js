const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const {orderId, customer, items} = req.body;
    console.log('Pedido recebido:', {orderId, customer, items});
    res.sendStatus(200).send({message: 'Pedido recebido com sucesso!'});
});

module.exports = router;