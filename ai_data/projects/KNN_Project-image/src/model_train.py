# main_train.py
from data_loader import load_mnist
from preprocessing import normalize_images, train_test_split_images, add_gaussian_noise
from model_train import train_knn, save_model
from evaluate import evaluate_model
from visualize import show_sample_images, plot_confusion_matrix, plot_cv_scores, plot_noise_vs_accuracy
import numpy as np

def main(n_samples=None, n_neighbors=3, cv_folds=5, random_state=0):
    # 1. Load
    X, y = load_mnist()
    if n_samples is not None:
        X = X[:n_samples]
        y = y[:n_samples]

    # 2. Preprocess
    X = normalize_images(X)
    X_train, X_test, y_train, y_test = train_test_split_images(X, y, test_size=10000/(len(X)), random_state=random_state)

    # 3. Train (with CV)
    model, cv_scores, mean_cv = train_knn(X_train, y_train, n_neighbors=n_neighbors, cv_folds=cv_folds, verbose=True, random_state=random_state)

    # 4. Save model
    save_model(model)

    # 5. Evaluate on test set
    acc, cm, report = evaluate_model(model, X_test, y_test)
    print(f"Test Accuracy: {acc:.4f}")
    print("--- Classification Report ---")
    print(report)

    # 6. Visualize
    plot_cv_scores(cv_scores)
    plot_confusion_matrix(cm, labels=np.arange(10))
    # sample predictions
    preds = model.predict(X_test[:9])
    show_sample_images(X_test, y_test, preds, indices=np.arange(9))

    # 7. Optional: noise experiment
    noise_levels = [0.0, 0.05, 0.1, 0.2]
    accuracies = []
    for s in noise_levels:
        X_test_noisy = add_gaussian_noise(X_test, sigma=s)
        acc_s, _, _ = evaluate_model(model, X_test_noisy, y_test)
        accuracies.append(acc_s)
    plot_noise_vs_accuracy(noise_levels, accuracies)

if __name__ == "__main__":
    main()
