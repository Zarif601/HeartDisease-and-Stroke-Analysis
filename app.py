# Importing the dependencies
from flask import Flask, jsonify
import datetime as dt
import numpy as np
import pandas as pd

# Importing the dependencies to help access POSTGRESS database
import os
import psycopg2
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

# Assigning link to our AWS Database to a variable
AWS_link = 'PLACE HOLDER'

# Setting up the database engine for the flask application which allows us to access and query the database
engine = create_engine(AWS_link)

# Reflecting an exisiting DATABASE into a new model/classes
Base = automap_base()

# Reflecting the TABLES/ SCHEMA of the database and create mappings
Base.prepare(engine, reflect=True)

# Creating a session which links python to our database in order to perform queries / we can create graphs using the data pulled
session = Session(engine)
""" 

PLACE QUERIES HERE

"""

# Creating a new Flask app instance
app = Flask(__name__) # '__name__ is a special chracter that set itself to be the file name

# Main route of the flask app
@app.route("/")
def welcome():
    return(
    '''
    MAIN PAGE TO FLASK <br>
    Climate link: http://127.0.0.1:5000/ <br>
    <br>
    ... <br>
    <br>
    Available Routes: <br>
    /later <br>
    ''')