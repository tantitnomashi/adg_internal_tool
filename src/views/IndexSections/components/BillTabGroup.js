import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import { BillTab } from './BillTab';
import { PNK } from './PNK';
import { TKHQ } from './TKHQ';
import classNames from 'classnames';

export const BillTabGroup = ({ originData = [], onModifyData = () => { } }) => {

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
                            {/* {val.type === "HD" ? "HD-" : "P-"}{get3LastNumber(val.soHoaDon)} */}
                            {val.type === "HD" && (<>
                                HD - {get3LastNumber(val.soHoaDon)}
                            </>)}
                            {val.type === "PNK" && (<>
                                PNK - {get3LastNumber(val.soHoaDon)}
                            </>)}
                            {val.type === "TKHQ" && (<>
                                Tờ khai Hải quan
                            </>)}
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
                    if (val.type === "TKHQ") {
                        return (
                            <>
                                <TKHQ key={index} info={val} isVisible={billIndexSelected === index} onChangeData={(data) => {
                                    originData[index] = data;
                                    onModifyData([...originData]);
                                }} />
                            </>)
                    }

                    return (


                        <PNK key={index} info={val} isVisible={billIndexSelected === index} />
                    )
                })}
            </Container>
        </div>
    )
}

