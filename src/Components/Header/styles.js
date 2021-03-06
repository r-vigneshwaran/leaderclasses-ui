import {makeStyles} from '@material-ui/core'
import Hero from '../../Images/hero_bg.jpg';

export default makeStyles((theme) => ({
    masthead :{
        height: '100vh',
        minHeight: '500px',
        backgroundImage:`url(${Hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      },
      root:{
        marginBottom:20
      }
}))