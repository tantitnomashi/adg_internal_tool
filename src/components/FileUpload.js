import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import API from 'utils/adminApi';


const FileUpload = ({ onSuccess }) => {
  const [file, setFile] = useState([]);
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(30);

  const onChange = e => {
    let newFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      const element = e.target.files[i];
      newFiles.push(element);
    }

    setFile(file.concat(newFiles));
  };

  const removeFile = (index) => {
    file.splice(index, 1);
    setFile([...file]);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('bank', "Vietcombank");
    // formData.append('file', file);

    try {







      const res = await API.generateExcel(formData);

      console.log(res.data)
      let xlsx = URL.createObjectURL(new Blob([res.data], { type: "image/jpg", }));

      onSuccess(xlsx);
      // if (res.data.statusCode == 200) {
      //   // console.log('load templates ', response.data.data);
      //   // setTemplates(response.data.data);
      //   // setSelectedTemplate(response.data.data[0]);
      //   // let dataView = generateView(response.data.data[0]);
      //   // setDataTempleteArr(dataView);
      //   // // rendered
      //   // waiting.setWait(false);
      // } else if (res.data.statusCode == 201) {

      // } else {
      //   alert('Cant get Cabi !')
      // }
    } catch (err) {
      if (err.response.status === 500) {
        setMessage('There was a problem with the server');
      } else {
      }
    }
  };

  return (
    <>
      <form className='upload-container d-flex flex-column' onSubmit={onSubmit}>
        <div className='bg' />

        <div className='content'>
          <div className='w-100 d-flex'>
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
              <label className='import-file-label d-flex flex-column' htmlFor='customFile'>
                Chọn File
              </label>
            </div>
            {file.length > 0 && (
              <div>
                {file.map((val, index) => (
                  <div className='text-dark my-1 d-flex align-items-center' key={val.name}>
                    <div className='filename'>{val.name}</div>
                    <button onClick={() => removeFile(index)} className='btn-remove-file p-0 mx-2 btn-icon btn-default btn-round'>
                      <i className="tim-icons icon-simple-remove"></i>
                    </button>
                  </div>
                ))}

              </div>
            )}

          </div>


          <div className='w-100'>
            {file.length > 0 ? <>

              <input
                type='submit'
                value='Upload'
                className='btn btn-primary btn-block mt-4 py-4'
              /></>
              : undefined}
          </div>
        </div>
      </form>
    </>
  );
};

export default FileUpload;
