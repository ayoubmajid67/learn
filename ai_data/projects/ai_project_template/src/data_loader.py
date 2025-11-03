 # Load and preprocess data

import pandas as pd

def load_data(path='data/Social_Network_Ads.csv'):
    return pd.read_csv(path)
