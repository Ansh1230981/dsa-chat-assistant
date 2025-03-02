from fastapi import FastAPI, Depends
from pydantic import BaseModel
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()
openai_api_key = os.getenv("OPENAI_API_KEY")

class Query(BaseModel):
    leetcode_url: str
    question: str

@app.post("/ask")
def ask_gpt(query: Query):
    client = OpenAI(api_key=openai_api_key)
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": f"Help with {query.leetcode_url}: {query.question}"}]
    )
    return {"response": response['choices'][0]['message']['content']}
