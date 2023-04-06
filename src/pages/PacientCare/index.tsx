import { useParams } from "react-router-dom";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}


export function PacientCare() {
  const { id } = useParams<RouteParams>();

  // useEffect(()=>{
  //   api()
  // })


  return (
    <>
      <h2>Tela de atendimento</h2>
      {id}
      

    </>
  )
}