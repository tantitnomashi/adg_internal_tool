import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import { DataView } from './DataView';
import classNames from 'classnames';

export const BillTab = ({ isVisible = true, data, onChangeData = () => { } }) => {

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
                        <DataView originValue={data.soHoaDon}
                            onChange={(val) => onChange(val, "soHoaDon")}
                        />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Nhà cung cấp</td>
                    <td className="text-center">
                        <DataView originValue={data.nhaCungCap.split(" ").splice(-4).join(" ")}
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