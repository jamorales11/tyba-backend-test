import express from 'express';
import controller from '../controllers/userController';
const router = express.Router();

router.post('/registro', controller.createUser);

router.post('/login', controller.login);

router.post('/getNearbyRestaurants', controller.getNearbyRestaurants);

router.get('/getTransactionsHistory', controller.getTransactionsHistory);

router.get('/logout', controller.logout);




export = router;