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

export const login = async (formData) => {
  const res = await axios.post('http://localhost:5000/login', formData);
  if(res.data.status === 'success'){
    localStorage.setItem('id', res.data.user.id);
    localStorage.setItem('user_name', res.data.user.user_name);
    localStorage.setItem('correo', res.data.user.correo);
    localStorage.setItem('tipo', res.data.user.tipo_usuario);
    return true;
  }else{
    console.log("Error al hacer login: ", res.data.message);
    return false;
  }
}

export const isLoggedIn = () =>{
  if(localStorage.getItem('id') !== null){
    return true;
  }
  return false;
}

export const register = async (formData) => {
  const res = await axios.post('http://localhost:5000/nuevo-usuario', formData);
  if(res.data.status === 'success'){
    //*Se hace login automatico
    let form = new FormData();
    form.append('user_name', formData.get('user_name'));
    form.append('password', formData.get('password'));
    let ans = await login(form);
    if(ans){
      return true;
    }
    console.log("Error al hacer login");
    return false;
  }else{
    console.log("Error al hacer el registro: ", res.data.message);
    return false;
  }
}