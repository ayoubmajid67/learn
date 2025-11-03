from flask import Blueprint, request, jsonify
import pickle
import numpy as np
import os

# Create Blueprint
api_bp = Blueprint('api', __name__)

# Load the saved model at startup
MODEL_PATH = os.path.join('models', 'knn_model.pkl')
with open(MODEL_PATH, 'rb') as file:
    model = pickle.load(file)

# Example: Feature scaling (if your model needs it)
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()

# Hard-coded fit on training features for demonstration
# In production, save scaler as well and load
scaler.mean_ = np.array([35.0, 70000.0, 0.5])  # Example mean
scaler.scale_ = np.array([10.0, 40000.0, 0.5]) # Example std

# ----------------------
# Health Check Endpoint
# ----------------------
@api_bp.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "UP", "model_loaded": model is not None})

# ----------------------
# Info Endpoint
# ----------------------
@api_bp.route('/info', methods=['GET'])
def info():
    return jsonify({
        "model": "KNN Classifier",
        "description": "Predict if a user will purchase based on Age, EstimatedSalary, Gender",
        "features": ["Age", "EstimatedSalary", "Gender"]
    })

# ----------------------
# Predict Endpoint
# ----------------------
@api_bp.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    try:
        # Extract features
        age = float(data.get('Age'))
        salary = float(data.get('EstimatedSalary'))
        gender = int(data.get('Gender'))  # 0 or 1

        X = np.array([[age, salary, gender]])
        X_scaled = scaler.transform(X)  # Optional if your model needs scaling
        prediction = model.predict(X_scaled)[0]

        # Friendly response
        message = "The model predicts the user will PURCHASE." if prediction == 1 else "The model predicts the user will NOT purchase."

        return jsonify({
            "prediction": int(prediction),
            "message": message
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

