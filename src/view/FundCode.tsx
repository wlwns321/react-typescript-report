import React, { useState} from "react";
import FundCodeChooseList from "./FundCodeChooseList";
import FundCodeChoose from "./FundCodeChoose";
import FundCodeChosen from "./FundCodeChosenList";

function FundCode() {
  const [fundCd, setFundCd] = useState("");
  const [fundCdChosenList, setFundCdChosenList] = useState([]);
  return (
    <div>
      <FundCodeChooseList setFundCd={setFundCd} />
      <FundCodeChoose 
        fundCd={fundCd}
        setFundCdChosenList={setFundCdChosenList}
      />
      <FundCodeChosen fundCdChosenList={fundCdChosenList} />
    </div>
  );
}

export default FundCode;