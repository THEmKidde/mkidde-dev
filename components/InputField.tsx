
export default function InputField({ type, name, id, placeholder="", label, required=false, className="" }) {
    return (
        <div className={"m-3 " + className}>
            <label className="flex" htmlFor={id}>{label} {required ? <p className="text-red-600 ml-1">*</p> : ""}</label> 
            {type == "textarea" ? 
                <textarea name={name} id={id} placeholder={placeholder} className="w-full h-32 px-2 py-1 rounded-md border" required={required} />
                : <input type={type} name={name} id={id} placeholder={placeholder} className="w-full px-2 py-1 rounded-md  border" required={required} />
            }
        </div>
    )
}