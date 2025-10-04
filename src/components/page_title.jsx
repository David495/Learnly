import React from 'react'
import { Link } from 'react-router-dom'
import Page_Title_Style from './page_title.module.css'
const Page_title = ({Title}) => {
  return (
    <div className={Page_Title_Style.page_title_div}>
        <h2 className={Page_Title_Style.page_title}><Link to='/about' className={Page_Title_Style.page_link}>{Title}</Link></h2>
    </div>
  )
}

export default Page_title;