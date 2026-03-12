import { useContext } from "react"
import { MailContext } from "../context/MailContext"

const TemplateDetails = ({ hide }) => {
    const {mails} = useContext(MailContext)

  return (
    <div className="bg-black/50 backdrop-blur-md w-full h-screen py-10 flex justify-center">
      <div className="form bg-slate-900 py-5 mx-5 w-4xl max-xl:h-200  max-md:w-xs  max-sm:h-165 sm:h-160">
        <h1 className="text-2xl italic py-2">PREVIEW</h1>
        <div>
          {mails.map((m) => (
            <div key={m.id} className="flex flex-col gap-2 w-full">
              <div className="flex w-full gap-5">
                <div className="flex flex-col gap-2 w-full">
                  <h1>NAME :</h1>
                  <input value={m.name} disabled />
                  <h1>DESCRIPTION :</h1>
                  <input type="text" value={m.description} disabled />
                  <h1>SUBJECT :</h1>
                  <input type="text" value={m.subject} disabled />
                  <h1>BODY :</h1>
                  <textarea value={m.body} disabled className="w-full" />
                  <button
                    onClick={() => hide((o) => !o)}
                    className="bg-purple-500 w-50 py-2 rounded-lg my-5 ml-auto"
                  >
                    Close
                  </button>
                </div>
                <div>
                  <div className="bg-black w-sm rounded-lg h-120 max-lg:hidden">
                    <div className="px-3">
                      <h1 className="pt-10 text-3xl">{m.subject}</h1>
                      <p className="text-md">{m.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateDetails