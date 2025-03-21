exports.errorHandler = (err, req, res, next) => {
    console.error('⚠️ Error:', err.stack);
  
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Terjadi kesalahan pada server.';
  
    res.status(statusCode).json({
      success: false,
      error: message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  };