import React from 'react';

export const –°urrency = ({ccy, sale, base_ccy}: –°urrencyType) => {
    return (
        <div style={{textAlign: 'center'}}>
            1{ccy} = {sale} {base_ccy}
        </div>
    );
};
//type
type –°urrencyType = {
    ccy: string
    sale: string
    base_ccy: string
}
