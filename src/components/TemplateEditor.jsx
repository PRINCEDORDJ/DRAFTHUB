import { ArrowLeft } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MailContext } from "../context/MailContext";

const TemplateEditor = ({ id }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { mails, addMail, updateMail } = useContext(MailContext);

  useEffect(() => {
    if (id) {
      const allMails = mails.find((m) => m.id === Number(id));
      if (allMails) {
        setName(allMails.name);
        setDescription(allMails.description);
        setSubject(allMails.subject);
        setBody(allMails.body);
      }
    }
  }, [id, mails]);

  const handleSave = () => {
    if (!name || !description || !subject || !body) {
      setError("All fields are required");
      setTimeout(() => {
        setError(null);
      }, 5000);
      return;
    }

    if (id) {
      updateMail(Number(id), {
        name,
        description,
        subject,
        body,
      });
    } else {
      const newMail = {
        id: Date.now() + Math.random(),
        name,
        description,
        subject,
        body,
      };
      addMail(newMail);
    }
    setName("");
    setBody("");
    setSubject("");
    setDescription("");
    setError(null);
    navigate("/my-templates");
  };

  return (
    <div className="">
      <button onClick={() => navigate("/")} className="py-2 px-5 flex">
        <ArrowLeft /> <span>Back</span>
      </button>
      <div>
        <div className="flex justify-center gap-15">
          <div className="form bg-slate-900  w-lg max-md:w-14/15 max-lg:mx-auto my-5">
            <h1 className="font-bold text-3xl max-md:text-2xl my-2 mx-5">
              {id ? "Update Templates" : "Create New Template"}
            </h1>
            <div className=" w-full max-lg:mx-auto my-5">
              <div className=" flex flex-col gap-2 py-10 px-2">
                <h1>NAME :</h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="MARKETING"
                />
                <h1>DESCRIPTION :</h1>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="MARKETING FOR Q2"
                />
                <h1>SUBJECT :</h1>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="BUDGET REVIEW FOR {{NAME}}"
                />
                <h1>BODY :</h1>
                <textarea
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Hey {{name}}, We have a meeting to talk about budgeting"
                />
                {error && <p className="text-red-500 font-light">{error}</p>}
                <div className="flex justify-end py-2">
                  <button
                    onClick={handleSave}
                    className="bg-violet-500 py-3 px-10 rounded-lg text-md font-bold active:scale-95 delay-75"
                  >
                    {id ? "Update" : "Save"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 form bg-slate-900  max-lg:mx-auto my-5 max-lg:hidden">
            <div className=" flex flex-col gap-2 py-10 px-2 w-md">
              <h1 className="text-2xl py-3">PREVIEW</h1>
              <h1>NAME :</h1>
              <input type="text" value={name} disabled />
              <h1>DESCRIPTION :</h1>
              <input type="text" value={description} disabled />
              <h1>SUBJECT :</h1>
              <input type="text" value={subject} disabled />
              <h1>BODY :</h1>
              <textarea type="text" value={body} disabled />
            </div>
            <div className="bg-black w-sm rounded-lg">
              <div className="px-3">
                <h1 className="pt-20 text-3xl">{subject}</h1>
                <p className="text-md">{body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;
