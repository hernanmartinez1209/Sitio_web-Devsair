import React from 'react'
import { Redes_Sociales } from '../components/Redes_Sociales'

const Page_principal = () => {
  return (
   <div className='Main_principal'>
     <main>
    <div className='Principal_logo'>
      <div className='Invitacion_principal'>
        <h2>ven y desarrolla con nosotros tus soluciones</h2>
      
     <div className='Frase_principal'>
    <h2 className='h2_desarrollo'>&lt;Desarrollo/&gt; ,</h2>
  <h2 className='h2_desarrollo' >Soporte IT ,</h2>
  <h2 className='h2_Diseños'>Diseños</h2>
     </div>
    </div>
   <img src="../413cd299-4f7e-4e32-9e1e-3c959b9ac327__1__-_copia-removebg-preview.png" alt="" srcset=""  width={"400px"}/>
    </div>
    <Redes_Sociales/>
  </main>
   </div>
  )
}

export default Page_principal
