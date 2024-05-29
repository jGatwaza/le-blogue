

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


async function createBlog(blog) {
    try {
        const response = await fetch('https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',      
            },
            body: blog
        }
        );
        const blogsApidata = await response.json();
        return blogsApidata.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

async function updateBlog(id) {
    try {
        const response = await fetch('https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs', 
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',      
            },
            body: id
        }
        );
        const blogsApidata = await response.json();
        return blogsApidata.data;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};
async function deleteBlog(id) {
    try {
        const response = await fetch('https://ix-blog-app-2d5c689132cd.herokuapp.com/api/blogs', 
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',      
            },
            body: id
        }
        );
        const blogsApidata = await response.json();
        return blogsApidata.data;
    } catch (error) {
        console.error('Error Deleting blog posts:', error);
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
    getBlogs, getCategories, createBlog, updateBlog, deleteBlog
}

export default blogService;