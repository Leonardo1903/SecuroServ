import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report

data = pd.read_csv('train.csv')

X = data[['profile pic','name==username','description length','external URL','private','#posts','#followers','#follows']]

y = data['fake']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LogisticRegression()
model.fit(X_train, y_train)


y_pred = model.predict(X_test)

y_prob = model.predict_proba(X_test)[:, 1]

accuracy = accuracy_score(y_test, y_pred)
report = classification_report(y_test, y_pred)

print(f'Accuracy: {accuracy}')
print(report)

profile_to_predict = np.array([[0,0,30,0,1,0,1,12]]) 
fake_probability = model.predict_proba(profile_to_predict)[:, 1]

print(f'Probability of the profile being fake: {fake_probability[0] * 100:.2f}%')
