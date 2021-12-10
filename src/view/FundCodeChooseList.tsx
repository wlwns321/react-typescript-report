import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import axios from 'axios';

function FundCodeChooseList({ setFundCd }) {
  const [fundCdList, setFundCdList] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.233.159:5001/fundcdlist').then((reponse) => {
      setFundCdList(reponse.data);
    });
  }, []);

  const handlefundcdclicked = (fundcd) => () => setFundCd(fundcd)

  const renderRow =
    (list) =>
    ({ index, style }) =>
      (
        <ListItem style={style} key={index} component='div' disablePadding>
          <ListItemButton onClick={handlefundcdclicked(list[index])}>
            <ListItemText  primary={list[index]}  />
          </ListItemButton >
        </ListItem>
      );

  return (
    <div>
      <tr>펀드코드</tr>
      <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
        <FixedSizeList height={400} width={360} itemSize={30} itemCount={fundCdList.length} overscanCount={5}>
          {renderRow(fundCdList)}
        </FixedSizeList>
      </Box>
    </div>
  );
}

export default FundCodeChooseList;