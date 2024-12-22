# Talk (WIP) ~ Harvey Coombs, 2024
import ollama

model_name = input("Model Name (Default = DeepSeek V2 Lite): ")
model = ollama.load_model("deepseek-v2:lite" if len(model_name) == 0 else model_name)

prompt = input(">> ")

output = model.predict({ "text": prompt })

print(output)
