# Encode, scale, split

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler

def preprocess_data(df):
    """
    The column Gender contains text values like "Male" and "Female" (or "Homme", "Femme", depending on the dataset).
    Machine learning algorithms (like KNN) can only work with numbers, not text.
    So we must convert categorical text values → numerical codes.
    Take the Gender column, convert all its values to strings, encode them as numbers (0, 1, etc.), and replace the original column with the numeric version.”
    """
    
    df['Gender'] = LabelEncoder().fit_transform(df['Gender'].astype(str))
    X = df[['Age', 'EstimatedSalary', 'Gender']].values
    y = df['Purchased'].values
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=0)
    
    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    X_test = sc.transform(X_test)
    
    return X_train, X_test, y_train, y_test
