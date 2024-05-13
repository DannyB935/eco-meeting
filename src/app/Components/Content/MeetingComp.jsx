'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { getPosts, isLoggedIn} from '@/lib/utils';

import NewPostModal from '../NewPostModal';
import EditPostModal from '../EditPostModal';
import TarjetaPost from '../TarjetaPost';

const MeetingComp = () => {

  const [meetingModal, setMeetingModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  const [idPost, setIdPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handleMeetingModal = () => {
    console.log("Modal abierto");
    setMeetingModal(!meetingModal);
  }

  const handleEditPostModal = () =>{
    setEditPostModal(!editPostModal);
    const getData = async () => {
      let res = await getPosts();
      if(res !== null){
        setPosts(res);
      }
    }
    getData();
  }

  const handleNewPost = async (form) =>{
    try{
      const res = await axios.post('http://localhost:5000/new-post', form);
      if(res.data.status == 'success'){
        console.log("Post creado");
        let newPosts = await getPosts();
        setPosts(newPosts);
        return true;
      }
      return false;
    }catch(e){
      console.log("Error al hacer la publicacion: ", e);
    }
  }

  const getPostId = (id) => {
    setIdPost(id);
    handleEditPostModal();
  }

  const reloadPosts = async () => {
    const loadPosts = await getPosts();
    if(loadPosts !== null){
      setPosts(loadPosts);
    }
  }

  useEffect(()=>{
    try{
      const getData = async () => {
        let res = await getPosts();
        if(res !== null){
          setPosts(res);
        }
      }
      getData();
    }catch(e){
      console.log('Error al obtener los posts: ', e);
    }
  },[]);

  return(
    <div className="flex flex-col flex-grow justify-center items-center">
      <div className="container mainWall flex-col h-full md:rounded-xl md:shadow-xl md:my-2">
        { isLoggedIn() ? (
          <div className="flex justify-center p-4 md:p-8 my-4 items-center">
            <span className="mx-4">Nueva publicacion:</span> 
            <button onClick={()=>handleMeetingModal()} className="rounded-md mainBtn w-full p-2 shadow-lg hover:shadow-xl transition-transform duration-500 hover:scale-110 md:w-32"><i className="bi bi-plus text-2xl"></i></button>
          </div>) :(
          <div className="flex justify-center p-4 md:p-8 my-4">
            <span>Para realizar una publicacion, inicia sesion</span>
          </div>
        )}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 mx-2 p-4 md:p-2">
          {/* *El col-span es uno si y dos no */}
          
          {
            posts.map((post, index) => {
              return(
                <TarjetaPost key={index} id={post.id} title={post.titulo} date={post.created_at} descrip={post.descripcion} id_user={post.id_usuario} cat={post.categoria} link={post.link} interesados={post.interesados} getPostId={getPostId} loadPosts={reloadPosts}/>
              )
            })
          }

        </div>
      </div>
      {meetingModal && <NewPostModal openModal={handleMeetingModal} handleNewPost={handleNewPost}/>}
      {editPostModal && <EditPostModal openModal={handleEditPostModal} id={idPost}/>}
    </div>
  );
};

export default MeetingComp;