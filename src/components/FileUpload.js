import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import API from 'utils/adminApi';


const FileUpload = ({ onSuccess }) => {
  const [file, setFile] = useState([]);
  const [filename, setFilename] = useState([]);
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(30);

  const onChange = e => {
    console.log(e.target.files.length)
    let newFilesName = [];

    let newFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const element = e.target.files[i];
      newFilesName.push(element.name);

      newFiles.push(element);
    }

    setFilename(newFilesName);
    setFile(newFiles);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('bank', "Vietcombank");
    // formData.append('file', file);

    try {
      const res = await API.generateExcel(formData);

      console.log(res.data)
      let xlsx = URL.createObjectURL(new Blob([res.data], { type: "image/jpg" }));

      onSuccess(xlsx);
      if (res.data.statusCode == 200) {
        // console.log('load templates ', response.data.data);
        // setTemplates(response.data.data);
        // setSelectedTemplate(response.data.data[0]);
        // let dataView = generateView(response.data.data[0]);
        // setDataTempleteArr(dataView);
        // // rendered
        // waiting.setWait(false);
      } else if (res.data.statusCode == 201) {

      } else {
        alert('Cant get Cabi !')
      }
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
      }
    }
  };

  return (
    <>
      <form className='upload-container' onSubmit={onSubmit}>
        <div className='bg' />

        <div className='content'>
          <div className='select-bank btn-neutral'>
            <select className='select-bank-content'>
              <option>- Chọn Ngân hàng -</option>
              <option>Vietcombank</option>

              <option>MB Bank</option>

              <option>BIDV</option>
            </select>
          </div>
          <div className='import-file btn-info'>
            <input
              id='customFile'
              type='file'
              className='import-file-input'
              onChange={onChange}
              multiple
            />
            <label className='import-file-label' htmlFor='customFile'>
              {filename.length === 0 ? 'Choose File' :
                filename.map(val => (
                  <div key={val}>
                    {val}
                    <button className='btn-icon btn btn-default btn-round'>
                      <i class="tim-icons icon-simple-remove"></i>
                    </button>
                  </div>
                ))

              }
            </label>
          </div>
          {filename.length > 0 ? <>

            <input
              type='submit'
              value='Upload'
              className='btn btn-primary btn-block mt-4'
            /></>
            : undefined}
        </div>
      </form>
    </>
  );
};

export default FileUpload;
