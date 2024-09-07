import streamlit as st
import pandas as pd

st.title('Affichage du fichier my_btc.csv')
df = pd.read_csv('/app/data/my_btc.csv')
st.dataframe(df)