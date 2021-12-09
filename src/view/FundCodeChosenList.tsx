import { title } from "process";
import { useState } from "react";
function FundCodeChosenList({ fundCdChosenList }) {
    const renderedChosenList = fundCdChosenList.map(({ code, title }) => (
        <tr key={code}>
            <td>{code}</td>
            <td>{title}</td>
            <td>미리보기</td>


        </tr>

    ));
    return (
        <div>
            <table>
                <tr>
                    <th>펀드코드</th>
                    <th>타이틀</th>
                    <th>-</th>
                </tr>
                {renderedChosenList}
            </table>
        </div >
    );

};
export default FundCodeChosenList;