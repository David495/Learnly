import React from 'react'
import Contact_layout_style from './contact_layout.module.css'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'

const Contact_layout = () => {
  return (
    <main>
    <section className={Contact_layout_style.contact_section}>
<div className={Contact_layout_style.inner_contact_content}>
<div>
  <h1 className={Contact_layout_style.contact_section_title}>Contact Us</h1>
  <p>Have questions or need support? Our team is here to help.</p>
</div>

<div className={Contact_layout_style.contact_info_mail}>
 <Mail/> learnly@gmail.com
</div>
<div className={Contact_layout_style.contact_info_phone}>
 <Phone/> 08034056385
</div>
</div>
<form action="" className={Contact_layout_style.contact_form_layout}>
<input type="text" placeholder='Name' className={Contact_layout_style.input_name} required></input>
<input type="text" placeholder='email' className={Contact_layout_style.email_input} required/>
<input type="text" placeholder='Subject' className={Contact_layout_style.subject_input} required/>
<textarea placeholder='Message' className={Contact_layout_style.message_input} required></textarea>
<button className={Contact_layout_style.contact_submit_button}>Submit</button>
</form>
</section>
   </main>
  )
}

export default Contact_layout;