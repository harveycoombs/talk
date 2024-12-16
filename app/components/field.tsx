interface Properties {
    type?: string;
    classes?: string;
    error?: boolean;
    warning?: boolean;
    [key: string]: any;
}

export default function Field({ type, classes, error, warning, ...rest }: Properties) {
    let classList = `px-4 py-3 rounded-lg box-border text-[0.8rem] border border-slate-300 bg-transparent font-medium leading-none duration-100 select-none focus:outline-none focus:border-sky-500 focus:shadow-md ${classes?.length ? " " + classes : ""}`;
    return <input type={type ?? "text"} className={classList} {...rest} />;
}