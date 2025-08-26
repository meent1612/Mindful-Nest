import Resource from '../models/Resources.js';

export const getResources = async (req, res) => {
  try {
    const { category } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    console.log('Query used:', query);
    const resources = await Resource.find(query).sort({ createdAt: -1 });
    console.log('Resources found:', resources);


    res.status(200).json({
      success: true,
      data: resources
    });

  } catch (error) {
    console.error('Get resources error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};
export const getResourcesByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const resources = await Resource.find({ category }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: resources
    });

  } catch (error) {
    console.error('Get resources by category error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
};

// Create new resource (Admin only)
export const createResource = async (req, res) => {
  try {
    const { title, url, category, description, type, featured } = req.body;

    const resource = new Resource({
      title,
      url,
      category,
      description: description || '',
      type: type || 'Website',
      featured: featured || false
    });

    const savedResource = await resource.save();

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
      message: 'Server error. Please try again later.'
    });
  }
};