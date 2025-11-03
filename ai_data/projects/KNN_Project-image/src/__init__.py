"""
===========================================================
Package: src
Author: Ayoub Majjid
Description:
    This package contains all the core modules used to build,
    train, and evaluate the K-Nearest Neighbors (KNN) model
    for the AI training project.

Purpose of __init__.py:
    - Marks the 'src' directory as a Python package.
    - Allows importing modules and functions from this folder.
    - Optionally re-exports main functions for easier imports
      in other scripts (e.g., main.py).

Package Structure:
    src/
    ├── __init__.py          # Package initializer (this file)
    ├── data_loader.py       # Handles dataset loading
    ├── preprocessing.py     # Data encoding, scaling, and splitting
    ├── model_train.py       # Model definition and training
    ├── evaluate.py          # Model evaluation and metrics
    └── visualize.py         # (Optional) Data and result visualization

Example Usage:
    >>> from src import load_data, preprocess_data, train_knn, evaluate_model
    >>> df = load_data()
    >>> X_train, X_test, y_train, y_test = preprocess_data(df)
    >>> model = train_knn(X_train, y_train)
    >>> acc, cm = evaluate_model(model, X_test, y_test)
    >>> print(f"Accuracy: {acc:.2f}")

Note:
    The file can remain empty if only used to mark the folder
    as a package. Re-exporting functions is optional but makes
    the import syntax cleaner.
===========================================================
"""

# Optional re-exports (uncomment if you want short imports)
# from .data_loader import load_data
# from .preprocessing import preprocess_data
# from .model_train import train_knn,save_model
# from .evaluate import evaluate_model
# from .visualize import plot_decision_boundary

