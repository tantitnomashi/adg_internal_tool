import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table, FormGroup } from 'reactstrap';
import Datetime from 'react-datetime';
import moment from 'moment';

import API from 'utils/adminApi';
import { waiting } from 'utils/waiting';
import { BillTabGroup } from './BillTabGroup';
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import { tokenToString } from 'typescript';


const convertPNK = (pnkList) => {
    let list = [];
    pnkList?.map(pnk => {
        let isExist = false;

        list?.map((val, index, arr) => {
            if (pnk.soHoaDon === val.soHoaDon && pnk.nhaCungCap === val.nhaCungCap) {
                let tmp = { ...pnk };
                delete tmp.soHoaDon;
                delete tmp.nhaCungCap;
                arr[index].thongtin.push(tmp);
                isExist = true;
            }
        });

        if (!isExist) {
            let tmp = { soHoaDon: pnk.soHoaDon, nhaCungCap: pnk.nhaCungCap, thongtin: [] };
            delete pnk.soHoaDon;
            delete pnk.nhaCungCap;
            tmp.thongtin.push(pnk);
            list.push(tmp);
        }
    });
    return list;
}

const convertToOriginalPNK = (pnkList) => {
    let list = [];
    pnkList.map(pnk => {
        let infoMap = pnk.thongtin;
        infoMap?.map((val, index, arr) => {

            let tmp = val;
            tmp.soHoaDon = pnk.soHoaDon;
            tmp.nhaCungCap = pnk.nhaCungCap;
            list.push(tmp)

        });
    });
    return list;
}


const FileUpload = ({ onSuccess }) => {

    let TKHQlist = [
        {
            "soToKhai": "104722599000",
            "tenCoQuanHaiQuanTiepNhanToKhai": "Chi cục HQ CK cảng Hải Phòng KV III",
            "tongTienThuePhaiNop": "759002400",
            "ngayDangKy": "19/05/2022"
        },
        {
            "soToKhai": "104722620700",
            "tenCoQuanHaiQuanTiepNhanToKhai": "Chi cục HQ CK cảng Hải Phòng KV III",
            "tongTienThuePhaiNop": "198437175",
            "ngayDangKy": "19/05/2022"
        },
        {
            "soToKhai": "104722519750",
            "tenCoQuanHaiQuanTiepNhanToKhai": "Chi cục HQ CK cảng Hải Phòng KV III",
            "tongTienThuePhaiNop": "536112000",
            "ngayDangKy": "19/05/2022"
        }
    ];
    // set focus tab
    const setIndexForBill = (confirmData = { pnk: [], hd: [], tkhq: [] }) => {
        //convert PNk from Backend to PNK on UI
        let newPNK = [];
        if (confirmData.pnk?.length > 0) {
            newPNK = convertPNK(confirmData.pnk);

            newPNK?.map((val, index, arr) => {
                arr[index].type = "PNK";
                arr[index].index = index;
            });

        }


        confirmData.hd?.map((val, index, arr) => {
            arr[index].type = "HD";
            arr[index].index = index;
        });
        confirmData.hd = confirmData.hd || [];

        let toKhaiTab = {};
        toKhaiTab.list = confirmData.tkhq;
        toKhaiTab.type = "TKHQ";


        let arr = [...confirmData.hd, ...newPNK];

        if (confirmData.tkhq !== undefined) {
            arr.push(toKhaiTab);
        }
        console.log(new Date(), arr);
        return arr;
    }

    const [arrayBill, setArrayBill] = useState(setIndexForBill());
    const [file, setFile] = useState([]);
    const [isOpenConfirm, hadOpenConfirm] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [fileDate, setFileDate] = useState(moment().format("DD/MM/YYYY"));
    const [contractNumber, setContractNumber] = useState(0);
    const [bank, setBank] = useState("bidv");


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

    //onChange Datetime Picker
    const onChangeDateTime = e => {
        setFileDate(moment(e).format("DD/MM/YYYY"));
        // console.log(moment(e).format("DD/MM/YYYY"));

    }
    //onChange Contract number
    const onChangeContractNumber = e => {
        setContractNumber(e.target.value);
        // console.log(e.target.value);

    }
    //onChange bank
    const onChangeBank = e => {
        setBank(e.target.value);
        // console.log(e.target.value);

    }



    //upload clicked 
    const onSubmit = async e => {
        setWaiting(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file[0]);
        let params = { 'bank': bank }
        API.importDisbursement(params, formData)
            .then(({ data }) => {
                setWaiting(false);
                let newData = setIndexForBill(data.data);

                setArrayBill(newData);
                hadOpenConfirm(true);

                API.sendMessage(bank?.toUpperCase() + " - IMPORT - Successful").catch(() => { });

            })
            .catch((err) => {
                alert('Có lỗi trong quá trình Upload dữ liệu!');
                setWaiting(false);
                API.sendMessage(bank?.toUpperCase() + " - IMPORT - Failed").catch(() => { });
            })
    };

    // click "Xác nhận"
    const onConfirmData = () => {
        hadOpenConfirm(false);
        setWaiting(true);
        //loading
        const body = {
            pnk: [],
            hd: [],
            tkhq: [],
            fileDate: fileDate,
            contractNumber: contractNumber
        }
        arrayBill.map(val => {
            delete val.index;
            if (val.type === "HD") {
                delete val.type;
                body.hd.push(val);
            } else if ((val.type === "TKHQ")) {
                delete val.type;
                val.list.map(tkhq => body.tkhq.push(tkhq));

            }
            else {
                delete val.type;
                body.pnk.push(val);
            }

        })


        let originalPNK = convertToOriginalPNK(body.pnk);
        body.pnk = originalPNK;
        body.bank = bank;
        console.log("prepare");
        console.log(body);


        API.exportDisbursement({ data: body }).then((res) => {
            console.log(res);
            let xlsx = URL.createObjectURL(new Blob([res.data], { type: "application/zip" }));
            API.sendMessage(bank?.toUpperCase() + " - EXPORT - Successful").catch(() => { });
            onSuccess(xlsx, fileDate);
            // stop loading
        }).catch(err => {
            // alert('Có lỗi trong quá trình giải ngân hồ sơ !');
            alert(err);
            API.sendMessage(bank?.toUpperCase() + " - EXPORT - Failed").catch(() => { });

            setWaiting(false);
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


                    <FormGroup className='mr-4 pr-4'>
                        <div className='row'>
                            <Input className='form-control text-dark col-md-4' name='contractNumber' onChange={onChangeContractNumber} type='number' placeholder='Số hồ sơ' />
                            <div className='col-md-8'>
                                <Datetime
                                    timeFormat={false} onChange={onChangeDateTime}
                                    inputProps={{ placeholder: "Chọn ngày giải ngân", className: "text-dark form-control text-center mr-2 " }}
                                />
                            </div>
                        </div>


                    </FormGroup>
                </div>
                <ModalBody className='pt-0'>
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


            <form className='upload-container ' onSubmit={onSubmit}>
                <div className='bg' />

                <LoadingMask loading={waiting} className={"w-100 h-100"}>
                    <div className='content d-flex flex-column'>
                        <div className='w-100 d-flex'>
                            <div className='select-bank btn-neutral'>
                                <select onChange={onChangeBank} className='select-bank-content'>
                                    <option value="bidv">BIDV</option>
                                    <option value="vietin">Vietinbank</option>
                                    <option value="mb">MB</option>
                                    <option value="bidv">Vietcombank</option>
                                    <option value="bidv">ACB</option>
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
                </LoadingMask>

            </form>
        </div >
    );
};

export default FileUpload;
