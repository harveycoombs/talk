import ollama from "ollama";

interface ModelOptions {
    model: string;
    prompt?: string;
    messages?: any[];
}

export async function generate({ model, context }: ModelOptions) {
    if (!model?.length || !context?.length) return null;

    let response = await ollama.chat({
        model: model,
        messages: context
    });

    return response?.message?.content;
}