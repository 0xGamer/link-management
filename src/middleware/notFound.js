function notFound(req, res) {
	const err = `Not Found: ${req.originalUrl}`
	res.status(404).json({err})
}

module.exports = notFound