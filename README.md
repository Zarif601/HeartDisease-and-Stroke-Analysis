# Topic and Reasoning
The research question our group explores two datasets: one looks at stroke data to see if we can acurately predict whether a person will have a stroke based on the preexisting conditions, and the other investigates heart disease data to do the same. We chose this topic because strokes and heart diseases are very relevant in the medical field which garnishes lots of attention. Many people around the world are affected by these often fatal diseases and the rates of these diseases appearing amongst people have been steadily increasing for the past few decades. <br><br>

## Source of Data
We collected both the datasets from Kaggle. Kaggle is an online community platform of machine learning engineers and data scientists and is rich with many relevant datasets from various different fields.

## Goal
Our goal is to ultimately create machine learning models for both the stroke and heart disease datasets so that we can predict future stroke or heart disease based on information collected in the same format respectively. We also want to analyze general trends and patterns of different features in our dataset and how they affect the development of strokes and heart diseases in people.

# Technologies Used <br>

## Data Cleaning and Analysis
In this project, we first aim to explore and analyze the "stroke_data" dataset. The dataset comprises of common characteristics (such as age, occupation, marital status, etc.) associated to stroke risk. In order to properly analyze the dataset, we use the Python library 'Pandas' to clean and organize our data. Our dataset had a few null values and we started our data preprocessing by dropping them. After that we checked for duplicate entries and then dropped the 'id' column as it wasn't going to be helpful for the machine learning. We then worked on some of the categorical features to have numerical values and made sure every things is in the same format. Afterwards, we looked at the correlation between all the different features. Our focus was to look at how each feature interacted with the stroke labels. We saw nothing significant looking at the correlation values and decided to move forward with encoding our rest of the categorical features to numerical ones using one-hot-encoding. After that we created different machine learning models such as Logistic Regression, SVM, Decision Trees, Random Forest and Gradient Boosting to see how accurately they can predict strokes after training on our dataset. The accuracy scores came out to be really high across all the models, with some of them performing slightly better than others.

## Database Storage
Using the Python library SQLAlchemy, we will connect our notebooks to PostgreSQL (our method of database storage). To display our data, we will be using github pages.

## Machine Learning
Using the ML library SciKitLearn, we will be training and testing our model to predict whether a patient will have a stroke based on other attributes. Using various of supervised learning algorithms, we aim to achieve two things:
- Our goal is to have our model accurately assign test data to their actual class. In this case, we hope our model to predict correctly whether the entry has had a stroke or not
- We also strive for our model to understand the relationship between the dependent and independent variables. In this case, we seek to see the relationship between the different characteristics in a person and their chance of stroke

## Dashboard
Using Github pages, we will  integrate D3.js for a fully functional and interactive dashboard to display the conclusions of our anaylsis. We will incorporate Tableau to aid with our visualizations of the data. 

