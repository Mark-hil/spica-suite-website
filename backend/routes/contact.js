const express = require('express');
const { body } = require('express-validator');
const { sendContactMessage } = require('../controllers/contactController');

const router = express.Router();

const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
  body('service').trim().notEmpty().withMessage('Please select a service'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
];

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit a contact message
 *     description: Submit a new contact message from the frontend form.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - service
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               service:
 *                 type: string
 *               message:
 *                 type: string
 *                 minLength: 10
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
// POST /api/contact
router.post('/', validateContact, sendContactMessage);

module.exports = router;
