import Resource from '../models/Resources.js';

export const getResources = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.category = category;
    }

    console.log('Database query:', query);

    const resources = await Resource.find(query).sort({ createdAt: -1 });
    console.log('Resources found:', resources.length);

    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources
    });

  } catch (error) {
    console.error('Get resources error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};

export const getResourcesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log('Category requested:', category);

    const resources = await Resource.find({ category }).sort({ createdAt: -1 });
    console.log('Resources found for category:', resources.length);

    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources
    });

  } catch (error) {
    console.error('Get resources by category error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};

export const createResource = async (req, res) => {
  try {
    console.log('Create resource request body:', req.body);

    const { title, url, category, description, type, featured } = req.body;

    // Validation
    if (!title || !url || !category) {
      return res.status(400).json({
        success: false,
        message: 'Title, URL, and category are required'
      });
    }

    const resource = new Resource({
      title,
      url,
      category,
      description: description || '',
      type: type || 'Website',
      featured: featured || false
    });

    const savedResource = await resource.save();
    console.log('Resource saved:', savedResource);

    res.status(201).json({
      success: true,
      message: 'Resource created successfully',
      data: savedResource
    });

  } catch (error) {
    console.error('Create resource error:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        error: error.message
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};