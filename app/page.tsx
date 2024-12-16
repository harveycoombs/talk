import Field from "./components/field";
import Button from "./components/button";

export default function Home() {
    return (
        <main className="grid place-items-center h-screen">
            <Field />
            <Button>Click Me</Button>
        </main>
    );
}