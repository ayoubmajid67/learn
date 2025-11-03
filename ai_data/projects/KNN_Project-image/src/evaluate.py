# evaluate.py
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
import numpy as np

def evaluate_model(model, X_test, y_test):
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    cm = confusion_matrix(y_test, y_pred)
    report = classification_report(y_test, y_pred, digits=4)
    return float(acc), cm, report

def top_k_predictions(model, X, k=3):
    """
    Return top-k predictions and probabilities if available.
    For KNeighborsClassifier predict_proba is available.
    """
    if hasattr(model, "predict_proba"):
        probs = model.predict_proba(X)
        topk_idx = np.argsort(-probs, axis=1)[:, :k]
        topk_scores = -np.sort(-probs, axis=1)[:, :k]
        return topk_idx, topk_scores
    else:
        preds = model.predict(X)
        return preds, None
