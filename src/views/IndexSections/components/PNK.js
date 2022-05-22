
import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import { DataView } from './DataView';
import classNames from 'classnames';
import { DataViewPNK } from './DataViewPNK';


export const PNK = ({ isVisible = true, info }) => {
    return (
        <div className={classNames({ "d-none ": !isVisible })}>
            <h3 className='text-dark my-0 py-0'>{info["nhaCungCap"]}  -  {info["soHoaDon"]} </h3>
            <Table style={{ marginBottom: "200px" }}>
                <thead>
                    <tr>
                        {/* <th className="text-center">Stt</th> */}
                        <th className="text-center">Tên hàng hóa</th>
                        <th className="text-center">Mã số</th>
                        <th className="text-left">Đơn vị</th>
                        <th className="text-left">Số lượng</th>
                        <th className="text-center">Đơn giá </th>
                        <th className="text-left">Thành tiền</th>

                    </tr>
                </thead>
                <tbody >

                    {info.thongtin?.map(data => (
                        <tr>
                            {/* <td className="text-center">
                                <DataViewPNK originValue={data["a"]} />
                            </td> */}

                            <td className="text-center">
                                <DataViewPNK originValue={data["b"]} />
                            </td>

                            <td className="text-center">
                                <DataViewPNK originValue={data["c"]} />
                            </td>

                            <td className="text-center">
                                <DataViewPNK originValue={data["d"]} />
                            </td>

                            <td className="text-center">
                                <DataViewPNK originValue={data["1"]} />
                            </td>

                            <td className="text-center"
                            ><DataViewPNK originValue={data["3"]} />
                            </td>
                            <td className="text-center">
                                <DataViewPNK originValue={data["4"]} />
                            </td>
                        </tr>
                    ))}


                </tbody>
            </Table >
        </div>
    )
}
