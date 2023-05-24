import "./modalStyle.css"
import Loader from "../../loader";
export default function ModalLoader(props) {

   return(
      <div className="modal display-block">
            <Loader></Loader>
      </div>
   )
}