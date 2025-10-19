# Optional: plots and decision boundary
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap

def plot_decision_boundary(model, X, y, feature_indices=[0,1], title="KNN Decision Boundary"):
    """
    Visualize KNN decision boundary for 2 features.
    
    Parameters:
        model : trained KNN model
        X : feature matrix (scaled)
        y : labels
        feature_indices : list of 2 feature indices to plot (default [0,1] → Age & EstimatedSalary)
    """
    X_plot = X[:, feature_indices]
    
    # Create meshgrid
    x_min, x_max = X_plot[:,0].min() - 1, X_plot[:,0].max() + 1
    y_min, y_max = X_plot[:,1].min() - 1, X_plot[:,1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.01),
                         np.arange(y_min, y_max, 0.01))
    
    # Predict on grid
    Z = model.predict(np.c_[xx.ravel(), yy.ravel(), np.zeros_like(xx.ravel())])  # set Gender=0
    Z = Z.reshape(xx.shape)
    
    # Plot
    cmap_light = ListedColormap(['#FFAAAA', '#AAFFAA'])
    cmap_bold = ListedColormap(['#FF0000', '#00FF00'])
    
    plt.figure(figsize=(8,6))
    plt.contourf(xx, yy, Z, alpha=0.3, cmap=cmap_light)
    
    # Plot actual points
    for label in np.unique(y):
        plt.scatter(X_plot[y==label, 0], X_plot[y==label, 1],
                    c=[cmap_bold(label)], label=f"Purchased={label}", edgecolor='k', s=60)
    
    plt.xlabel("Age (scaled)")
    plt.ylabel("EstimatedSalary (scaled)")
    plt.title(title)
    plt.legend()
    plt.show()


def plot_decision_boundary_train_test(model, X_train, y_train, X_test, y_test, feature_indices=[0,1]):
    """
    Visualize KNN decision boundary for 2 features with both training and test sets.
    
    Parameters:
        model : trained KNN model
        X_train, y_train : training data
        X_test, y_test : test data
        feature_indices : list of 2 feature indices to plot (default [0,1] → Age & EstimatedSalary)
    """
    # Combine train and test to get meshgrid limits
    X_plot = np.vstack([X_train[:, feature_indices], X_test[:, feature_indices]])
    
    x_min, x_max = X_plot[:,0].min() - 1, X_plot[:,0].max() + 1
    y_min, y_max = X_plot[:,1].min() - 1, X_plot[:,1].max() + 1
    xx, yy = np.meshgrid(np.arange(x_min, x_max, 0.01),
                         np.arange(y_min, y_max, 0.01))
    
    # Predict on grid (fix Gender=0)
    Z = model.predict(np.c_[xx.ravel(), yy.ravel(), np.zeros_like(xx.ravel())])
    Z = Z.reshape(xx.shape)
    
    # Plot decision regions
    cmap_light = ListedColormap(['#FFDDDD', '#DDFFDD'])
    cmap_bold = ListedColormap(['#FF0000', '#00FF00'])
    
    plt.figure(figsize=(10,8))
    plt.contourf(xx, yy, Z, alpha=0.3, cmap=cmap_light)
    
    # Plot training points
    for label in np.unique(y_train):
        plt.scatter(X_train[y_train==label, feature_indices[0]], 
                    X_train[y_train==label, feature_indices[1]],
                    c=[cmap_bold(label)], marker='o', edgecolor='k', s=80,
                    label=f"Train Purchased={label}")
    
    # Plot test points
    for label in np.unique(y_test):
        plt.scatter(X_test[y_test==label, feature_indices[0]], 
                    X_test[y_test==label, feature_indices[1]],
                    c=[cmap_bold(label)], marker='s', edgecolor='k', s=100,
                    label=f"Test Purchased={label}")
    
    plt.xlabel("Age (scaled)")
    plt.ylabel("EstimatedSalary (scaled)")
    plt.title("KNN Decision Boundary with Train & Test Sets")
    plt.legend()
    plt.show()