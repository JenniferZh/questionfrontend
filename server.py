from flask import Flask
from flask import request
from flask_cors import *
import json

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/api/link/scope/read')
def table_data():
    scope = request.args.get('scope')
    if(scope == '电网工程'):
        data = []
        adata = {}
        adata['code'] = 'fsdfdf'
        adata['name'] = 'fff'
        adata['link_full_name'] = 'fd'
        adata['status'] = 0
        data.append(adata)
        data.append(adata)

    else:
        data = []
        adata = {}
        adata['code'] = 'aaaaa'
        adata['name'] = 'fff2222'
        adata['link_full_name'] = 'fdff'
        adata['status'] = 1
        data.append(adata)
        data.append(adata)
    return json.dumps(data)

if __name__ == '__main__':
    app.run()
