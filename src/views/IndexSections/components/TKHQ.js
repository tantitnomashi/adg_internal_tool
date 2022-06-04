
import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import { DataView } from './DataView';
import classNames from 'classnames';
import { DataViewPNK } from './DataViewPNK';


export const TKHQ = ({ isVisible = true, info }) => {
    return (
        <div className={classNames({ "d-none ": !isVisible })}>

            <Table style={{ marginBottom: "200px" }}>
                <thead>
                    <tr>
                        <th className="text-center">Số tờ khai</th>
                        <th className="text-center">Chi cục</th>
                        <th className="text-left">Tổng tiền </th>
                        <th className="text-left">Ngày đăng kí</th>


                    </tr>
                </thead>
                <tbody >

                    {info.list?.map(data => (
                        <tr>

                            <td className="text-center">
                                <DataViewPNK originValue={data["soToKhai"]} />
                            </td>

                            <td className="text-center">
                                <DataViewPNK originValue={data["tenCoQuanHaiQuanTiepNhanToKhai"]} />
                            </td>

                            <td className="text-left">
                                <DataViewPNK originValue={data["tongTienThuePhaiNop"]} />
                            </td>

                            <td className="text-left">
                                <DataViewPNK originValue={data["ngayDangKy"]} />
                            </td>

                        </tr>

                    ))}


                </tbody>
            </Table >
        </div>
    )
}
