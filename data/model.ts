import ollama from "ollama";

interface ModelOptions {
    model: string;
    prompt?: string;
    messages?: any[];
}

export async function generate({ model, messages }: ModelOptions) {
    if (!model?.length || !messages?.length) return null;

    let response = await ollama.chat({
        model: model,
        messages: messages.map(message => ({ role: message.you ? "user" : "assistant", content: message.content.trim() }))
    });

    return response?.message?.content;
}