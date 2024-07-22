import React, { useState } from 'react';
import './Add.css'; // Import the CSS file
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';


function TextEditor() {
  const navigate = useNavigate();
  const [newsDetails, setNewsDetails] = useState({
    headline: "",
    place: "",
    content: "",
    image:"",
    category:"",
    timestamp:""
  });


  const [activeEditor, setActiveEditor] = useState(null);

  const handlleInputChange = (value,field)=>{
    setNewsDetails({
      ...newsDetails,
      [field]:value,
    });
  };

  // handle submit
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(newsDetails);
  }

  // toolbar
  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }], // Add color and background color
      ['link', 'image'],
      [{ 'align': [] }],
    ],
  };
  return (
    <>
   <div className='container w-50 mt-5'>
        <div className='py-5 shadow-lg px-3'>
          <h1 className='pb-3'>Add News</h1>
          <form onSubmit={handleSubmit}>
            {/* title */}
            <div 
            className="pb-3 input-box"
            onMouseEnter={() => setActiveEditor('headline')}
            onMouseLeave={() => setActiveEditor(null)}
          >
            <ReactQuill
              value={newsDetails.headline}
              onChange={(value) => handlleInputChange(value, 'headline')}
              theme="snow"
              modules={modules}
              placeholder="Headline"
              className={`editor ${activeEditor === 'headline' ? 'show-toolbar' : 'hide-toolbar'}`}
            />
             
          </div>
             
          
            {/* place */}
            <div 
            className="pb-3 input-box"
            onMouseEnter={() => setActiveEditor('place')}
            onMouseLeave={() => setActiveEditor(null)}
          >
            <ReactQuill
              value={newsDetails.place}
              onChange={(value) => handlleInputChange(value, 'place')}
              theme="snow"
              modules={modules}
              placeholder="Place"
              className={`editor ${activeEditor === 'place' ? 'show-toolbar' : 'hide-toolbar'}`}
            />
          </div>
            {/* content */}
            <div 
            className="pb-3 input-box"
            onMouseEnter={() => setActiveEditor('content')}
            onMouseLeave={() => setActiveEditor(null)}
          >
            <ReactQuill
              value={newsDetails.content}
              onChange={(value) => handleInputChange(value, 'content')}
              theme="snow"
              modules={modules}
              placeholder="Content"
              className={`editor ${activeEditor === 'content' ? 'show-toolbar' : 'hide-toolbar'}`}
            />
          </div>
            {/* image upload */}
            <div className='d-flex justify-content-center border px-5 py-2'>
              <label htmlFor="profileImg">
                <input id='profileImg' type="file" style={{ display: 'none' }} />
                <img src="https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" className="card-img-top ps-4" alt="Upload" style={{ width: "140px" }} />
                <p className='fs-3 text-primary text-center'>Upload Image</p>
              </label>
            </div>
            {/* category selection */}
            <div className='pb-3'>
              <select className="form-select" aria-label="Default select example">
                <option selected>Category</option>
                <option value={1}>Sports</option>
                <option value={2}>Business</option>
                <option value={3}>Politics</option>
              </select>
            </div>
          
            {/* button */}
            <div className='d-flex flex-row justify-content-between'>
            <button className='btn btn-warning px-5 py-3'>cancel</button>
            <button className='btn btn-success px-5 py-3'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default TextEditor