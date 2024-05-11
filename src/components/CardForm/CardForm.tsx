import Form from "../Form/Form"
import IconList from "../Icons/IconList"
import "./CardForm.scss"
export default function CardForm() {

    
    return(
       <div className={`card_content_form`}>
        
            <div className="card_header">
                <h1>Stay updated!</h1>
                <span>Join 60,000+ product managers receiving monthly update on:</span>
            </div>

            <div className="card_infos">
                <h2><span><IconList/></span> Product discovery and building what mmatters</h2>

                <h2><span><IconList/></span> Measuring to ensure updates are a sucess</h2>

                <h2><span><IconList/></span> And much more</h2>
            </div>

            <Form/>
       </div>
    )
}
