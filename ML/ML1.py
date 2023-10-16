import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

# Load your Instagram profile dataset
data = pd.read_csv('train.csv')  # Replace with your dataset

# Preprocessing: Handle missing values, feature scaling, etc.
# In this simplified example, let's assume you've already preprocessed the data.

# Features (X): Include relevant features from your dataset
X = data[['profile pic','name==username','description length','external URL','private','#posts','#followers','#follows']]

# Labels (y): 0 for real profiles, 1 for fake profiles
y = data['fake']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train a logistic regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions on the test set
y_pred = model.predict(X_test)

# Predict the probability of being fake (1) for each profile
y_prob = model.predict_proba(X_test)[:, 1]

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)

print(f'Accuracy: {accuracy}')
print(report)

# Predict the probability that a given profile is fake
profile_to_predict = np.array([[0,0,30,0,1,0,1,12]])  # Replace with the features of the profile to predict
fake_probability = model.predict_proba(profile_to_predict)[:, 1]

print(f'Probability of the profile being fake: {fake_probability[0] * 100:.2f}%')
