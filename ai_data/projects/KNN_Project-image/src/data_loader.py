# data_loader.py
from sklearn.datasets import fetch_openml
import numpy as np

def load_mnist(use_openml=True, n_samples=None, as_float32=True):
    """
    Loads MNIST and returns (X, y)
    X : numpy array shape (n_samples, 784)
    y : numpy array shape (n_samples,) ints 0-9
    """
    if use_openml:
        mnist = fetch_openml('mnist_784', version=1, as_frame=False)
        X = mnist['data']
        y = mnist['target'].astype(np.int64)
        
    if n_samples is not None:
        X = X[:n_samples]
        y = y[:n_samples]

    if as_float32:
        X = X.astype('float32')
    return X, y
