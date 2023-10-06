import random
import dice_art as art
import streamlit as st
import time

dice = []
total = 0

st.set_page_config(page_title="Dice Roller",page_icon=":high_voltage:", layout="centered")
with st.container():
    st.subheader("Dice Roller :game_die:")

with st.form(key='num_form'):
    num_of_dice = st.slider('Seconds', min_value=1,max_value=20, value=5, step=1)

    submit_button = st.form_submit_button(label='Generate Random Dice')


if submit_button:
    st.markdown(f'{num_of_dice} Dices')
    
    for die in range(num_of_dice):
        dice.append(random.randint(1, 6))
    
    for i in range(num_of_dice):
        # for line in range(5):
        st.markdown(f'```{art.dice_art.get(dice[i])} \n Dice {i+1}: Value {dice[i]}')
        time.sleep(1)
    
