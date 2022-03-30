
export default function InputField({ type, name, id, placeholder="", label, required=false }) {
    return (
        <div className={"m-3 " + (type == "textarea" ? "" : "w-1/2")}>
            <label className="flex" htmlFor={id}>{label} {required ? <p className="text-red-600 ml-1">*</p> : ""}</label> 
            {type == "textarea" ? 
                <textarea name={name} id={id} placeholder={placeholder} className="w-full h-32 px-2 py-1 rounded-md" />
                : <input type={type} name={name} id={id} placeholder={placeholder} className="px-2 py-1 rounded-md w-full" />
            }
        </div>
    )
}