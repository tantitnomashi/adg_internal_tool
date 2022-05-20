import React, { useState, useEffect } from 'react';
import { Button, Container, Input, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';

export const DataView = ({ originValue, onChange }) => {
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