import { useContext } from "react"
import { MailContext } from "../context/MailContext"

const TemplateDetails = ({ hide }) => {
    const {mails} = useContext(MailContext)

  return (
    <div className="bg-black/50 backdrop-blur-md w-full h-screen py-10 flex justify-center">
      <div className="form py-5 mx-5 w-lg max-md:w-xs max-md:h-160 max-sm:h-150">
        <h1 className="text-2xl italic py-2">PREVIEW</h1>
        <div>
          {mails.map((m) => (
            <div key={m.id} className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <h1>NAME :</h1>
                <input value={m.name} disabled />
                <h1>DESCRIPTION :</h1>
                <input type="text" value={m.description} disabled />
                <h1>SUBJECT :</h1>
                      <input type="text" value={m.subject} disabled/>
                      <h1>BODY :</h1>
                     <textarea value={m.body} disabled className="w-full"/>
                  </div>
                  <button onClick={()=>hide(o => !o)} className="bg-purple-500 w-50 py-2 rounded-lg my-5 ml-auto">
                      <p>Close</p>
                  </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateDetails