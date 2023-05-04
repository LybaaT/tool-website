from flask import Flask, request
from flask_cors import CORS

# Load the AI model
from nomic.gpt4all import GPT4All
model = GPT4All()
model.open()

# Create a seperate Flask app
app = Flask(__name__)
CORS(app)

# The GPT server is hosted at localhost:4050
PORT = 4050

@app.route('/')
def chatgpt():
    # Take ?p= as a prompt
    prompt = request.args.get('p', type = str)

    if prompt == None:
        return "No prompt given"

    return model.prompt(prompt)

# Run the app
app.run(port=PORT, host="0.0.0.0")