import React, { useState, useEffect } from 'react';
import axios from 'axios';
function FundCodeChooseList({ setFundCd }) {
    const [fundCdList, setFundCdList] = useState([]);
  
    useEffect(() => {
      axios.get("http://192.168.233.159:5001/fundcdlist").then((reponse) => {
        setFundCdList(reponse.data);
      });
    }, []);
  
    const handleFundCdClicked = (e: React.MouseEvent<HTMLElement>) =>
      setFundCd(e.currentTarget.id);
  
    const renderedFundCdList = fundCdList.map((fundCd) => (
      <tr key={fundCd} id={fundCd} onClick={handleFundCdClicked}>
        {fundCd}
      </tr>
    ));
  
    return (
      <div>
        <tr>펀드코드</tr>
        {fundCdList.length && <td>{renderedFundCdList}</td>}
      </div>
    );
  }
  export default FundCodeChooseList;

  