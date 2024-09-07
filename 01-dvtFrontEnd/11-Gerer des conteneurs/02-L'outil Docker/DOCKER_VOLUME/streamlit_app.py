import streamlit as st
import pandas as pd

df = pd.DataFrame(
    {
        "A": [1,2,3],
        "B": [4,5,6]
    }
)
st.dataframe(df)

df.to_csv("/crypto/data/my_btc.csv")