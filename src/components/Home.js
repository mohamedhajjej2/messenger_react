import React from 'react'

function Home() {
  return (
    <div>
        <div style={{marginLeft:"30px"}}>
            <h1 className='titre'>
            Ensemble,
            <br/>
            n’importe où, <br/>n’importe <br/>quand
            </h1>
        </div>
        <div className='titre2'>
        Grâce à Messenger, garder le contact avec vos proches n’a jamais été aussi facile et amusant.
        </div>
        <div style={{marginLeft:"610px", marginTop:"-470px"}}>
            <img className='img2' src='https://scontent.ftun1-2.fna.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=K8QzCEGELhgQ7kNvgGsic86&_nc_ht=scontent.ftun1-2.fna&oh=00_AYA8hnzoeFEB5IyBA92nuuuZ4JMz6-mOoP0tdAEmed1ZFA&oe=6654F627'></img>
        </div>
        <div style={{marginLeft:"30px", marginBottom:"30px"}}>
        <input type="text" className='input-email' name="email" placeholder="Adresse e-mail ou mobile"aria-label="Adresse e-mail ou mobile"/>
        <input type="password" className='input-email' name="pass" id="pass" tabindex="0" placeholder="Mot de passe" aria-label="Mot de passe"></input>
        </div>
        <div style={{marginLeft:"30px", marginBottom:"30px"}}>
        <button className='button-connect' value="1" name="login" tabindex="0" type="submit">Se connecter</button>


        <span  className='md'>Mot de passe oublié&nbsp;?</span>
        </div>
        <div style={{marginLeft:"30px", marginBottom:"30px"}}>
          <input type='checkbox'/>
          <label>Rester connecté(e)</label>
        </div>
        <div id='box' style={{marginLeft:"30px"}}>
         <a href='https://apps.apple.com/us/app/messenger/id1480068668?mt=12' target='blank'>
          <img className='img-apple' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGQu_JVAJ5m0h9EtqzrZs2sa2P8znHw72BLvvUxNk4iRgcnPQN'></img>
          </a> 
<section>
          <a href='https://apps.microsoft.com/en-us/detail/9wzdncrf0083'>
            <img className='img-microsoft'  src='https://scontent.ftun8-1.fna.fbcdn.net/v/t39.8562-6/119599076_446848929595709_8783163601157682224_n.png?_nc_cat=108&ccb=1-7&_nc_sid=f537c7&_nc_ohc=ym_zTqTpiYoQ7kNvgGizyD5&_nc_ht=scontent.ftun8-1.fna&oh=00_AYAmRGX8a1LCi-GlfHpZJeAJeoL4wdTOKycxxnwa9t2gfg&oe=66554421'/>
          </a>
          </section>
        </div>
    </div>
  )
}

export default Home