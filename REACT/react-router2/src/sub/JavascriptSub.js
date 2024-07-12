import {useParams} from 'react-router-dom';
import NotFound from './NotFound';

export default function JavascriptSub(){
    const params = useParams();
    const pid = params.pid;

    if(pid==2 || pid==1){
      return(
        <div>
           <h3>Javascript 서브페이지 {pid} </h3>
        </div>
      )
    } else {
      return(
        <NotFound />
      )
    }
  }
  