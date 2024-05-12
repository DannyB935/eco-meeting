import axios from "axios";

export const getTips = async () => {
  const res = await axios.get('http://localhost:5000/tips');
  if(res.data.status === 'success'){
    return res.data.tips;
  }else{
    console.log("Error al obtener los tips: ",res.data.message);
    return null;
  }
}

export const getPosts = async () => {
  const res = await axios.get('http://localhost:5000/posts');
  if(res.data.status === 'success'){
    res.data.posts.map((post)=>{
      return post.created_at = new Date(post.created_at).toLocaleDateString();
    });
    return res.data.posts;
  }else{
    console.log("Error al obtener los posts: ",res.data.message);
    return null;
  }
}
