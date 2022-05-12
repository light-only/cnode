import {Pagination} from "antd";
import React from "react";

export default (props)=>{

    return (
        <div className='index_pagination'>
            <Pagination
                defaultCurrent={1}
                defaultPageSize={20}
                total={1000}
            />
        </div>
    )
}