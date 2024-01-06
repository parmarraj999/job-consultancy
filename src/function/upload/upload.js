import React, { useState } from 'react';
import "./upload.css"
import { db, storage } from '../../firebase/firebaseConfig';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { ref } from 'firebase/storage';
import { addDoc, collection } from "firebase/firestore"

const Upload = (props) => {

  const [path,setPath] = useState("album")
  const [title,setTitle] = useState()
  const [file, setFile] = useState(null)
  const [imgUrl,setImageUrl] = useState();

  function handleFile(event) {
    setFile(event.target.files[0])
  }


  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }


  // main function 
  const handleUpload = async(e)=>{
    e.preventDefault();
    console.log("clicked")
    if(file !== null){
      const imageRef = ref(storage, `/${path}/${file?.name}`)
      uploadBytes(imageRef,file).then((snapshot)=>{
        console.log("success")
        getDownloadURL(imageRef)
        .then((url)=>{
          console.log("url",url)
          setImageUrl(url)
        })
      })
      const docRef = await addDoc(collection(db, `/${path}/`), {
        imgUrl :imgUrl,
        title: title
      })
      console.log("succesfull data upload to database")
    }
    else{
      console.log("file not found")
    }

  }

  return (
    <div className='upload_form_container' >
      <div className='upload_form' >
        <h2>Upload Image</h2>
        <input type='file' className='file_input' onChange={handleFile}
        />
        <input type='text' placeholder='enter title' className='title_input' onChange={handleTitle}/>
        <p>Save Image to : {path}</p>
        <div style={{display:"flex",gap:".8rem"}} className='checkbox'>   
          <button
          onClick={()=>setPath("Album")}
          >Album</button>
          <button
          onClick={()=>setPath("Achievement")}
          >Achievement</button>
        </div>
        <div style={{ display: "flex", gap: ".8rem" }} >
          <button
          onClick={handleUpload}
          >Upload</button>
          <button style={{ background: "grey" }}
            onClick={() => props.setShowForm(false)}
          >cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
