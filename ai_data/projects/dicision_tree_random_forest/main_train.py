from src.model_train import train_knn, save_model
from src.evaluate import evaluate_model
from src.data_loader import load_data
from src.preprocessing import preprocess_data
from src.visualize import plot_decision_boundary_train_test

def main():
    df = load_data()
    X_train, X_test, y_train, y_test = preprocess_data(df)
    
    model = train_knn(X_train, y_train)
    
    # Save model
    save_model(model, 'models/knn_model.pkl')
    
    # Evaluate
    acc, cm = evaluate_model(model, X_test, y_test)
    print(f"Accuracy: {acc:.2f}")
    print("Confusion Matrix:\n", cm)
    
   # Visualize decision boundary with both train and test sets
    plot_decision_boundary_train_test(model, X_train, y_train, X_test, y_test)

if __name__ == "__main__":
    main()
