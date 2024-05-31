

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


const createBlog = async (blog) => {
    const response = await fetch("http://localhost:8000/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };

  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:8000/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };
  const fetchBlogById = async (id) => {
    const response = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };
  const fetchBlogsByCategoryId = async (categoryId) => {
    const response = await fetch(
      "http://localhost:8000/api/blogs/category/" + categoryId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };
  const fetchBlogsByAuthorId = async (authorId) => {
  const response = await fetch(
    "http://localhost:8000/api/blogs/author/" + authorId,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    let res = await response.json();
    throw res;
  }

  const responseData = await response.json();
  return responseData;
};

const updateBlog = async (blog) => {
    const response = await fetch("http://localhost:8000/api/blogs/" + blog.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };
  const deleteBlogsById = async (id) => {
    const response = await fetch("http://localhost:8000/api/blogs/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      let res = await response.json();
      throw res;
    }
  
    const responseData = await response.json();
    return responseData;
  };

const blogService = {
    createBlog,
    fetchBlogs,
    fetchBlogById,
    fetchBlogsByCategoryId,
    fetchBlogsByAuthorId,
    updateBlog,
    deleteBlogsById,
  };

export default blogService;