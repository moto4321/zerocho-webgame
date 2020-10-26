/*import React, {memo} from 'react';
import Td from './Td';

const Tr = memo(({rowData, rowIndex, dispatch}) => {
    return(
        <tr>
            {Array(rowData.length).fill().map((td, i) => (
                <Td dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>
            ))}
        </tr>
    )
});

export default Tr;*/
// 틱택토

import React, { useContext, memo } from 'react';
import Td from './Td';
import { TableContext } from './MineSearch';

const Tr = memo(({ rowIndex }) => {
    const { tableData } = useContext(TableContext);

    return(
        <tr>
            {tableData[0] && Array(tableData[0].length).fill().map((td, i) => <Td rowIndex={rowIndex} cellIndex={i} />)}
        </tr>
    )
});

export default Tr;