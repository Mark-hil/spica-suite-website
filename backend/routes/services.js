const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

let services = [
  {
    id: 1,
    slug: 'media-coverage',
    title: 'Media Coverage',
    description: 'Professional photography and videography for events, corporate shoots, and brand storytelling.',
    icon: 'camera',
    color: '#1a3fa8',
  },
  {
    id: 2,
    slug: 'website-design',
    title: 'Website Design',
    description: 'Modern, responsive websites tailored to your brand identity and business goals.',
    icon: 'globe',
    color: '#2563eb',
  },
  {
    id: 3,
    slug: 'live-streaming',
    title: 'Live Streaming',
    description: 'High-quality live streaming solutions for virtual events, conferences, and ceremonies.',
    icon: 'broadcast',
    color: '#7c3aed',
  },
  {
    id: 4,
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visuals, logos, branding materials, and social media content.',
    icon: 'palette',
    color: '#db2777',
  },
  {
    id: 5,
    slug: 'event-planning',
    title: 'Event Planning',
    description: 'End-to-end event management creating unforgettable and magical moments.',
    icon: 'sparkles',
    color: '#ea580c',
  },
  {
    id: 6,
    slug: 'travel-and-tour',
    title: 'Travel & Tour',
    description: 'Curated travel packages and tour management for individuals and groups.',
    icon: 'airplane',
    color: '#0891b2',
  },
];

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     description: Retrieves a list of all services offered.
 *     responses:
 *       200:
 *         description: A list of services
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       slug:
 *                         type: string
 *                       title:
 *                         type: string
 *                       description:
 *                         type: string
 *                       icon:
 *                         type: string
 *                       color:
 *                         type: string
 */
// GET /api/services — returns all offered services
router.get('/', (req, res) => {
  res.json({ success: true, data: services });
});

/**
 * @swagger
 * /api/services:
 *   post:
 *     summary: Add a new service
 *     description: Add a new service to the list (stored in-memory).
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - icon
 *               - color
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               icon:
 *                 type: string
 *               color:
 *                 type: string
 *                 example: '#000000'
 *     responses:
 *       201:
 *         description: Service created successfully
 *       400:
 *         description: Validation error
 */
router.post(
  '/',
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('description').trim().notEmpty().withMessage('Description is required'),
    body('icon').trim().notEmpty().withMessage('Icon identifier is required'),
    body('color').trim().notEmpty().withMessage('Color hex is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { title, description, icon, color } = req.body;
    
    // Auto-generate ID and slug
    const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const newService = {
      id: newId,
      slug,
      title,
      description,
      icon,
      color,
    };

    services.push(newService);

    res.status(201).json({ success: true, data: newService });
  }
);

module.exports = router;
