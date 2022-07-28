# Topic and Reasoning
The research question our group explores two datasets: one looks at stroke data to see if we can acurately predict whether a person will have a stroke based on the preexisting conditions, and the other investigates heart disease data to do the same. We chose this topic because strokes and heart diseases are very relevant in the medical field which garnishes lots of attention. Many people around the world are affected by these often fatal diseases and the rates of these diseases appearing amongst people have been steadily increasing for the past few decades. <br><br>

## Source of Data
We collected both the datasets from Kaggle. Kaggle is an online community platform of machine learning engineers and data scientists and is rich with many relevant datasets from various different fields.

## Goal
Our goal is to ultimately create machine learning models for both the stroke and heart disease datasets so that we can predict future stroke or heart disease based on information collected in the same format respectively. We also want to analyze general trends and patterns of different features in our dataset and how they affect the development of strokes and heart diseases in people.

# Technologies Used <br>
We are using Python and Jupyter Notebooks for generating our visualizations and making machine learning models. Our dashboard is powered by HTML/CSS and Javascript. We are using Github Pages to display the dashboard and keep it running.

## Data Cleaning and Analysis

### Stroke Prediction
In this project, we first aim to explore and analyze the "stroke_data" dataset. The dataset comprises of common characteristics (such as age, occupation, marital status, etc.) associated to stroke risk. In order to properly analyze the dataset, we use the Python library 'Pandas' to clean and organize our data. Our dataset had a few null values and we started our data preprocessing by dropping them. After that we checked for duplicate entries and then dropped the 'id' column as it wasn't going to be helpful for the machine learning. We then worked on some of the categorical features to have numerical values and made sure every things is in the same format. Afterwards, we looked at the correlation between all the different features. Our focus was to look at how each feature interacted with the stroke labels. We saw nothing significant looking at the correlation values and decided to move forward with encoding our rest of the categorical features to numerical ones using one-hot-encoding. After that, using the machine learning library 'Scikit-Learn' we created different machine learning models such as Logistic Regression, SVM, Decision Trees, Random Forest and Gradient Boosting to see how accurately they can predict strokes after training on our dataset. The accuracy scores came out to be really high across all the models, with some of them performing slightly better than others. To streamline the process, we could create machine learning pipelines to test many other machine learning models on this dataset and compare between them.

### Heart Disease Prediction
The second part of the project aims to investigate the "heart_disease_data" dataset. Similar to the stroke dataset, this one also is comprised of common features (such as age, smoking status, alcohol consumption, diabetes status, etc.) that relate to heart diseases. Like we did while exploring the previous dataset, we used 'Pandas' for our preprocessing purposes here as well. Here also, we tried to find null values and then converted categorical values to numerical ones as much as we could before encoding them. After that, we looked at the correlations between the different features by coreating a heatmap using the 'Seaborn' library. We saw that the correlation values for the 'SleepTime' feature was very small, so left it out of our machine learning process. We then encoded the rest of the categorical features using one-hot-encoding and then used a Neural Network model to create a predictor for heart disease. Our model reached an accuracy of about 91.17%. Testing different settings of the neural network hyper parameters and tuning them to perform better is achieveable and can be something to try for the future.

## Database Storage
Using the Python library SQLAlchemy, we made connections of our notebooks to PostgreSQL through AWS (our method of database storage).

## Dashboard
Using Github pages, we have integrated D3.js with HTML and CSS and built a fully functional and interactive dashboard to display the conclusions of our anaylsis.
