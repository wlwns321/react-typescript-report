import axios from 'axios';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




function FundCodeChoose({ fundCd, setFundCdChosenList }) {
    const handleClick = () => {
        axios
            .get("http://192.168.233.159:5001/exporting/KRL205222107")
            .then((Response) => {
                setFundCdChosenList((state: any) => [
                    ...state,
                    { code: fundCd, title: Response.data.reportTitle },
                ]);
            });
    };

    return (

        <div>

            <label>펀드코드</label>
            <input type='text' placeholder='펀드코드' value={fundCd} />
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={handleClick}>생성</Button>
             </Stack>
        </div>
    );
}
export default FundCodeChoose;

