import { Bounded } from "../../components/Bounded";

const Field = ({ label, children }) => {
    return (
        <label>
            <span className="text-sm text-slate-500">{label}</span>
            {children}
        </label>
    );
};

const InputField = ({
    label,
    name,
    type = "text",
    placeholder,
    required = true,
}) => {
    return (
        <Field label={label}>
            <input
                name={name}
                type={type}
                required={required}
                placeholder={placeholder}
                className="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
            />
        </Field>
    );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
    return (
        <Field label={label}>
            <textarea
                name={name}
                required={required}
                placeholder={placeholder}
                className="h-40 w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
            />
        </Field>
    );
};

const ContactForm = () => {
    return (
        // while this part is not loaded show a loading screen minimal loading screen not a spinner
        <div>
            <div
                // make this center

                className="grid grid-cols-1 content-center justify-items-center gap-6 px-12"
                data-tf-widget="F1c1MkTS"
                data-tf-opacity="100"
                data-tf-iframe-props="title=Saboor Hakimi Contact Page"
                data-tf-transitive-search-params
                data-tf-medium="snippet"
                style={{
                    // center this
                    display: "flex",
                    width: "100%",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            ></div>
        </div>

        // <Bounded as="section" size="medium">
        //     <div
        //         data-tf-widget="F1c1MkTS"
        //         data-tf-opacity="100"
        //         data-tf-iframe-props="title=Saboor Hakimi Contact Page"
        //         data-tf-transitive-search-params
        //         data-tf-medium="snippet"
        //         style={{
        //             width: "100%",
        //             height: "450%",
        //         }}
        //     ></div>

        //     {/* <form
        //         action="/api/contact"
        //         method="post"
        //         className="grid grid-cols-1 gap-6"
        //     > */}

        //     {/* <InputField label="Name" name="name" placeholder="Jane Doe" />
        //         <InputField
        //             label="Email Address"
        //             name="email"
        //             type="email"
        //             placeholder="jane.doe@example.com"
        //         />
        //         <TextareaField
        //             label="Message"
        //             name="message"
        //             placeholder="Write your message here…"
        //         />
        //         <button
        //             type="submit"
        //             className="ml-auto inline-flex items-center gap-2"
        //         >
        //             Send message{" "}
        //             <span aria-hidden={true} className="text-xl">
        //                 &rarr;
        //             </span>
        //         </button> */}
        //     {/* </form> */}
        // </Bounded>
    );
};

export default ContactForm;
