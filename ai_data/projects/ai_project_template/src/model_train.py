from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score
import numpy as np
import pickle

def train_knn(X_train, y_train, n_neighbors=5, cv_folds=5, verbose=True):
    """
    Train a K-Nearest Neighbors classifier and perform cross-validation.
    
    Parameters:
    - X_train: Training features
    - y_train: Training labels
    - n_neighbors: Number of neighbors for KNN
    - cv_folds: Number of folds for cross-validation
    - verbose: Whether to print cross-validation results
    
    Returns:
    - classifier: Trained KNN model
    - cv_scores: Array of cross-validation scores
    - mean_cv_score: Average accuracy across folds
    """
    
    # Initialize KNN classifier
    classifier = KNeighborsClassifier(n_neighbors=n_neighbors)
    
    # Perform cross-validation
    cv_scores = cross_val_score(classifier, X_train, y_train, cv=cv_folds, scoring='accuracy')
    mean_cv_score = np.mean(cv_scores)
    
    if verbose:
        print(f"Cross-validation scores ({cv_folds} folds): {cv_scores}")
        print(f"Average CV accuracy: {mean_cv_score:.2f}")
    
    # Train KNN on full training set
    classifier.fit(X_train, y_train)
    
    return classifier, cv_scores, mean_cv_score

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