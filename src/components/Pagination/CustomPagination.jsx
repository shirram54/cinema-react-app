import Pagination from '@mui/material/Pagination';
import React, { useContext } from 'react'
import "./CustomPagination.css";
import PageContext from '../../PageContext';

const CustomPagination = () => {
    const {page, setPage} = useContext(PageContext);

    const handlePageChange = (page) => {
      console.log('paginate to', page)
        setPage(page);
        window.scroll(0, 0);
      };

  return (
    <div className='pagination'>
    <Pagination
         sx = {{bgcolor:'#422d61'} }
         count={2}
         onChange={(e) => handlePageChange(e.target.textContent)}
     />
    </div>
  )
}

export default CustomPagination;