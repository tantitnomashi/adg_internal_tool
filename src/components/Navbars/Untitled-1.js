{
    "data": {
       
        "pnk": [
            {
                "a": "1",
                "1": "17500",
                "b": "Hạt nhựa PP UH602N",
                "2": "",
                "c": "PP-KR UH602N",
                "3": "31272.72725714",
                "d": "Kg",
                "4": "547272727",
                "nhaCungCap": "CÔNG TY TNHH BAO BÌ BẾN THÀNH",
                "soHoaĐon": "0000005"
            },
            {
                "a": "2",
                "1": "24750",
                "b": "Hạt nhựa HDPE H5604F",
                "2": "",
                "c": "HDPE-TH H5604F",
                "3": "30181.81818182",
                "d": "Kg",
                "4": "747000000",
                "nhaCungCap": "CÔNG TY TNHH BAO BÌ BẾN THÀNH",
                "soHoaĐon": "0000005"
            },
            {
                "a": "3",
                "1": "22500",
                "b": "Hạt nhựa PP F501N",
                "2": "",
                "c": "PP-VN F501N",
                "3": "29909.09093333",
                "d": "Kg",
                "4": "672954546",
                "nhaCungCap": "CÔNG TY TNHH BAO BÌ BẾN THÀNH",
                "soHoaĐon": "0000005"
            },
            {
                "a": "1",
                "1": "50000",
                "b": "Hạt nhựa PP T30S",
                "2": "",
                "c": "PP-CN T30S",
                "3": "28818.18182",
                "d": "Kg",
                "4": "1440909091",
                "nhaCungCap": "CÔNG TY CỔ PHẦN ĐẦU TƯ HƯNG ĐÔNG",
                "soHoaĐon": "0000300"
            },
            {
                "a": "2",
                "1": "46400",
                "b": "Hạt nhựa PP 1100NK",
                "2": "",
                "c": "PP-TH 1100NK",
                "3": "29872.72726293",
                "d": "Kg",
                "4": "1386094545",
                "nhaCungCap": "CÔNG TY CỔ PHẦN ĐẦU TƯ HƯNG ĐÔNG",
                "soHoaĐon": "0000300"
            },
            {
                "a": "1",
                "1": "50000",
                "b": "Hạt nhựa LDPE LD4025AS",
                "2": "",
                "c": "LDPE-SA LD4025AS",
                "3": "33045.45454",
                "d": "Kg",
                "4": "1652272727",
                "nhaCungCap": "CÔNG TY TNHH ĐẦU TƯ SAO MAI PHÚ QUỐC",
                "soHoaĐon": "0000094"
            },
            {
                "a": "2",
                "1": "24750",
                "b": "Hạt nhựa HDPE F1",
                "2": "",
                "c": "HDPE-SA F1",
                "3": "32363.63636364",
                "d": "Kg",
                "4": "801000000",
                "nhaCungCap": "CÔNG TY TNHH ĐẦU TƯ SAO MAI PHÚ QUỐC",
                "soHoaĐon": "0000094"
            },
            {
                "a": "1",
                "1": "37500",
                "b": "Hạt nhựa PP S1003",
                "2": "",
                "c": "PP-TH S1003",
                "3": "29527.27272",
                "d": "Kg",
                "4": "1107272727",
                "nhaCungCap": "CÔNG TY TNHH ĐẦU TƯ SAO MAI PHÚ QUỐC",
                "soHoaĐon": "0000091"
            },
            {
                "a": "2",
                "1": "19500",
                "b": "Hạt nhựa PP 5014",
                "2": "",
                "c": "PP-KR 5014",
                "3": "30090.90907692",
                "d": "Kg",
                "4": "586772727",
                "nhaCungCap": "CÔNG TY TNHH ĐẦU TƯ SAO MAI PHÚ QUỐC",
                "soHoaĐon": "0000091"
            },
            {
                "a": "3",
                "1": "16500",
                "b": "Hạt nhựa HDPE FJ00952",
                "2": "",
                "c": "HDPE SA-FJ00952",
                "3": "30363.63636364",
                "d": "Kg",
                "4": "501000000",
                "nhaCungCap": "CÔNG TY TNHH ĐẦU TƯ SAO MAI PHÚ QUỐC",
                "soHoaĐon": "0000091"
            }
        ]
    },
    "status": "ok"
}

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
                        <DataView originValue={data["a"]} />
                    </td>
                    <td className='font-weight-bold'>Tên hàng hóa</td>
                    <td className="text-center">
                        <DataView originValue={data["b"]} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Mã số</td>
                    <td className="text-center">
                        <DataView originValue={data["c"]} />
                    </td>
                    <td className='font-weight-bold'>Đơn vị</td>
                    <td className="text-center">
                        <DataView originValue={data["d"]} />
                    </td>
                </tr>
                <tr>
                    <td className='font-weight-bold'>Số lượng theo chứng từ</td>
                    <td className="text-center">
                        <DataView originValue={data["1"]} />
                    </td>
                    <td className='font-weight-bold'>Số lượng thực nhập </td>
                    <td className="text-center">
                        <DataView originValue={data["1"]} />
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