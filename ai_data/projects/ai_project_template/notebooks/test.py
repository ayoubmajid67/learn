
import sys
import os

"""
This manually adds the parent directory of notebooks/ (which is CODE/)
 to the import path — making src visible.
"""
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from src.model_train import train_knn, save_model
print("hello world")
