from flask import Flask, request

# Load the AI model
from nomic.gpt4all import GPT4All
model = GPT4All()
model.open()

# Create a seperate Flask app
app = Flask(__name__)

# The GPT server is hosted at localhost:4050
PORT = 4050

@app.route('/')
def chatgpt():
    # Take ?p= as a prompt
    prompt = request.args.get('p', type = str)

    if prompt == None:
        return "No prompt given"

    # Fulfill the request
    return model.prompt(prompt)

# Run the app
app.run(port=PORT, host="0.0.0.0")