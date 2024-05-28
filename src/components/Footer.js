import React from 'react'

function Footer() {
  return (
    <div id='footer' >
      
        <div style={{display:"flex", justifyContent:"space-between"}} className='bigbox-footer'>
        <span > © Meta&nbsp;2024. </span>
        
       
       
       
        <div >
        <div className='ver'> Les logos Apple et Google&nbsp;Play sont des marques déposées appartenant<br></br>à leurs titulaires respectifs. </div>
            <img className='img-footer'  src='https://scontent.ftun8-1.fna.fbcdn.net/v/t39.8562-6/401750647_1601653570640810_4087456680134260053_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=SEbexTwg3sUQ7kNvgHJQ6fr&_nc_ht=scontent.ftun8-1.fna&oh=00_AYCBmRJtWegUw4T2_PbO8WmInp3NA29lja4P5kHTen_ucQ&oe=66554D48'/>
        </div>
        </div>
        <div className='liens'>
          <ul className='ul-footer'>
            <li> <a href='https://www.facebook.com/privacy/policy'>Politique de <br></br>confidentialité</a></li>
            <li><a href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0'>Politique<br/> d'utilisation des cookies</a></li>
            <li><a href='https://www.facebook.com/policies_center/'>Conditions<br/> générales</a></li>
          </ul>
            </div>
            
    </div>
  )
}

export default Footer