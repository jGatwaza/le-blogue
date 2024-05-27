

async function getBlogs() {
    try {
        const response = await fetch('https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',      
            }
        }
        );
        const blogsApidata = await response.json();
        return blogsApidata.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};
async function getCategories() {
    try {
        const response = await fetch('https://ix-blog-app-2d5c689132cd.herokuapp.com/api/categories', 
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',      
            }
        }
        );
        const blogsApidata = await response.json();
        return blogsApidata.data;
    } catch (error) {
        console.error('Error fetching Categories:', error);
        throw error;
    }
};

const blogService = {
    getBlogs, getCategories
}

export default blogService;