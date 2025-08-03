import express from 'express';
import { handleGetContacts, handleGetContactById } from '../controllers/contactsController.js';

const router = express.Router();

router.get('/', handleGetContacts);
router.get('/:contactId', handleGetContactById);

export default router;

