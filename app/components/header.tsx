import Menu from "@/app/components/common/menu";
import Button from "@/app/components/common/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft, faDownload, faGear } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    let models = [
        { value: "deepseek-v2:lite", label: "DeepSeek-V2-Lite (15.7B)" },
        { value: "llama3.1", label: "Llama 3.1 (8B)" },
        { value: "qwq", label: "QwQ (32B)" }
    ];

    return (
        <header className="p-3 flex justify-between items-center">
            <strong className="text-lg text-slate-400/60 leading-none font-bold select-none"><span className="text-slate-800">Talk</span> {process.env.APP_VERSION}</strong>
            <Menu choices={models} />
            <div>
                <Button classes="inline-block">New Conversation</Button>
                <HeaderIcon icon={faDownload} />
                <HeaderIcon icon={faClockRotateLeft} />
                <HeaderIcon icon={faGear} />
            </div>
        </header>
    );
}

function HeaderIcon({ icon, ...rest }: any) {
    return (
        <div className="inline-block align-middle text-lg leading-none text-slate-400/60 ml-4 duration-100 cursor-pointer hover:text-slate-500/60 active:text-slate-500/80" {...rest}><FontAwesomeIcon icon={icon} /></div>
    );
}