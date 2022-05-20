import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';

import API from 'utils/adminApi';
import { waiting } from 'utils/waiting';
import { BillTabGroup } from './BillTabGroup';


const convertPNK = (pnkList) => {
    let list = [];
    pnkList.map(pnk => {
        let isExist = false;

        list.map((val, index, arr) => {
            if (pnk.soHoaĐon === val.soHoaĐon && pnk.nhaCungCap === val.nhaCungCap) {
                let tmp = { ...pnk };
                delete tmp.soHoaĐon;
                delete tmp.nhaCungCap;
                arr[index].thongtin.push(tmp);
                isExist = true;
            }
        });

        if (!isExist) {
            let tmp = { soHoaĐon: pnk.soHoaĐon, nhaCungCap: pnk.nhaCungCap, thongtin: [] };
            delete pnk.soHoaĐon;
            delete pnk.nhaCungCap;
            tmp.thongtin.push(pnk);
            list.push(tmp);
        }
    });
    return list;
}



const FileUpload = ({ onSuccess }) => {
    // set focus tab
    const setIndexForBill = (confirmData = { pnk: [], hd: [] }) => {

        let newPNK = convertPNK(confirmData.pnk);

        newPNK.map((val, index, arr) => {

            arr[index].type = "PNK";
            arr[index].index = index;

        });


        confirmData.hd.map((val, index, arr) => {
            arr[index].type = "HD";
            arr[index].index = index;


        });

        let arr = [...confirmData.hd, ...newPNK]
        return arr;
    }

    const [confirmData, setConfirmData] = useState([]);
    const [arrayBill, setArrayBill] = useState(setIndexForBill());
    const [file, setFile] = useState([]);
    const [message, setMessage] = useState('');
    const [isOpenConfirm, hadOpenConfirm] = useState(false);



    // set file to upload
    const onChange = e => {
        let newFiles = [];
        for (let i = 0; i < e.target.files.length; i++) {
            const element = e.target.files[i];
            newFiles.push(element);
        }

        setFile(file.concat(newFiles));
    };

    //remove preview file

    const removeFile = (index) => {
        file.splice(index, 1);
        setFile([...file]);
    }



    //upload clicked 
    const onSubmit = async e => {


        e.preventDefault();
        const formData = new FormData();
        // formData.append('bank', "Vietcombank");
        formData.append('file', file[0]);

        API.importDisbursement(formData).then(({ data }) => {
            setArrayBill(setIndexForBill(data.data));
            hadOpenConfirm(true);

        }).catch((err) => {
            alert('Xin lỗi đã có lỗi trong quá trình xử lý !');
        })
    };

    // click "Xác nhận"
    const onConfirmData = () => {
        const body = {
            pnk: [],
            hd: []
        }
        arrayBill.map(val => {
            delete val.index;
            if (val.type === "HD") {
                delete val.type;
                body.hd.push(val);
            } else {
                delete val.type;
                body.pnk.push(val);
            }
        })

        API.exportDisbursement({ data: body }).then((res) => {
            let xlsx = URL.createObjectURL(new Blob([res.data], { type: "application/zip" }));
            onSuccess(xlsx);
        }).catch(err => {
            alert('Xin lỗi đã có lỗi trong quá trình xử lý !');
        });
    }

    return (
        <div>
            <Modal isOpen={isOpenConfirm} size='xl'>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => hadOpenConfirm(false)}>
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <h5 className="modal-title">Vui lòng xác nhận lại thông tin</h5>
                </div>
                <ModalBody>
                    <BillTabGroup originData={arrayBill} onModifyData={setArrayBill} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => hadOpenConfirm(false)}>
                        Hủy
                    </Button>
                    <Button color="primary" onClick={() => onConfirmData()}>
                        Xác nhận
                    </Button>
                </ModalFooter>
            </Modal>


            <form className='upload-container d-flex flex-column' onSubmit={onSubmit}>
                <div className='bg' />

                <div className='content'>
                    <div className='w-100 d-flex'>
                        <div className='select-bank btn-neutral'>
                            <select className='select-bank-content'>
                                <option>BIDV</option>
                                <option>Vietcombank</option>
                                <option>Techcombank</option>
                                <option>TP Bank</option>
                                <option>ACB</option>


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

        </div>
    );
};

export default FileUpload;
