# preprocessing.py
import numpy as np
from sklearn.model_selection import train_test_split

def normalize_images(X):
    """Normalize pixel values to [0,1]. X shape (n_samples, 784)"""
    return X / 255.0

def add_gaussian_noise(X, sigma=0.1, clip=True, rng=None):
    """
    Add Gaussian noise to flattened images.
    X: (n_samples, 784)
    sigma: std dev of noise (applied on [0,1] scale)
    """
    if rng is None:
        rng = np.random.default_rng()
    noise = rng.normal(loc=0.0, scale=sigma, size=X.shape)
    X_noisy = X + noise
    if clip:
        X_noisy = np.clip(X_noisy, 0.0, 1.0)
    return X_noisy

def train_test_split_images(X, y, test_size=0.1666667, random_state=0):
    """
    Split into train/test.
    Default test_size corresponds to 10k/60k when using full MNIST (approx 1/6 ~ 0.1667)
    """
    return train_test_split(X, y, test_size=test_size, random_state=random_state, stratify=y)
