# visualize.py
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
from sklearn.metrics import ConfusionMatrixDisplay

def show_sample_images(X, y, preds=None, indices=None, n=9):
    """
    Show n sample images (28x28)
    X shape (n_samples, 784)
    """
    if indices is None:
        rng = np.random.default_rng()
        indices = rng.choice(X.shape[0], size=n, replace=False)
    plt.figure(figsize=(8,8))
    for i, idx in enumerate(indices):
        ax = plt.subplot(int(np.sqrt(n)), int(np.sqrt(n)), i+1)
        plt.imshow(X[idx].reshape(28,28), cmap='gray')
        title = f"label: {y[idx]}"
        if preds is not None:
            title += f"\npred: {preds[idx]}"
        plt.title(title, fontsize=8)
        plt.axis('off')
    plt.tight_layout()
    plt.show()

def plot_confusion_matrix(cm, labels=None, figsize=(8,6)):
    plt.figure(figsize=figsize)
    disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=labels)
    disp.plot(cmap='Blues', values_format='d', ax=plt.gca())
    plt.xticks(rotation=45)
    plt.show()

def plot_cv_scores(cv_scores, title="CV Fold Accuracies"):
    import matplotlib.pyplot as plt
    folds = np.arange(1, len(cv_scores)+1)
    plt.figure(figsize=(6,4))
    plt.bar(folds, cv_scores, alpha=0.8)
    plt.axhline(np.mean(cv_scores), color='r', linestyle='--', label=f"mean {np.mean(cv_scores):.4f}")
    plt.xlabel("Fold")
    plt.ylabel("Accuracy")
    plt.title(title)
    plt.legend()
    plt.show()

def plot_noise_vs_accuracy(noise_levels, accuracies):
    plt.figure(figsize=(6,4))
    plt.plot(noise_levels, accuracies, marker='o')
    plt.xlabel("Gaussian noise sigma")
    plt.ylabel("Accuracy")
    plt.title("Effect of noise on KNN accuracy")
    plt.grid(True)
    plt.show()
