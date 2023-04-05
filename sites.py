from flask import Flask, render_template
from livereload import Server

app = Flask(__name__)

PORT = 3500

@app.route('/')
def homepage():
    return render_template('homepage.html.j2')

@app.route('/tool/<toolname>')
def tool(toolname):
    return render_template(toolname + '/index.html.j2')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html.j2')


#app.run(port=PORT, host="0.0.0.0")

server = Server(app.wsgi_app)
server.serve(port=PORT, host="0.0.0.0", debug=True)