import classNames from 'classnames';
import React, { useState } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';

import API from 'utils/adminApi';

const DataView = ({ originValue, onChange }) => {
    const [changeMode, setChangeMode] = useState(false);
    const [val, setVal] = useState(originValue);

    const onChangeValue = () => {
        onChange(val);
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
                        <span className="text-info">{val}</span> :
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
        <Table style={{ marginBottom: "200px" }} className={classNames({ "d-none": !isVisible })}>
            <thead>
                <tr>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                    <th>Hạng mục</th>
                    <th className="text-center">Thông tin</th>
                </tr>
            </thead>
            <tbody >
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
                <tr>
                    <td className='font-weight-bold'>Nhà cung cấp</td>
                    <td className="text-center"
                    ><DataView originValue={data["nhaCungCap"]} />
                    </td>
                    <td className='font-weight-bold'>Số hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data["soHoaĐon"]} />
                    </td>
                </tr>
            </tbody>
        </Table >
    )
}

const BillTab = ({ isVisible = true, data, onChangeData = () => { } }) => {

    const onChange = (val, name) => {
        data[name] = val;
        onChangeData(data);
    }

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
                        <DataView originValue={data.ngayHachToan}
                            onChange={(val) => onChange(val, "ngayHachToan")}
                        />
                    </td>
                    <td className='font-weight-bold'>Số chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.soChungTu}
                            onChange={(val) => onChange(val, "soChungTu")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Ngày chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.ngayChungTu}
                            onChange={(val) => onChange(val, "ngayChungTu")}
                        />
                    </td>
                    <td className='font-weight-bold'>Số hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data.soHoaĐon}
                            onChange={(val) => onChange(val, "soHoaĐon")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Nhà cung cấp</td>
                    <td className="text-center">
                        <DataView originValue={data.nhaCungCap}
                            onChange={(val) => onChange(val, "nhaCungCap")}
                        />
                    </td>
                    <td className='font-weight-bold'>Diễn giải</td>
                    <td className="text-center">
                        <DataView originValue={data.dienGiai}
                            onChange={(val) => onChange(val, "dienGiai")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tổng tiền hàng</td>
                    <td className="text-center"
                    ><DataView originValue={data.tongTienHang}
                        onChange={(val) => onChange(val, "tongTienHang")}
                        />
                    </td>
                    <td className='font-weight-bold'>Tiền chiết khấu</td>
                    <td className="text-center">
                        <DataView originValue={data.tienChietKhau}
                            onChange={(val) => onChange(val, "tienChietKhau")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tiền thuế GTGT</td>
                    <td className="text-center">
                        <DataView originValue={data.tienThueGTGT}
                            onChange={(val) => onChange(val, "tienThueGTGT")}
                        />
                    </td>
                    <td className='font-weight-bold'>Tổng tiền thanh toán</td>
                    <td className="text-center">
                        <DataView originValue={data.tongTienThanhToan}
                            onChange={(val) => onChange(val, "tongTienThanhToan")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Chi phí mua hàng</td>
                    <td className="text-center">
                        <DataView originValue={data.chiPhiMuaHang}
                            onChange={(val) => onChange(val, "chiPhiMuaHang")}
                        />
                    </td>
                    <td className='font-weight-bold'>Giá trị nhập kho</td>
                    <td className="text-center">
                        <DataView originValue={data.giaTriNhapKho}
                            onChange={(val) => onChange(val, "giaTriNhapKho")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Nhận hóa đơn</td>
                    <td className="text-center">
                        <DataView originValue={data.nhanHoaĐon}
                            onChange={(val) => onChange(val, "nhanHoaĐon")}
                        />
                    </td>
                    <td className='font-weight-bold'>Là chi phí mua hàng</td>
                    <td className="text-center">
                        <DataView originValue={data.laChiPhiMuaHang === "false" ? "Không phải" : "Đúng"}
                            onChange={(val) => onChange(val, "laChiPhiMuaHang")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Loại chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data.loaiChungTu}
                            onChange={(val) => onChange(val, "loaiChungTu")}
                        />
                    </td>
                    <td className='font-weight-bold'>Phí trước hải quan</td>
                    <td className="text-center">
                        <DataView originValue={data.phiTruocHaiQuan}
                            onChange={(val) => onChange(val, "phiTruocHaiQuan")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Tiền thuế NK</td>
                    <td className="text-center">
                        <DataView originValue={data.tienThueNK}
                            onChange={(val) => onChange(val, "tienThueNK")}
                        />
                    </td>
                    <td className='font-weight-bold'>Tiền thuế TTĐB</td>
                    <td className="text-center">
                        <DataView originValue={data.tienThueTTĐB}
                            onChange={(val) => onChange(val, "tienThueTTĐB")}
                        />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

const BillTabGroup = ({ originData = [], onModifyData = () => { } }) => {

    const [billIndexSelected, setBillSelected] = useState(0);

    const removeInvoice = (index) => {
        originData.splice(index, 1);
        onModifyData([...originData]);
    }

    const get3LastNumber = (number = "0000") => {
        return number.substring(number.length - 3, number.length);
    }


    return (
        <div className='confirm-table'>
            <div className='d-flex align-items-end tabs'>
                {originData.map((val, index) => (
                    <div key={index}
                        className={classNames("btn-link tab", { tabActive: billIndexSelected === index })}
                        onClick={() => setBillSelected(index)}>
                        <div className="text-nowrap">
                            {val.type === "HD" ? "HD-" : "P-"}{get3LastNumber(val.soHoaĐon)}
                        </div>
                        <button
                            className='btn-remove-file btn-default p-0 ml-2 rounded-circle'
                            onClick={() => removeInvoice(index)} >
                            <i className="tim-icons icon-simple-remove" />
                        </button>
                    </div>
                ))}
            </div>
            <Container className='tab-detail'>
                {originData.map((val, index) => {
                    if (val.type === "HD") {
                        return (
                            <BillTab key={index} data={val} isVisible={billIndexSelected === index} onChangeData={(data) => {
                                originData[index] = data;
                                onModifyData([...originData]);
                            }} />
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

    const setIndexForBill = (confirmData = { pnk: [], hd: [] }) => {
        confirmData.pnk.map((val, index, arr) => {
            arr[index].type = "PNK";
        });
        confirmData.hd.map((val, index, arr) => {
            arr[index].type = "HD";
        });

        let arr = [...confirmData.hd, ...confirmData.pnk];
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

    const [confirmData, setConfirmData] = useState([]);
    const [arrayBill, setArrayBill] = useState(setIndexForBill());
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
        formData.append('file', file[0]);

        API.importDisbursement(formData).then(({ data }) => {
            setArrayBill(setIndexForBill(data.data));
            hadOpenConfirm(true);
        }).catch((err) => {
            alert('Xin lỗi đã có lỗi trong quá trình xử lý !');
        })
    };


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
