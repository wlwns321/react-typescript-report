import { title } from "process";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

function FundCodeChosenList({ fundCdChosenList }) {
    const renderedChosenList = fundCdChosenList.map(({ code, title }) => (
        <tr key={code}>
            <td>{code}</td>
            <td>{title}</td>
            <Stack spacing={2} direction="row">
                <Button variant="contained" >미리보기</Button>
            </Stack>


        </tr>

    ));
    return (
        <div>
            <table>
                <tr>
                    <Box sx={{ width: '300px', bgcolor: 'background.paper' }}>
                        
                        <Tab label="펀드코드" />
                        <Tab label="타이틀" />
                        <Tab label="-" />

                    </Box>


                </tr>
                {renderedChosenList}
            </table>
        </div >
    );

};
export default FundCodeChosenList;