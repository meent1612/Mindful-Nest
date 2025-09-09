import Resource from '../models/Resources.js';

// GET all resources (with filtering and pagination)
export const getResources = async (req, res) => {
  try {
    const { category, type, featured, page = 1, limit = 10, search } = req.query;
    let query = {};

    // Build query based on filters
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (type && type !== 'all') {
      query.type = type;
    }
    
    if (featured !== undefined) {
      query.featured = featured === 'true';
    }
    
    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    console.log('Database query:', query);

    // Pagination
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const resources = await Resource.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);
    
    const total = await Resource.countDocuments(query);

    console.log('Resources found:', resources.length);

    res.status(200).json({
      success: true,
      count: resources.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
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

// GET single resource by ID
export const getResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Resource ID requested:', id);

    const resource = await Resource.findById(id);
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    console.log('Resource found:', resource.title);

    res.status(200).json({
      success: true,
      data: resource
    });

  } catch (error) {
    console.error('Get resource by ID error:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid resource ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};

// GET resources by category
export const getResourcesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;
    
    console.log('Category requested:', category);

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const resources = await Resource.find({ category })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limitNum);
    
    const total = await Resource.countDocuments({ category });

    console.log('Resources found for category:', resources.length);

    res.status(200).json({
      success: true,
      count: resources.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
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

// POST create new resource
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

    // Check if URL already exists
    const existingResource = await Resource.findOne({ url });
    if (existingResource) {
      return res.status(409).json({
        success: false,
        message: 'Resource with this URL already exists'
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

// PUT update resource
export const updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Update resource ID:', id, 'Body:', req.body);

    const { title, url, category, description, type, featured } = req.body;

    // Check if resource exists
    const existingResource = await Resource.findById(id);
    if (!existingResource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    // Check if new URL conflicts with other resources
    if (url && url !== existingResource.url) {
      const urlExists = await Resource.findOne({ url, _id: { $ne: id } });
      if (urlExists) {
        return res.status(409).json({
          success: false,
          message: 'Another resource with this URL already exists'
        });
      }
    }

    const updatedResource = await Resource.findByIdAndUpdate(
      id,
      {
        ...(title && { title }),
        ...(url && { url }),
        ...(category && { category }),
        ...(description !== undefined && { description }),
        ...(type && { type }),
        ...(featured !== undefined && { featured })
      },
      { new: true, runValidators: true }
    );

    console.log('Resource updated:', updatedResource);

    res.status(200).json({
      success: true,
      message: 'Resource updated successfully',
      data: updatedResource
    });

  } catch (error) {
    console.error('Update resource error:', error);

    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid resource ID'
      });
    }

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

// DELETE resource
export const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Delete resource ID:', id);

    const resource = await Resource.findById(id);
    
    if (!resource) {
      return res.status(404).json({
        success: false,
        message: 'Resource not found'
      });
    }

    await Resource.findByIdAndDelete(id);
    console.log('Resource deleted:', resource.title);

    res.status(200).json({
      success: true,
      message: 'Resource deleted successfully',
      data: { id: resource._id, title: resource.title }
    });

  } catch (error) {
    console.error('Delete resource error:', error);

    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid resource ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};

// GET featured resources
export const getFeaturedResources = async (req, res) => {
  try {
    const { limit = 5 } = req.query;
    const limitNum = parseInt(limit);

    const resources = await Resource.find({ featured: true })
      .sort({ createdAt: -1 })
      .limit(limitNum);

    console.log('Featured resources found:', resources.length);

    res.status(200).json({
      success: true,
      count: resources.length,
      data: resources
    });

  } catch (error) {
    console.error('Get featured resources error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};