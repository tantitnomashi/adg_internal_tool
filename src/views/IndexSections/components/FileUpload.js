import classNames from 'classnames';
import React, { useState } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';

import API from 'utils/adminApi';

let demoData = {
    pnk: [
        {
            "A": "1",
            "B": "Hạt nhựa HDPE HD7000F",
            "C": "HDPE-TH 7000F",
            "D": "Kg",
            "1": "33550",
            "2": "",
            "3": "32410000",
            "4": "1087355500",
            type: "PNK",
        }, {
            "A": "3",
            "B": "Hạt nhựa HDPE HD7000F",
            "C": "HDPE-TH 7000F",
            "D": "Kg",
            "1": "33550",
            "2": "",
            "3": "32410000",
            "4": "1087355500",
            type: "PNK",
        }, {
            "A": "2",
            "B": "Hạt nhựa HDPE HD7000F",
            "C": "HDPE-TH 7000F",
            "D": "Kg",
            "1": "33550",
            "2": "",
            "3": "32410000",
            "4": "1087355500",
            type: "PNK",
        }
    ],
    hd: [

        {
            "accountingDate": "2022/02/23",
            "documentNumber": "A12341",
            "dayVouchers": "2022/02/23",
            "someVills": "dA0092",
            "supplier": "Hoa Nhua Sai gon",
            "explain": "HNSG mua nhu ABS 0012 ",
            "totalAmountOfGoods": "978787878787",
            "discount": "5455",
            "vatAmount": "2224",
            "totalPayment": "8999988",
            "purchaseCosts": "76767867",
            "inventoryValue": "34234",
            "receiveInvoice": "Nhận hóa đơn",
            "isThePurchaseCost": "X",
            "typeOfDocument": "CSK",
            "preCustomsFee": "312312.4",
            "importTax": "3123",
            "specialExciseTax": "2338.2232.21",
            type: "HD",
        },
        {
            "accountingDate": "2022/02/23",
            "documentNumber": "A12341",
            "dayVouchers": "2022/02/23",
            "someVills": "dA0092",
            "supplier": "Hoa Nhua Sai gon",
            "explain": "HNSG mua nhu ABS 0012 ",
            "totalAmountOfGoods": "978787878787",
            "discount": "5455",
            "vatAmount": "2224",
            "totalPayment": "8999988",
            "purchaseCosts": "76767867",
            "inventoryValue": "34234",
            "receiveInvoice": "Nhận hóa đơn",
            "isThePurchaseCost": "X",
            "typeOfDocument": "CSK",
            "preCustomsFee": "312312.4",
            "importTax": "3123",
            "specialExciseTax": "2338.2232.21",
            type: "HD",
        }
    ]
}
const DataView = ({ originValue, onChange }) => {
    const [changeMode, setChangeMode] = useState(false);
    const [val, setVal] = useState(originValue);

    const onChangeValue = () => {
        // onChange();
    }

    if (changeMode) {
        return (
            <div className="d-flex bill-value">

                <Input className="flex-fill rounded-0 text-dark py-0 h-auto " type="text"
                    value={val}
                    onChange={({ target: { value } }) => setVal(value)} />

                <button className="btn-simple p-0 px-2 rounded-0 h-auto" color="primary" size="sm"
                    onClick={() => {
                        setChangeMode(false);
                        onChangeValue();
                    }}>
                    <i className="tim-icons icon-check-2" />
                </button>
            </div>
        )
    } else {
        return (
            <div className="d-flex bill-value">
                <div className="flex-fill">
                    {originValue !== val ?
                        <>
                            <span className="text-info">{val}</span>
                        </> :
                        originValue
                    }
                </div>
                <button className="btn-link p-0 px-2" color="primary" size="sm"
                    onClick={() => {
                        setChangeMode(true);
                    }}>
                    <i className="tim-icons icon-pencil" />
                </button>
            </div>
        )
    }

}

const UnknowTab = ({ isVisible = true, data }) => {

    return (
        <Table className={classNames({ "d-none": !isVisible })}>
            <thead>
                <tr>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='font-weight-bold'>STT</td>
                    <td className="text-center">
                        <DataView originValue={data["A"]} />
                    </td>
                    <td className='font-weight-bold'>Tên hàng hóa</td>
                    <td className="text-center">
                        <DataView originValue={data["B"]} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Mã số</td>
                    <td className="text-center">
                        <DataView originValue={data["C"]} />
                    </td>
                    <td className='font-weight-bold'>Đơn vị</td>
                    <td className="text-center">
                        <DataView originValue={data["D"]} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Số lượng theo chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data["1"]} />
                    </td>
                    <td className='font-weight-bold'>Số lượng thực nhập </td>
                    <td className="text-center">
                        <DataView originValue={data["2"]} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Đơn giá </td>
                    <td className="text-center"
                    ><DataView originValue={data["3"]} />
                    </td>
                    <td className='font-weight-bold'>Thành tiền</td>
                    <td className="text-center">
                        <DataView originValue={data["4"]} />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

const BillTab = ({ isVisible = true, data, dataModified }) => {

    return (
        <Table className={classNames({ "d-none": !isVisible })}>
            <thead>
                <tr>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='font-weight-bold'>Ngày hạch toán</td>
                    <td className="text-center">
                        <DataView originValue={data.accountingDate} />
                    </td>
                    <td className='font-weight-bold'>Số chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.documentNumber} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Ngày chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.dayVouchers} />
                    </td>
                    <td className='font-weight-bold'>Số hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data.someVills} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Nhà cung cấp</td>
                    <td className="text-center">
                        <DataView originValue={data.supplier} />
                    </td>
                    <td className='font-weight-bold'>Diễn giải</td>
                    <td className="text-center">
                        <DataView originValue={data.explain} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tổng tiền hàng</td>
                    <td className="text-center"
                    ><DataView originValue={data.totalAmountOfGoods} />
                    </td>
                    <td className='font-weight-bold'>Tiền chiết khấu</td>
                    <td className="text-center">
                        <DataView originValue={data.discount} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tiền thuế GTGT</td>
                    <td className="text-center">
                        <DataView originValue={data.vatAmount} />
                    </td>
                    <td className='font-weight-bold'>Tổng tiền thanh toán</td>
                    <td className="text-center">
                        <DataView originValue={data.totalPayment} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Chi phí mua hàng</td>
                    <td className="text-center">
                        <DataView originValue={data.purchaseCosts} />
                    </td>
                    <td className='font-weight-bold'>Giá trị nhập kho</td>
                    <td className="text-center">
                        <DataView originValue={data.inventoryValue} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Nhận hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data.receiveInvoice} />
                    </td>
                    <td className='font-weight-bold'>Là chi phí mua hàng</td>
                    <td className="text-center">
                        <DataView originValue={data.isThePurchaseCost} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Loại chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.typeOfDocument} />
                    </td>
                    <td className='font-weight-bold'>Phí trước hải quan</td>
                    <td className="text-center">
                        <DataView originValue={data.preCustomsFee} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tiền thuế NK</td>
                    <td className="text-center">
                        <DataView originValue={data.importTax} />
                    </td>
                    <td className='font-weight-bold'>Tiền thuế TTĐB</td>
                    <td className="text-center">
                        <DataView originValue={data.specialExciseTax} />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

const BillTabGroup = ({ orginData = {}, dataModified = [], onModifyData = () => { } }) => {

    const setIndexForBill = () => {
        let arr = [...orginData.pnk, ...orginData.hd];
        let indexBill = 0;
        let indexUnknowBill = 0;
        arr = arr.map((val, index) => {
            if (val.type === "HD") {
                indexBill++;
                return ({
                    ...val,
                    index: indexBill
                });
            } else {
                indexUnknowBill++;
                return ({
                    ...val,
                    index: indexUnknowBill
                });
            }
        });
        return arr;
    }

    const [billIndexSelected, setBillSelected] = useState(0);
    const [arrayBill, setArrayBill] = useState(setIndexForBill());
    
    const removeInvoice = (index) => {
        console.log(index);
        arrayBill.splice(index, 1);
        setArrayBill([...arrayBill]);
    }
    return (
        <div className='confirm-table'>
            <div className='d-flex align-items-end tabs'>
                {arrayBill.map((val, index) => (
                    <div
                        className={classNames("tab", { tabActive: billIndexSelected === index })}
                        onClick={() => setBillSelected(index)}>
                        {val.type === "HD" ? "Hóa đơn" : "PNK"} {val.index}
                        <button onClick={() => removeInvoice(index)} className='btn-remove-file p-0 mx-1 btn-icon btn-default btn-round'>
                            <i className="tim-icons icon-simple-remove"></i>
                        </button>
                    </div>
                ))}
            </div>
            <Container className='tab-detail'>
                {arrayBill.map((val, index) => {
                    if (val.type === "HD") {
                        return (
                            <BillTab key={index} data={val} isVisible={billIndexSelected === index} />
                        )
                    }
                    return (
                        <UnknowTab key={index} data={val} isVisible={billIndexSelected === index} />
                    )
                })}
            </Container>
        </div>
    )
}



const FileUpload = ({ onSuccess }) => {
    const [editConfirm, setEditConfirm] = useState([]);
    const [file, setFile] = useState([]);
    const [message, setMessage] = useState('');
    const [isOpenConfirm, hadOpenConfirm] = useState(false);

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
            hadOpenConfirm(true);
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


    const onConfirmData = () => {
        API.generateExcel().then((res) => {
            hadOpenConfirm(false);
            let xlsx = URL.createObjectURL(new Blob([res.data], { type: "image/jpg" }));
            onSuccess(xlsx);
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
                    <BillTabGroup orginData={demoData} dataModified={editConfirm} onModifyData={setEditConfirm} />
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

        </div>
    );
};

export default FileUpload;
