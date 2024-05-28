const createBlogs = (req, res) => {
    res.status(200).json({ message: "Blog Created succesfully" , data: [] });
};

const getBlogById = (req, res) => {
    res.status(200).json({ message: "Get Blog By ID success" , data: [] });
};
const getBlogs = (req, res) => {
    res.status(200).json({ message: "Blogs retrieved succesfully" , data: [] });
};
const getBlogByCategoryId = (req, res) => {
    res.status(200).json({ message: "Get Blog by CategoryID succesfully" , data: [] });
};
const updateBlogById = (req, res) => {
    res.status(200).json({ message: "Blog Updated succesfully" , data: [] });
};
const deleteBlogById = (req, res) => {
    res.status(200).json({ message: "Blog Deleted succesfully" , data: [] });
};
module.exports = {
    createBlogs,
    getBlogById,
    getBlogs,
    getBlogByCategoryId,
    updateBlogById,
    deleteBlogById
};