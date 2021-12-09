import React from 'react';
import axios from 'axios';
function FundCodeChoose({ fundCd, setFundCdChosenList }) {
    const handleClick = () => {
      axios
        .get("http://192.168.233.159:5001/exporting/KRL205222107")
        .then((Response) => {
          setFundCdChosenList((state: any) => [
            ...state,
            { code: fundCd, title: Response.data.reportTitle  },
          ]);
        });
    };
  
    return (
      <div>
        <label>펀드코드</label>
        <input type='text' placeholder='펀드코드' value={fundCd} />
        <button onClick={handleClick}>생성</button>
      </div>
    );
  }
  export default FundCodeChoose;

 