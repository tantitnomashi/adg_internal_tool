import classNames from 'classnames';
import React, { Fragment, useState } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';

import API from 'utils/adminApi';

let tmpConfirmData = [
    {
        "accountingDate": "Ngày hạch toán",
        "documentNumber": "Số chứng từ",
        "dayVouchers": "Ngày chứng từ",
        "someVills": "Số hóa đơn",
        "supplier": "Nhà cung cấp",
        "explain": "Diễn giải",
        "totalAmountOfGoods": "Tổng tiền hàng",
        "discount": "Tiền chiết khấu",
        "vatAmount": "Tiền thuế GTGT",
        "totalPayment": "Tổng tiền thanh toán",
        "purchaseCosts": "Chi phí mua hàng",
        "inventoryValue": "Giá trị nhập kho",
        "receiveInvoice": "Nhận hóa đơn",
        "isThePurchaseCost": "Là chi phí mua hàng",
        "typeOfDocument": "Loại chứng từ",
        "preCustomsFee": "Phí trước hải quan",
        "importTax": "Tiền thuế NK",
        "specialExciseTax": "Tiền thuế TTĐB",
        "documentNumber": "Số chứng từ (Sổ QT)",
    },
    {
        "accountingDate": "0",
        "documentNumber": "0",
        "dayVouchers": "0",
        "someVills": "0",
        "supplier": "0",
        "explain": "0",
        "totalAmountOfGoods": "0",
        "discount": "0",
        "vatAmount": "0",
        "totalPayment": "0",
        "purchaseCosts": "0",
        "inventoryValue": "0",
        "receiveInvoice": "0",
        "isThePurchaseCost": "0",
        "typeOfDocument": "0",
        "preCustomsFee": "0",
        "importTax": "0",
        "specialExciseTax": "0",
        "documentNumber": "0",
    }
]
const DataView = ({ originValue, onChange }) => {
    const [changeMode, setChangeMode] = useState(false);
    const [val, setVal] = useState(originValue);

    const onChangeValue = () => {
        // onChange();
    }

    if (changeMode) {
        return (
            <div className="d-flex">

                <Input className="flex-fill rounded-0 text-dark py-0 " type="text"
                    value={val}
                    onChange={({ target: { value } }) => setVal(value)} />

                <button className="btn-simple p-0 px-2 rounded-0" color="primary" size="sm"
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
            <div className="d-flex w-100">
                <div className="flex-fill">
                    {originValue !== val ?
                        <>
                            <span className="text-danger">{originValue}</span>
                            &nbsp;&rarr;&nbsp;
                            <span className="text-success">{val}</span>
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


const BillTab = ({ isVisible = true, data, dataModified }) => {

    return (
        <Table className={classNames({ "d-none": isVisible })}>
            <thead>
                <tr>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ngày hạch toán</td>
                    <td className="text-center">
                        <DataView originValue={data.accountingDate} valueChanged={dataModified.accountingDate} />
                    </td>
                </tr>
                <tr>
                    <td>Số chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.documentNumber} valueChanged={dataModified.documentNumber} />
                    </td>
                </tr>
                <tr>
                    <td>Ngày chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.dayVouchers} valueChanged={dataModified.dayVouchers} />
                    </td>
                </tr>
                <tr>
                    <td>Số hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data.someVills} valueChanged={dataModified.someVills} />
                    </td>
                </tr>
                <tr>
                    <td>Nhà cung cấp</td>
                    <td className="text-center">
                        <DataView originValue={data.supplier} valueChanged={dataModified.supplier} />
                    </td>
                </tr>
                <tr>
                    <td>Diễn giải</td>
                    <td className="text-center">
                        <DataView originValue={data.explain} valueChanged={dataModified.explain} />
                    </td>
                </tr>
                <tr>
                    <td>Tổng tiền hàng</td>
                    <td className="text-center"
                    ><DataView originValue={data.totalAmountOfGoods} valueChanged={dataModified.totalAmountOfGoods} />
                    </td>
                </tr>
                <tr>
                    <td>Tiền chiết khấu</td>
                    <td className="text-center">
                        <DataView originValue={data.discount} valueChanged={dataModified.discount} />
                    </td>
                </tr>
                <tr>
                    <td>Tiền thuế GTGT</td>
                    <td className="text-center">
                        <DataView originValue={data.vatAmount} valueChanged={dataModified.vatAmount} />
                    </td>
                </tr>
                <tr>
                    <td>Tổng tiền thanh toán</td>
                    <td className="text-center">
                        <DataView originValue={data.totalPayment} valueChanged={dataModified.totalPayment} />
                    </td>
                </tr>
                <tr>
                    <td>Chi phí mua hàng</td>
                    <td className="text-center">
                        <DataView originValue={data.purchaseCosts} valueChanged={dataModified.purchaseCosts} />
                    </td>
                </tr>
                <tr>
                    <td>Giá trị nhập kho</td>
                    <td className="text-center">
                        <DataView originValue={data.inventoryValue} valueChanged={dataModified.inventoryValue} />
                    </td>
                </tr>
                <tr>
                    <td>Nhận hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data.receiveInvoice} valueChanged={dataModified.receiveInvoice} />
                    </td>
                </tr>
                <tr>
                    <td>Là chi phí mua hàng</td>
                    <td className="text-center">
                        <DataView originValue={data.isThePurchaseCost} valueChanged={dataModified.isThePurchaseCost} />
                    </td>
                </tr>
                <tr>
                    <td>Loại chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.typeOfDocument} valueChanged={dataModified.typeOfDocument} />
                    </td>
                </tr>
                <tr>
                    <td>Phí trước hải quan</td>
                    <td className="text-center">
                        <DataView originValue={data.preCustomsFee} valueChanged={dataModified.preCustomsFee} />
                    </td>
                </tr>
                <tr>
                    <td>Tiền thuế NK</td>
                    <td className="text-center">
                        <DataView originValue={data.importTax} valueChanged={dataModified.importTax} />
                    </td>
                </tr>
                <tr>
                    <td>Tiền thuế TTĐB</td>
                    <td className="text-center">
                        <DataView originValue={data.specialExciseTax} valueChanged={dataModified.specialExciseTax} />
                    </td>
                </tr>
                <tr>
                    <td>Số chứng từ (Sổ QT)</td>
                    <td className="text-center">
                        <DataView originValue={data.documentNumber} valueChanged={dataModified.documentNumber} />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

const BillTabGroup = ({ orginData = [], dataModified = [], onModifyData = () => { } }) => {
    const [billIndexSelected, setBillIndex] = useState(0);
    return (
        <div className='confirm-table'>
            <div className='d-flex align-items-end tabs'>
                {orginData.map((_, index) => (
                    <div
                        className={classNames("tab", { tabActive: billIndexSelected === index })}
                        onClick={() => setBillIndex(index)}>
                        Hóa đơn {index + 1}
                    </div>
                ))}
            </div>
            <Container className='tab-detail'>
                {orginData.map((val, index) => (
                    <BillTab key={index} data={val} dataModified={dataModified} isVisible={billIndexSelected === index} />
                ))}
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
            <Modal isOpen={isOpenConfirm}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => hadOpenConfirm(false)}>
                        <i className="tim-icons icon-simple-remove"></i>
                    </button>
                    <h5 className="modal-title">Xác nhận lại</h5>
                </div>
                <ModalBody>
                    <BillTabGroup orginData={tmpConfirmData} dataModified={editConfirm} onModifyData={setEditConfirm} />
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
