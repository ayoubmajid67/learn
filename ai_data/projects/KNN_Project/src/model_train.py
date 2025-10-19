  # Train the KNN model
from sklearn.neighbors import KNeighborsClassifier
import pickle

def train_knn(X_train, y_train, n_neighbors=5):
    classifier = KNeighborsClassifier(n_neighbors=n_neighbors)
    classifier.fit(X_train, y_train)
    return classifier


"""
Author: Ayoub Majjid
Description: Model definition and training


🧠 1. What is a .pkl file?

A .pkl file (Pickle file) is a serialized Python object, meaning it stores your trained model (or any Python object) in binary format.
You can load it later to make predictions instantly — no need to retrain the model again.

⚙️ 2. When to Save It
You save your model after training — for example, at the end of your train_knn() function or in your main.py.

"""

def save_model(model, filename='knn_model.pkl'):
    with open(filename, 'wb') as file:
        pickle.dump(model, file)
    print(f"✅ Model saved as {filename}")