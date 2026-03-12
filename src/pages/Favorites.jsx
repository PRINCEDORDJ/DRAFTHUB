import { useContext, useState } from "react";
import { MailContext } from "../context/MailContext";
import { Check, Copy, Edit, Heart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import TemplateDetails from "../components/TemplateDetails";
import AlertModal from "../components/AlertModal";

const Favorites = () => {
  const { mails, deleteMail, toggleFavorites } = useContext(MailContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [delId, setDelId] = useState(null)
  const [copy, setCopy] = useState(null)
  const [alert, setAlert] = useState(false)
  // Filter only favorites
  const favoriteMails = mails.filter((m) => m.isFavorites);

   const handleCopy = async (mail) => {
     const template = `Subject: ${mail.name} \n\n Body: ${mail.body}`;
     await navigator.clipboard.writeText(template);
     setCopy(true);
  };
  
  const openAlert = (id) => {
    setAlert(true);
    setDelId(id);
  };

  const handleDelete = () => {
    if (delId) {
      deleteMail(delId)
      setAlert(false)
      setDelId(null)
    }
  }

  const handleUpdate = (id) => {
    navigate(`/create/${id}`);
  };

  return (
    <div className="mx-5 my-5">
      <div>
        <h1 className="w-30 bg-slate-500 py-1 px-2 text-center rounded-lg">
          FAVORITES
        </h1>
        <hr className="border-slate-500 my-1" />
        <h1 className="text-4xl max-md:text-3xl italic font-bold py-5">
          YOUR FAVORITE TEMPLATES
        </h1>
      </div>

      <div className="flex max-md:flex-col max-md:items-center gap-5 max-md:gap-3 mx-5 my-10">
        {favoriteMails.length > 0 ? (
          favoriteMails.map((m) => (
            <div
              key={m.id}
              className="bg-slate-500 flex flex-col mb-2 w-xs rounded-lg h-50 group hover:scale-104 transition-all"
            >
              <div className="max-w-md">
                <div
                  className="flex flex-col items-center py-5"
                  onClick={() => setOpen((o) => !o)}
                >
                  <h1 className="font-bold text-xl">{m.name}</h1>
                  <p>{m.description}</p>
                </div>

                {/* Favorite Button */}
                <div className="mt-15 flex items-center justify-center gap-4">
                  <button
                    onClick={() => toggleFavorites(m.id)}
                    className="transition-transform hover:scale-110"
                  >
                    <Heart color="red" fill="red" size={24} />
                  </button>
                  <button className="bg-gray-600 py-1 px-1 rounded-md" onClick={()=>handleCopy(m)}> 
                    {copy ? <Check /> : <Copy />}
                  </button>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-200 max-md:opacity-100">
                  <div className="flex justify-between mx-2 -mt-5">
                    <button
                      onClick={() => handleUpdate(m.id)}
                      className="bg-slate-900 py-1 px-2 rounded-lg"
                    >
                      <Edit />
                    </button>
                    <button
                      onClick={() => openAlert(m.id)}
                      className="bg-slate-900 py-1 px-2 rounded-lg"
                    >
                      <Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center w-full py-20">
            <Heart color="gray" size={64} className="mx-auto mb-5" />
            <p className="text-gray-400 text-xl">
              No favorites yet. Click the heart icon on any template to add it
              here!
            </p>
          </div>
        )}
      </div>
      <div className="">
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed left-0 top-0 w-full min-h-screen"
          >
            <TemplateDetails hide={setOpen} />
          </div>
        )}
      </div>
      <div>
              {alert && (
                <div>
                  <AlertModal
                    isOpen={setAlert}
                    title={"Delete Template"}
                    message={"Are you sure you want to deleteMessage"}
                    onClose={() => setAlert(false)}
                    onConfirm={handleDelete}
                  />
                </div>
              )}
            </div>
    </div>
  );
};

export default Favorites;
